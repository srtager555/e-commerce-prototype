import { Navbar } from "@/components/Navbar.layout";

interface props {
	children: children;
}

export function MainLayout({ children }: props) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
