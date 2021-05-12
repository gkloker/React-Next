import App from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!App.apps.length) {
      App.initializeApp(firebaseConfig);
    }
    this.auth = App.auth();
  }

  // Register an user
  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

    return await newUser.user.updateProfile({
      displayName: name
    })
  }

  // Sign in from user
  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Close user session
  async logOut() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;