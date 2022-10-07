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
let videoSlider = null;

const initSlidersForMobile = () => {
	let windowWidth = window.innerWidth;
	const complectBlock = document.querySelector('.complectations-slider');
	const videoBlock = document.querySelector('.video-slider');
	if(windowWidth < 640){
		complectSlider = new Swiper(complectBlock, {
			loop: true,
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-complectations-button-next',
				prevEl: '.swiper-complectations-button-prev',
			},
		});
		complectBlock.classList.remove('hidden');
		videoSlider = new Swiper(videoBlock, {
			loop: true,
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-video-button-next',
				prevEl: '.swiper-video-button-prev',
			},
		});
		videoBlock.classList.remove('hidden');
	}
	if(windowWidth >= 640 ){
		if (complectSlider && complectSlider.destroy) {
			complectSlider.destroy(false, true);
			complectBlock.classList.add('hidden');
		}
		if (videoSlider && videoSlider.destroy) {
			videoSlider.destroy(false, true);
			videoBlock.classList.add('hidden');
		}
	}
}

initSlidersForMobile();

window.addEventListener('resize', event => {
	initSlidersForMobile();
})