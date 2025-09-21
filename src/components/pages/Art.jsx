import scss from "./Art.module.scss";
import artist from "../../assets/artist.png";

const Art = () => {
	return (
		<section className={scss.art}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.title_block}>
						<h1 className={scss.sup_title}>Hey there, we are</h1>
						<p className={scss.sub_title}>
							Suspendisse sem neque, auctor a elementum ut, varius vel leo.
							Donec diam <br /> arcu, porta et magna at
						</p>
					</div>
					<div className={scss.tabs}>
						<button className={scss.btn}>Jack</button>
						<button className={scss.btn}>Suni</button>
						<button className={scss.btn}>Colin</button>
					</div>
					<div className={scss.tab_digital}>
						<div className={scss.left}>
							<img src={artist} alt="artist" />
						</div>
						<div className={scss.right}>
							<span className={scss.role}>Digital Artist</span>
							<h1 className={scss.artist_title}>
								Pellentesque blandit in quam rhoncus
							</h1>
							<p className={scss.artist_text}>
								Suspendisse ante mauris, volutpat congue sem ac, ultrices tempor
								lorem. Nullam eget vehicula tellus, ac consectetur urna. Mauris
								tincidunt, libero id ultrices tincidunt, mi leo pharetra dolor,
								sed luctus dui ipsum et augue. Integer non quam feugiat,
								porttitor libero a, tempor neque. Nulla ac orci mauris. Quisque
								nisi nisl, rutrum ac diam et, semper commodo quam
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Art;
