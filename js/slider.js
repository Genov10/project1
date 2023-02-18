const slider = document.querySelectorAll('.team__slide');
const dotsContainer = document.querySelector('.team__dots');
const dots = [];

let currentSlide = 0;

// Create dots and add event
for (let i = 0; i < slider.length; i++) {
	const dot = document.createElement('span');
	dot.classList.add('team__dot');
	dot.dataset.index = i;
	dot.addEventListener('click', (e) => {
		currentSlide = Number(e.target.dataset.index);
		updateSlider();
	});
	dotsContainer.appendChild(dot);
	dots.push(dot);
}

// Up current dot
dots[currentSlide].classList.add('active');
slider[currentSlide].style.display = 'flex';

function updateSlider() {
	// Up dots
	dots.forEach((dot, i) => {
		if (i === currentSlide) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
	// Up slide
	slider.forEach((slide, i) => {
		if (i === currentSlide) {
			slide.style.display = 'flex';
		} else {
			slide.style.display = 'none';
		}
	});
}


setInterval(() => {
	currentSlide++;
	if (currentSlide >= slider.length) {
	  currentSlide = 0;
	}
	updateSlider();
}, 5000);
