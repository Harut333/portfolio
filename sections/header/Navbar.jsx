import Link from "next/link";

export default function Navbar() {

    const navbar_items = [
        {
            id: 1,
            title: "Home",
            href: "/",
        },
        {
            id: 2,
            title: "Works",
            href: "/works",

        },
        {
            id: 3,
            title: "Contact me",
            href: "/contact",

        },
        {
            id: 4,
            title: "Download CV",
            href: "/cv",

        },
    ]

    return (
        <div className="navbar-items">
            <ul >
                {navbar_items.map((item) => {
                    return (

                        <li key={item.id}>
                            <Link href={item.href}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}