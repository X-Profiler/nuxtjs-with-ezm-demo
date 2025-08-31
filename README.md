# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy with Node.js Server and enable EZM

Build the application for production:

```bash
npm run build
```

Deploy the application with EZM:

```bash
EZM_SERVER=ws://your-ezm-server:port EZM_APP_ID={EZM_APP_ID} EZM_APP_SECRET={EZM_APP_SECRET} npm start
```