const imgs = [...document.querySelectorAll('.d-block')];
const resize = ['FLBookletMockUp_Big.png', 'SiemenMockUpInside2_Big.png','MSME Logo_Big.png', 'Yoma Logo_Big.png'];

window.addEventListener('load', checkWidth)
function checkWidth() {
	let width = window.screen.availWidth;

	if (width < 992) {
		imgs.forEach( (img , i)=> {
			img.src = `img/${resize[i]}`
		});
	}
} 