# Aakash Joshi | Personal Portfolio

A high-performance, dark-themed personal portfolio built to showcase my experience in systems engineering, full-stack development, and machine learning.

## 🚀 Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** Custom SVG & Font integration
- **Deployment:** Docker (Self-hosted)

## 🧠 What's Inside?

The portfolio is driven by the dynamic data configuration in `lib/data.ts` and highlights my "systems-first mindset". It includes:

1. **About/Philosophy:** My multidisciplinary approach to engineering across AI, DevOps, and Infrastructure.
2. **Projects Archive:**
    - **Personal Homelab:** Proxmox hypervisor, Tailscale mesh network, and Docker services.
    - **ZenKraft:** An AI Yoga Assistant utilizing OpenCV and MediaPipe.
    - **EchoDeck:** A real-time collaborative streaming SaaS using WebSockets.
    - **ML Models:** Renewable Energy Forecasting, Sentiment Analysis, and Movie Recommending systems.
3. **Experience & Education:** Details about my internships at Averlon Enterprise Solutions, Tata Consulting Engineers, and TechEntrepreneurs, along with my B.E. at Pune University.
4. **Certifications & Leadership:** Extensive training records from NPTEL, Kaggle, IBM, and NVIDIA, alongside my roles as a Class Representative and Web Team Lead.

## 🛠️ Local Development

First, install the dependencies:

```bash
npm install
# or yarn install / pnpm install
```

Run the development server:

```bash
npm run dev
# or yarn dev / pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx` or updating the data in `lib/data.ts`.

## 🐳 Docker Deployment (Self-Hosted)

This project includes built-in configurations for deploying via Docker. To deploy this app on your own server or locally:

1. Clone or pull the latest changes from this repository.
2. Run one of the provided deployment scripts depending on your OS.

### For Linux / macOS (Bash)
```bash
# Make the script executable first (one-time)
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

### For Windows (PowerShell)
```powershell
.\deploy.ps1
```

Both scripts will automatically:
- Pull the latest code from the `main` branch.
- Build the `portfolio-aakash` Docker image.
- Stop and remove any existing `portfolio-aakash-container`.
- Start the new container on port `3000` in detached mode.

Your app will then be accessible at `http://localhost:3000`.
