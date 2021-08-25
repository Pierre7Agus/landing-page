const dots = document.querySelectorAll('.circle > ul li');
const elementos = document.querySelectorAll('.features > div');
//console.log(dots);
dots[1].addEventListener('click',()=>{
	dots[1].classList.toggle('active');
	elementos[1].classList.toggle('opacity');

	dots[0].classList.remove('active');
	elementos[0].classList.remove('opacity');
	dots[2].classList.remove('active');
	elementos[2].classList.remove('opacity');

});
dots[0].addEventListener('click',()=>{
	dots[0].classList.toggle('active');
	elementos[0].classList.toggle('opacity');
	
	dots[1].classList.remove('active');
	elementos[1].classList.remove('opacity');
	dots[2].classList.remove('active');
	elementos[2].classList.remove('opacity');
});
dots[2].addEventListener('click',()=>{
	dots[0].classList.remove('active');
	dots[1].classList.remove('active');
	elementos[1].classList.remove('opacity');
	elementos[0].classList.remove('opacity');

	elementos[2].classList.toggle('opacity');	
	dots[2].classList.toggle('active');
});
const menu = document.querySelector('.hidden');
document.querySelector('.hamburguer').addEventListener('click',()=>{
	menu.classList.toggle('izquierda');
})