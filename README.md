## uOttahack Application Portal
This repo hosts the web app that uOttahack uses to deliver content to the frontends that hackers, sponsors, volunteers, and mentors will use.

<img width="2069" alt="Screenshot 2023-12-03 at 10 06 30 PM" src="https://github.com/uOttaHack/uOttaApp-Portal/assets/46465622/3eda4d95-ec3c-4164-8550-0c495d6b8597">

### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or Yarn

### Tech Stack

To install and run the project, follow these steps:

1. Next.js
2. Clerk for role based Auth

### Installation

To install and run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/musebe/nextjs-clerk-organizations-rbac-authentication`
2. Navigate to the project folder: `cd your-project`
3. Install the dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`
5. Create a `.env` file and put in the credentials
5. Open your browser and visit `http://localhost:3000` to see the application.


### .env File Configs

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/


