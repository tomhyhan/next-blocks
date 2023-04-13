
import multer from "multer";
import { createRouter, expressWrapper } from "next-connect";

const router = createRouter();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.get((req, res) => {
  res.status(200).json({hello:"client"})
})

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
}

router.post(upload.single('image'), async (req, res) => {
  const file = req.file
  const caption = req.body
    
  console.log(file);
  console.log(caption);

  res.status(200).json({hello:"client"})
})

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});