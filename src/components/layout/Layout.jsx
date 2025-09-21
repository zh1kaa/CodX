import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import People from "../pages/People";
import Art from "../pages/Art";
import Carousel from "../pages/Carousel";
import Work from "../pages/work";
import Outline from "../pages/Outline";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<People />
				<Carousel />
				<Art />
				<Work />
				<Outline />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
