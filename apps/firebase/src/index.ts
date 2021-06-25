// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access Firebase Features from within Cloud Functions.
import * as admin from 'firebase-admin';
admin.initializeApp();

// Set up extra settings. Since May 29, 2020, Firebase Firebase Added support for
// calling FirebaseFiresore.settings with { ignoreUndefinedProperties: true }.
// When this parameter is set, Cloud Firestore ignores undefined properties
// inside objects rather than rejecting the API call.
admin.firestore().settings({
  ignoreUndefinedProperties: true,
});

const text = 'text'
//const t = 'Example ' + text     // this works fine, 'date-fns' IS correctly detected as a static dependency
//const t = `Example`             // this works fine, 'date-fns' IS correctly detected as a static dependency
const t = `Example ${text}`   // with this line before the import, 'date-fns' is NOT detected as a static dependency

// We expect 'date-fns' to be a static npm dependency of this app
import * as datefns from 'date-fns'

//const t = `Example ${text}`   // with this line AFTER the import, 'date-fns' IS detected as a static dependency, but camelcase isn't

// We expect 'camelcase' to be a static npm dependency of this app
import * as camelcase from 'camelcase'









// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
