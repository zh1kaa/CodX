import scss from "./people.module.scss";
import Frame from "../../assets/Frame.svg";

const people = () => {
	return (
		<section className={scss.people}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<span className={scss.text}>EXTRAORDINARY NFTs</span>
						<h1 className={scss.title}>Change your Digital Experience</h1>
						<p className={scss.description}>
							Suspendisse sem neque, auctor a elementum ut, varius vel leo.
							Donec diam arcu, porta et magna at
						</p>
					</div>
					<div className={scss.right}>
						<img src={Frame} alt="Frame" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default people;
