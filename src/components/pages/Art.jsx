import scss from "./art.module.scss";
const art = () => {
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
				</div>
			</div>
		</section>
	);
};

export default art;
