import scss from "./Carousel.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import photo from "../../assets/bottom.svg";

const animation = { duration: 50000, easing: (t) => t };

const Carousel = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		renderMode: "performance",
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
	});

	return (
		<section className={scss.Carousel}>
			<div className={scss.container}>
				<div className={scss.content}>
					<div ref={sliderRef} className="keen-slider">
						<div className="keen-slider__slide">
							<img className={scss.image} src={photo} alt="photo" />
						</div>
						<div className="keen-slider__slide">
							<img className={scss.image} src={photo} alt="photo" />
						</div>
						<div className="keen-slider__slide">
							<img className={scss.image} src={photo} alt="photo" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
