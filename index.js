const Webflow = require('webflow-api');
const webflow = new Webflow({ token: 'df0c9654d8a33da70e060a766bda3a52112107b3e7f961496ccb1959c8aae936' });

const siteId = '640965272cd6f776f9b9174b';
const domain = `https://${siteId}.webflow.io`;

async function publishSite() {
  try {
    await webflow.publishSite({ siteId });
    console.log(`Site published successfully at ${domain}`);
  } catch (error) {
    console.error(error);
  }
}

publishSite();
