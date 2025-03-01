import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import People from "../pages/People";
import Art from "../pages/art";
import Carousel from "../pages/Carousel";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<People />
				<Carousel/>
				<Art />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
