const charData = require('./characteristicsData.js')
function strOutput(arr){
	//console.log(arr)
	let str = '';
	arr.forEach((el, idx) => {
		const padding = arr.length == idx+1 ? 'pr-6' : ''
		const margin = arr.length == idx+1 ? '' : 'mb-3'
		const title = el.name ? `<p class="font-normal underline ${padding}">${el.name}</p>` : ''; 
		str += `
		<div>
		${title}
		<h4 class="${padding} ${margin}">${el.descr}</h4>
		</div>`
	})
	return str;
}
if(charData.length){
	charData.forEach(ch => {
		document.getElementById('characteristics-block')
			.insertAdjacentHTML('beforeend', `
				<div class="rounded-tl-2xl border border-black mt-5 overflow-hidden text-xs sm:text-base">
					<div class="characteristics-toggle-btn">
						<span class="uppercase leading-[1.2] pr-5">${ch.title}</span>
						<button class="w-5 h-5 flex items-center flex-shrink-0">
							<img src="img/characteristics/icons/plus.svg" class="svg plus" />							
							<img src="img/characteristics/icons/minus.svg" class="svg minus" />							
						</button>
					</div>
					<div class="px-2.5 py-2 flex flex-col relative">
						<button class="characteristics-close-btn w-5 h-5 flex items-center rotate-45 absolute right-2 bottom-2">
							<img src="img/characteristics/icons/plus.svg" class="svg plus w-full h-full"/>
						</button>
						${strOutput(ch.data)}
					</div>
				</div>
			`)
	})
}

btns = document.querySelectorAll('.characteristics-toggle-btn');

btns.forEach(btn => {
	const closeBtn = btn.nextSibling.nextElementSibling.querySelector('.characteristics-close-btn')
	closeBtn.addEventListener('click', e => {
		btn.classList.remove('active')
	})
	btn.addEventListener('click', e => {
		if(btn.classList.contains('active')){
			btn.classList.remove('active')	
		}else{
			btn.classList.add('active')		
		}
	})
})

const showMoreBtn = document.querySelector('.characteristics-toggle-whow-more-btn')
showMoreBtn.addEventListener('click', e => {
	const parent = showMoreBtn.parentElement
	if(showMoreBtn.classList.contains('active')){
		showMoreBtn.classList.remove('active')
		parent.nextSibling.nextElementSibling.classList.add('hidden')
	}else{
		showMoreBtn.classList.add('active')
		parent.nextSibling.nextElementSibling.classList.remove('hidden')	
	}
})