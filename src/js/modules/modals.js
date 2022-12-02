document.querySelectorAll(".popup-link").forEach(link => link.onclick = e => {
	e.preventDefault();
	let id = link.getAttribute('href');
	if(id === '#' || !id) return;
	const targetModal = document.getElementById(id.substr(1));
	if(!targetModal) return;
	targetModal.classList.remove('hidden');
	const captionEl = targetModal.querySelector('.caption');
	if(captionEl){
		captionEl.innerText = link.dataset.caption;
	}
	const formName = link.dataset.form;
	const formInput = targetModal.querySelector('input[name="form"]');
	if(formName && formInput){
		formInput.value = formName;
	}
	const excerpt = link.dataset.excerpt;
	const excerptEl = targetModal.querySelector('#excerpt');
	if(excerpt && excerptEl){
		excerptEl.textContent = excerpt;
	}
	const image = link.querySelector('img');
	if(image){
		imageSrc = image.src;
		const targetImg = targetModal.querySelector('#target-img');
		targetImg.src = imageSrc;
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