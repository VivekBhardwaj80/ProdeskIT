import express from "express";
import cors from "cors";
import multer from "multer";
import * as pdfParse from "pdf-parse";
import fs from "fs";

import { config } from "dotenv";

import { GoogleGenerativeAI } from "@google/generative-ai";

config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

const upload = multer({
  dest: "./uploads",
});

app.get("/", (req, res) => {
  res.send("Cover Letter API Running");
});

app.post(
  "/generate",

  upload.single("resume"),

  async (req, res) => {
    try {
      const { name, role, company, skills } = req.body;

      let resumeText = "";

      if (req.file) {
        const buffer = fs.readFileSync(req.file.path);

        const parsed = await pdfParse.default(buffer);

        resumeText = parsed.text;
      }

      const prompt = `

You are an expert recruiter.

Generate a professional cover letter.

Candidate Name:
${name}

Target Role:
${role}

Target Company:
${company}

Skills:
${skills}

Resume Content:
${resumeText}

Rules:

Professional

Clear

Under 400 words

Return markdown

`;

      const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

      const model = ai.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(prompt);

      const text = result.response.text();

      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      res.json({
        success: true,

        coverLetter: text,
      });
    } catch (error) {
      console.log(error);

      res
        .status(500)

        .json({
          success: false,

          message: "Generation failed",
        });
    }
  },
);

app.listen(
  PORT,

  () => {
    console.log(`Server running on ${PORT}`);
  },
);
