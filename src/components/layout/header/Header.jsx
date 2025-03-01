import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import BurgerButton from "../../ui/burgerButton/BurgerButton";
import logo from "../../../assets/logo.svg";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<img className={scss.logo} src={logo} alt="logo" />
						{!isMobile && (
							<nav>
								<ul>
									<li>
										<a href="#">About us</a>
									</li>
									<li>
										<a href="#">NFTs</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</nav>
						)}
					</div>
					<div className={scss.right}>
						{!isMobile && (
							<>
								<div className={scss.icons}>
									<a href="#">
										<FaTwitter size={30} />
									</a>
									<a href="#">
										<FaInstagram size={30} />
									</a>
									<a href="#">
										<FaFacebook size={30} />
									</a>
								</div>
								<button className={scss.button}>View on OpenSea</button>
							</>
						)}
						{isMobile && <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
