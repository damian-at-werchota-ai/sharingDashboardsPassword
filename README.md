# n8n RAG Workflows Dashboard

A password-protected dashboard for n8n RAG workflows with secure authentication.

## Features

- 🔐 Password-protected access
- 🖥️ Responsive dashboard interface
- 🔒 Server-side password verification
- ⏱️ Session timeout management
- 🛡️ Secure environment variable handling

## Deployment

1. Fork or clone this repository
2. Import into Vercel
3. Set environment variable `PORTFOLIO_PASSWORD` in Vercel dashboard
4. Deploy

## Environment Variables

- `PORTFOLIO_PASSWORD`: The access password for the dashboard

## File Structure

├── index.html # Login page
├── RAGdashboard.html # Main dashboard
├── api/
│ └── verify-password.js # Password verification API
├── package.json # Project configuration
├── vercel.json # Vercel deployment config
└── README.md # This file



## Local Development

Since this is a static site with API routes, you can use Vercel CLI for local development:

npm install -g vercel
vercel dev
