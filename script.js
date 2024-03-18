var pastHalf = false;
let i = 0;
const text = "Pedro Vidal";
const speed = 150;

window.onload = function () {
	quoteObj = getQuote();
	document.getElementById("quote").innerHTML = `"${quoteObj.quote}"`;
	document.getElementById("author").innerHTML = `- ${quoteObj.author}`;
};

window.onscroll = function () {
	var y = window.scrollY;
	var downArrow = document.getElementById("down-arrow");
	if (y >= window.innerHeight / 2.5 && !pastHalf) {
		pastHalf = true;
		downArrow.classList.add("animation-rotatedown");
		downArrow.classList.remove("animation-rotateup");
	}
	if (y <= window.innerHeight / 2.5 && pastHalf) {
		pastHalf = false;
		downArrow.classList.add("animation-rotateup");
		downArrow.classList.remove("animation-rotatedown");
	}
};

function typeWriter() {
	if (i < text.length) {
		document.getElementById("name").innerHTML += text.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

typeWriter();

function getQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

var quotes = [
	{
		author: "Silva, Jonas",
		quote: "Tá achando que a vida é um morango?"
	},
	{
		author: "Miyamoto, Musashi",
		quote: "É difícil no começo, mas tudo é difícil no começo."
	},
	{
		author: "Autor Desconhecido",
		quote: "Luna ducit, Sol verberat."
	},
	{
		author: "Miyamoto, Musashi",
		quote: "Não há nada fora de você mesmo que te permita ser melhor, mais forte, mais rico, mais rápido ou mais esperto."
	},
	{
		author: "Miyamoto, Musashi",
		quote: "Pense razoavelmente sobre você mesmo, e profundamente sobre o mundo."
	},
	{
		author: "Marcus Aurelius",
		quote: "Tudo que ouvimos é uma opinião, não um fato. Tudo que vemos é uma perspectiva, não a verdade."
	}
];

let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const slideIndicators = document.querySelectorAll(".slide-indicator");
const numItems = carouselItems.length;
slideIndicators[currentIndex].style.backgroundColor = `#FFFFFF`;

function showItem(index) {
	if (index < 0 || index >= numItems) return;
	slideIndicators[currentIndex].style.backgroundColor = null;
	currentIndex = index;
	slideIndicators[currentIndex].style.backgroundColor = `#FFFFFF`;
	carousel.style.transform = `translateX(-${index * 100}%)`;
	currentIndex = index;
}

function nextSlide() {
	slideIndicators[currentIndex].style.backgroundColor = null;
	currentIndex = (currentIndex + 1) % numItems;
	slideIndicators[currentIndex].style.backgroundColor = `#FFFFFF`;
	showItem(currentIndex);
}

function prevSlide() {
	slideIndicators[currentIndex].style.backgroundColor = null;
	currentIndex = (currentIndex - 1 + numItems) % numItems;
	slideIndicators[currentIndex].style.backgroundColor = `#FFFFFF`;
	showItem(currentIndex);
}
