import {getFirestore, collection, getDocs} from "firebase/firestore";
import app from "../firebaseConfig";

const db = getFirestore(app);

export async function getLecturas() {
    const lecturasCollection = collection(db, "lecturas");
    const lecturasSnapshot = await getDocs(lecturasCollection);
    const lecturasList = lecturasSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            Temperatura: data.Temperatura,
            Humedad: data.Humedad,
            CalidadAire: data.CalidadAire,
            Lluvia: data.Lluvia
        };
    });
    return lecturasList;
}