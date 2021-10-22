import Firebase from "Firebase/app";
import "Firebase/auth";

import { FirebaseCredentials } from "./firebaseApp.config";

Firebase.initializeApp(FirebaseCredentials);

export default Firebase;
