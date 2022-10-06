let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag)

let player;
let videoId = null;

const data = [
	{'videoId': 'EoLRTusjPvk', 'title': 'Kia bongo 3 4х4 отзывы реальных владельцев'},
	{'videoId': '9nnxxkpNFFw', 'title': '2011 Киа Бонго 3 4x4. Обзор (интерьер, экстерьер, двигатель)'},
	{'videoId': 'MmZ8tf1htYc', 'title': 'Kia Bongo 3, 4wd/Киа Бонго,Корейский грузовик,отзыв от Чемпиона Мира или НОВЫЙ ТЕСТ-ДРАЙВ от СЕРОГО'},
	{'videoId': 'FNPY8RYEZBI', 'title': 'Kia Bongo 3 на заказ из Южной Кореи 4wd'},
	{'videoId': '0JWcAUc-VcM', 'title': 'KIA BONGO 3, АВТООБЗОР дизель 2,9 турбо, 5лет в России'},
	{'videoId': 'SyQsaNIWPP0', 'title': 'Обзор KIA Bongo 3 K4000 Рефрижераторный фургон +5С…-20С, фургон 12м3, 5 европаллет'},
];
let html = '';
data.forEach((item, idx) => {
	const colSpan = idx == 0 || idx == 1 ? 'col-span-2 ' : '';
	html += `
	<div class="${colSpan}modal-video-btn" data-id="${item.videoId}" title="${item.title}">
		<h3 class="uppercase whitespace-nowrap truncate mb-4">${item.title}</h3>
		<div class="pb-[56.25%] border border-black rounded-tl-3xl overflow-hidden cursor-pointer bg-cover bg-center transition-all duration-500 hover:-translate-x-2" style="background-image: url(https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg);"></div>
	</div>
	`;
})
document.getElementById('videoReviews').innerHTML = html;

document.querySelectorAll('.modal-video-btn').forEach(el => {
	el.addEventListener('click', () => {
		videoId = el.dataset.id;
		if(!videoId){
			alert('Invalid Video ID');
			return;
		}
		const modal = document.getElementById('video-modal');
		const videoWrap = modal.querySelector('.video-wrap');
		player = new YT.Player('player', {
			playerVars: {
				'playsinline': 0,
				'rel': 0,
				'showinfo': 0
			},
			videoId: videoId,
			events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
		modal.querySelector('div').classList.add('show')
		modal.classList.remove('hidden')
	})
})

function onPlayerReady(event) {
	event.target.mute()
    event.target.playVideo();
	//console.log(event.target)
}
function onPlayerStateChange(event) {
	// if (event.data == YT.PlayerState.PLAYING) {
	// 	setTimeout(stopVideo, 6000);
	// }
}
// function stopVideo() {
//     player.stopVideo();
// }