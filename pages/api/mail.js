// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  console.log(body,"http://localhost:3000/http://localhost:3000/")
  res.status(200).json({ status: 'hi aper' })
}
