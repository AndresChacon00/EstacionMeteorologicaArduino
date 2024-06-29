import { getDatabase, off, onValue, ref } from "@firebase/database";
import { initializeApp } from "firebase/app";
import { useState, useSyncExternalStore } from "react";
import { Lectura } from "./db.server";

type ConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
  databaseUrl: string;
};

export function useRealtimeData(config: ConfigType) {
  const [data, setData] = useState<Lectura | null>(null);
  const app = initializeApp(config);
  const db = getDatabase(app);
  const sensorRef = ref(db, "Sensor/");

  function subscribe(onChange: () => void) {
    return onValue(sensorRef, (snapshot) => {
      setData(snapshot.val());
      onChange();
      return () => {
        off(sensorRef);
      };
    });
  }

  function getSnapshot() {
    return data;
  }

  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
