import { getApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

export function Firestore() {
	const app = getApp();
	let db = getFirestore(app);

	try {
		if (process.env.NEXT_PUBLIC_USE_EMULATORS) {
			// @ts-ignore
			if (typeof window === "undefined" || !window["_init"]) {
				connectFirestoreEmulator(db, "localhost", 8080);

				if (typeof window !== "undefined") {
					// @ts-ignore
					window["_init"] = true;
				}
			}
		}

		return db;
	} catch (error) {
		console.log(error);

		return db;
	}

	return db;
}
