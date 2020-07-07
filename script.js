const imgs = [...document.querySelectorAll('.d-block')];
const resize = ['FLBookletMockUp_Big.png', 'SiemenMockUpInside2_Big.png','MSME Logo_Big.png', 'Yoma Logo_Big.png'];
const phoneBtn = document.querySelector('.phone');

// carosel image size change depending on the screen
window.addEventListener('load', checkWidth);
function checkWidth() {
	let width = window.screen.availWidth;
	if (width < 992) {
		imgs.forEach( (img , i)=> {
			img.src = `img/${resize[i]}`
		});
	};
};


// hide call me btn if the user is on windows
// let agent = navigator.userAgent;
// if(agent.includes('Windows')){
// 	console.log("on Windows")
// 	phoneBtn.classList.add('hidden');
// } else {
// 	console.log(agent)
// 	phoneBtn.classList.remove('hidden');
// }


