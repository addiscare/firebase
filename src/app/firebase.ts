import admin from "firebase-admin";
import * as dotenv from "dotenv";
dotenv.config();
import { getFirestore } from "firebase-admin/firestore";

if (!admin.apps.length) {
  //   const service = {
  //     universe_domain: "googleapis.com",
  //     type: "external_account",
  //     audience:
  //       "//iam.googleapis.com/projects/addiscare-9ac53/locations/global/workloadIdentityPools/firebase-admin-pool",
  //     subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
  //     token_url: "https://sts.googleapis.com/v1/token",
  //     project_id: "addiscare-9ac53",
  //     private_key_id: "",
  //     client_email: "",
  //     credential_source: {
  //       file: "oidc_token.json",
  //     },
  //     service_account_impersonation_url:
  //       "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/firebase-adminsdk-u99w4@addiscare-9ac53.iam.gserviceaccount.com:generateAccessToken",
  //   };

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://addiscare-9ac53.firebaseio.com",
  });
}

const db = getFirestore();

export { db };
