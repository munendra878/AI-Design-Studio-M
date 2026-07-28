import express from "express";

import {
  generatePrompt,
  generateImage
} from "../controllers/aiController.js";

const router = express.Router();

router.post("/prompt", generatePrompt);

router.post("/generate-image", generateImage);

export default router;