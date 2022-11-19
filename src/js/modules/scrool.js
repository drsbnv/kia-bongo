document.querySelectorAll("a[href^='#']:not(.popup-link)").forEach(link => link.onclick = e => {
	e.preventDefault()
	const id = link.getAttribute('href')
	if(id === '#' || !id) return;
	scrollIntoElement(id)
	if(link.classList.contains('mobile-menu-link')){
		inputMenuBtn.checked = false;
	}
})

function scrollIntoElement(id){
	document.querySelector(id).scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
	duration: 700,
	once: true,
});
