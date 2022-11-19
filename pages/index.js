import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Contact from "./contact";
import Header from "../sections/header/Header";

export default function Home() {
    return (
        <div className="layout">
            <div className="container">
                <Header />
            </div>
        </div>
    )
}
