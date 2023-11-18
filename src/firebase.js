// change API to using firebase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// in order to use firebase api, we need to initilize it first

const firebaseConfig = {
  apiKey: "AIzaSyC9l-HGkguNIrsmo3MpTlrm42pIJxbuBLI",
  authDomain: "reactauthprj-2d738.firebaseapp.com",
  projectId: "reactauthprj-2d738",
  storageBucket: "reactauthprj-2d738.appspot.com",
  messagingSenderId: "718990212727",
  appId: "1:718990212727:web:a81a2f5f9d87fce49ed072",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
