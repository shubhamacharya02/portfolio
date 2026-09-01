# Shubham Acharya — AI Backend Developer Portfolio

A modern, high-performance portfolio showcasing production-ready AI backend architectures, LangGraph orchestration pipelines, and FastAPI services. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🚀 Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   A `.env.local` file has been provided for local development. You can also copy from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ⚙️ Environment Variables & Vercel Deployment

All links, personal information, and project links are parameterized using Next.js `NEXT_PUBLIC_` environment variables with safe default fallbacks.

### Configurable Variables

| Variable | Description | Default Fallback |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Base canonical domain (used in sitemap, robots, OG meta) | `https://shubham-acharya.dev` |
| `NEXT_PUBLIC_NAME` | Developer Full Name | `Shubham Acharya` |
| `NEXT_PUBLIC_TITLE` | Primary Headline Role | `AI Backend Developer` |
| `NEXT_PUBLIC_ROLE_HEADLINE` | Recruiter Header Tagline | `Building Production-Ready AI Backend Systems` |
| `NEXT_PUBLIC_SUBTITLE` | Skills Subtitle | `Agentic AI • LLM Workflows • FastAPI • LangGraph` |
| `NEXT_PUBLIC_DESCRIPTION` | Hero & OpenGraph Bio Description | *Detailed bio* |
| `NEXT_PUBLIC_LOCATION` | Location | `Bengaluru, India` |
| `NEXT_PUBLIC_EMAIL` | Contact Email | `shubhamacharya258@gmail.com` |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub Profile URL | `https://github.com/shubhamacharya77` |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub Username (for live API stats) | `shubhamacharya77` |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn Profile URL | `https://www.linkedin.com/in/shubham-acharya-3a5a9b423` |
| `NEXT_PUBLIC_RESUME_URL` | Resume PDF path or external URL | `/Shubham_Acharya_Resume.pdf` |
| `NEXT_PUBLIC_PROFILE_IMAGE` | Profile Image path or external URL | `/profile_picture.png` |
| `NEXT_PUBLIC_NEXUS_AI_GITHUB_URL` | Nexus AI GitHub repository | `https://github.com/shubhamacharya77/Nexus_AI_Backend` |
| `NEXT_PUBLIC_NEXUS_AI_LIVE_URL` | Nexus AI Live demo URL | `https://nexus-ai-frontend-nine.vercel.app/` |
| `NEXT_PUBLIC_PREPMATE_AI_GITHUB_URL` | PrepMate AI GitHub repository | `https://github.com/shubhamacharya77/Prepmate-AI-backend` |
| `NEXT_PUBLIC_PREPMATE_AI_LIVE_URL` | PrepMate AI Live demo URL | `https://prepmate-ai-frontend.vercel.app/` |

---

## 🌐 Deploying to Vercel

1. Push your code to GitHub / GitLab / Bitbucket.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Navigate to **Project Settings** ➔ **Environment Variables**.
4. Add any environment variables from the table above (or `.env.example`) to customize links or details without changing code.
5. Click **Deploy**!
