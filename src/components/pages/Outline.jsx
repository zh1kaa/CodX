import scss from "./Outline.module.scss";
import line from "../../assets/line.svg";

const Outline = () => {
	return (
		<section className={scss.Outline}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<div className={scss.plan}>
							<span className={scss.number}>01 Сасык</span>
							<h1 className={scss.title}>Motion Graphic</h1>
							<p className={scss.description}>
								Suspendisse sem neque, auctor a elementum ut, varius vel leo.
								Donec diam arcu, porta et magna at
							</p>
						</div>
					</div>
					<div className={scss.right}>
						<img src={line} alt="Outline" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Outline;
