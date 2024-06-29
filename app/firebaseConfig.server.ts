import { FirebaseApp, initializeApp } from "firebase/app";

let app: FirebaseApp;

declare global {
  // eslint-disable-next-line no-var
  var __app: FirebaseApp | undefined;
}

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
  databaseUrl: process.env.DATABASEURL,
};

if (process.env.NODE_ENV === "production") {
  app = initializeApp(firebaseConfig);
} else {
  // Solo inicializar una vez (prevenir errores por hot reloading)
  if (!global.__app) {
    global.__app = initializeApp(firebaseConfig);
  }
  app = global.__app;
}

export default app;
