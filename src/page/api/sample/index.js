export default function handler(req, res) {
    console.log("requesting...")
    res.status(200).json({ name: 'John Doe' })
  }