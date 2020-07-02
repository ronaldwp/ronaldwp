const imgs = [...document.querySelectorAll('.d-block')];
const resize = 'img/sizetest.png';

window.addEventListener('load', checkWidth)
function checkWidth() {
	let width = window.screen.availWidth;

	if (width < 992) {
		imgs.forEach( img=> {
			img.src = resize;
		});
	}
}