const items = document.querySelectorAll('.accordion-item h3');
items.forEach(item => {
	item.addEventListener('click', e => {
		if(!item.nextSibling.nextElementSibling.classList.contains('opacity-0')){
			return
		}
		items.forEach(el => {
			el.classList.remove('bg-black', 'text-white', 'pl-4', '!translate-x-0')
			el.nextSibling.nextElementSibling.classList.add('opacity-0', 'h-0', '-traslate-y-3', 'invisible')
		})
		item.classList.add('bg-black', 'text-white', 'pl-4', '!translate-x-0')
		item.nextSibling.nextElementSibling.classList.remove('opacity-0', 'h-0', '-traslate-y-3', 'invisible')
	})
})