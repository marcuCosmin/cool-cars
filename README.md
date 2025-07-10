# Presentation website for [Cool Cars South Coast Ltd](https://cool-cars.co.uk/)

## Tech stack:
- Next.js
- React
- Typescript
- TailwindCSS

## Setup:
- Clone the repo:
    git clone https://github.com/marcuCosmin/cool-cars.git
- Create env files:
    .env.development
    .env.production (in case you want to preview the production build)
- Populate the env files with the following env vars:
    NEXT_PUBLIC_API_URL = "http://localhost:3001/mail" (The url for the contact form api)
    NEXT_PUBLIC_EMAIL = "youremail@domain.com" (The email to which the contact form content should be sent to)
- Install dependencies:
    npm i
- Run project:
    npm run dev (dev build uses .env.developement)
    npm run start (production build uses .env.production)
