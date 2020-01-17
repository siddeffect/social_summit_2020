const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
exports.getLatestPosts = functions.https.onRequest(async (req, res) => {
  const snapshot = await firestore.collection("caData").get();
  res.send(snapshot.docs.map(doc => doc.data()));
});

exports.getTotalMunData = functions.https.onRequest(async (req, res) => {
  const snapshot = await firestore.collection("munData").get();
  res.send(snapshot.docs.map(doc => doc.data()));
});
