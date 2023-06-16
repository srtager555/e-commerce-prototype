import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { ProductList } from "@/components/home/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Simple e-commerse prototype" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="https://i.ibb.co/X5Wg7S5/kda.jpg" />
			</Head>
			<FeaturedProduct />
			<ProductList />
			<ProductList />
			<ProductList />
		</>
	);
}
