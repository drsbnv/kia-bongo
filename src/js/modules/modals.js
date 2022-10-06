document.querySelectorAll('.modal-overlay').forEach(el => {
	document.addEventListener('keydown', event => {
		if(event.key == 'Escape'){
			closeModal(el)
		}
	});

	el.addEventListener('click', event => {
		console.log(event.target.dataset.close)
		if(typeof event.target.dataset.close != 'undefined'){
			closeModal(el)
		}
	})
})

function closeModal(modal){
	if (modal.dataset.type == 'video') {
		modal.querySelector('iframe').remove()
		modal.querySelector('.video-wrap').innerHTML = '<div id="player">';
	}
	modal.classList.add('hidden')	
}