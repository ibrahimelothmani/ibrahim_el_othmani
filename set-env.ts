const fs = require('fs');
const dotenv = require('dotenv');

// Load variables from .env file
dotenv.config();

// Prepare environment file content
const environmentFileContent = `
export const environment = {
  production: false,
  firebase: {
    apiKey: "${process.env["FIREBASE_API_KEY"]}",
    authDomain: "${process.env["FIREBASE_AUTH_DOMAIN"]}",
    projectId: "${process.env["FIREBASE_PROJECT_ID"]}",
    storageBucket: "${process.env["FIREBASE_STORAGE_BUCKET"]}",
    messagingSenderId: "${process.env["FIREBASE_MESSAGING_SENDER_ID"]}",
    appId: "${process.env["FIREBASE_APP_ID"]}",
  },
};
`;

// Write to environment.ts file
fs.writeFileSync('./src/environments/environment.ts', environmentFileContent);

console.log('Environment file generated successfully!');
