document.querySelectorAll(".popup-link").forEach(link => link.onclick = e => {
	e.preventDefault();
	let id = link.getAttribute('href');
	if(id === '#' || !id) return;
	document.getElementById(id.substr(1)).classList.remove('hidden');
	const captionEl = document.getElementById(id.substr(1)).querySelector('.caption');
	if(captionEl){
		captionEl.innerText = link.dataset.caption;
	}
	document.body.classList.add('overflow-hidden');
})

document.querySelectorAll('.modal-overlay').forEach(el => {
	document.addEventListener('keydown', event => {
		if(event.key == 'Escape'){
			closeModal(el);
		}
	});

	el.addEventListener('click', event => {
		//console.log(event.target.dataset.close)
		if(typeof event.target.dataset.close != 'undefined'){
			closeModal(el);
		}
	})
})

function closeModal(modal){
	if (modal.dataset.type == 'video') {
		modal.querySelector('iframe').remove();
		modal.querySelector('.video-wrap').innerHTML = '<div id="player">';
	}
	modal.classList.add('hidden');
	const form = modal.querySelector('form');
	if(form){
		form.reset();
	}
	document.querySelectorAll('.error-message').forEach(mes => {
		mes.classList.add('hidden');
	});
	document.body.classList.remove('overflow-hidden');
}