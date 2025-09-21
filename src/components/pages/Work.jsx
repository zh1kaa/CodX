import scss from "./Work.module.scss";
import man from "../../assets/man.svg";

const Work = () => {
	return (
		<section className={scss.Work}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<img src={man} alt="man" />
					</div>
					<div className={scss.right}>
						<span className={scss.text}>our work</span>
						<h1 className={scss.title}>“Um… what’s going on here?”</h1>
						<p className={scss.description}>
							Nulla facilisi. Praesent molestie diam eu enim aliquet
							pellentesque. Vestibulum consectetur vestibulum tristique. Sed
							purus neque, maximus fermentum bibendum et, porta in sapien.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Work;
