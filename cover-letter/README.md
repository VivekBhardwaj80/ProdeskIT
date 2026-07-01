# README.md

# AI Cover Letter Generator

A SaaS-style AI application that generates professional cover letters using user inputs and Google Gemini API.

---

## Features

### Phase 1 — Base MVP

* Candidate information form
* State handling using form submission
* Cover letter generation
* Copy to Clipboard functionality
* Generated output section

### Phase 2 — AI Integration & Security

* Google Gemini API integration
* Prompt engineering with dynamic user input
* Secure API storage using `.env`
* Loading state while generating content

### Phase 3 — SaaS Enhancements

* Resume PDF upload
* Resume text extraction
* Context-aware cover letter generation
* Markdown to HTML rendering

---

## Tech Stack

Frontend:

* HTML
* CSS
* JavaScript

Backend:

* Node.js
* Express.js

Libraries:

* @google/generative-ai
* multer
* pdf-parse
* dotenv
* cors
* marked

---

## Project Structure

cover-letter-saas/

client/

* index.html
* style.css
* script.js

server/

* server.js
* package.json
* package-lock.json
* .env
* .gitignore
* uploads/

README.md
Prompts.md

---

## Installation

Clone repository:

git clone YOUR_REPOSITORY_URL

Move into project:

cd cover-letter-saas

Install backend dependencies:

cd server

npm install

---

## Environment Variables

Create:

server/.env

Add:

PORT=5000

GEMINI_API_KEY=YOUR_API_KEY

---

## Running Application

Start backend:

node server.js

Open frontend:

client/index.html

or use Live Server.

---

## Application Flow

User Input

↓

Frontend Validation

↓

Backend API

↓

Gemini Model

↓

Generated Cover Letter

↓

Rendered HTML Output

---

## Security Notes

* API keys are stored in `.env`
* `.env` is excluded using `.gitignore`
* API keys are never committed to GitHub

---

## Testing Checklist

* Generate without resume
* Generate with resume
* Copy output
* Empty validation
* Server failure handling
* Long input testing

---

## Future Improvements

* Authentication
* Cover letter templates
* Export to PDF
* Usage analytics
* Deployment support

---
