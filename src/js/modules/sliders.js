import Swiper, { Navigation, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const interioirThumbsSlider = new Swiper('.interioir-thumbs-slider', {
	loop: true,
	modules: [Controller],
	slidesPerView: 4,
	slideToClickedSlide: true,
	loopedSlides: 4
});

const interioirSlider = new Swiper('.interioir-slider', {
	loop: true,
	modules: [Navigation, Controller],
	navigation: {
		nextEl: '.swiper-interioir-button-next',
		prevEl: '.swiper-interioir-button-prev',
	},
	loopedSlides: 4
});

interioirThumbsSlider.controller.control = interioirSlider;
interioirSlider.controller.control = interioirThumbsSlider;

const exteriorThumbsSlider = new Swiper('.exterior-thumbs-slider', {
	loop: true,
	modules: [Controller],
	slidesPerView: 4,
	slideToClickedSlide: true,
	loopedSlides: 4
});

const exteriorSlider = new Swiper('.exterior-slider', {
	loop: true,
	modules: [Navigation, Controller],
	navigation: {
		nextEl: '.swiper-exterior-button-next',
		prevEl: '.swiper-exterior-button-prev',
	},
	loopedSlides: 4
});

exteriorThumbsSlider.controller.control = exteriorSlider;
exteriorSlider.controller.control = exteriorThumbsSlider;

let complectSlider = null;

const initComplectSlider = () => {
	let windowWidth = window.innerWidth;
	const block = document.querySelector('.complectations-slider');
	if(windowWidth < 640){
		complectSlider = new Swiper(block, {
			loop: true,
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-complectations-button-next',
				prevEl: '.swiper-complectations-button-prev',
			},
		});
		block.classList.remove('hidden');
	}
	if(windowWidth >= 640 ){
		if (complectSlider && complectSlider.destroy) {
			complectSlider.destroy(false, true);
			block.classList.add('hidden');
		}
	}
}

initComplectSlider();

window.addEventListener('resize', event => {
	initComplectSlider();
})