import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	const app = initializeApp({
		apiKey: "AIzaSyA9fA9WwpcxAVh_katj8nWwO-DWZoYcfJ4",
		authDomain: "e-commers-proto.firebaseapp.com",
		projectId: "e-commers-proto",
		storageBucket: "e-commers-proto.appspot.com",
		messagingSenderId: "86353155370",
		appId: "1:86353155370:web:b3632fe799deb02f5d7a53",
	});

	const auth = getAuth();

	// @ts-ignore
	if (process.env.NEXT_PUBLIC_USE_EMULATORS && !auth.config.emulator) {
		connectAuthEmulator(auth, "localhost:9099", { disableWarnings: true });
	}

	return <Component {...pageProps} />;
}
