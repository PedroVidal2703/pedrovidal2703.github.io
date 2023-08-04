var selectedSlide;
var pastHalf = false;

window.onload = function () {
	selectedSlide = "slide-1";
	document.getElementById(selectedSlide).classList.add("selected-slide");
	document.getElementById("projects-img").src = `${slides[selectedSlide].image}`;
	document.getElementById("projects-text").innerHTML = `${slides[selectedSlide].text}`;
	document.getElementById("projects-img").classList.add("animation-fadeinup");
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
		console.log("Past Half");
	}
	if (y <= window.innerHeight / 2.5 && pastHalf) {
		pastHalf = false;
		downArrow.classList.add("animation-rotateup");
		downArrow.classList.remove("animation-rotatedown");
		console.log("Before Half");
	}
};

function getQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

function changeSlide(id) {
	document.getElementById(selectedSlide).classList.add("animation-color");
	document.getElementById(selectedSlide).classList.remove("selected-slide");
	document.getElementById(id).classList.add("selected-slide");
	document.getElementById(id).classList.remove("animation-color");
	selectedSlide = id;

	document.getElementById("projects-img").classList.add("animation-fadeoutdown");
	document.getElementById("projects-img").addEventListener("animationend", function () {
		document.getElementById("projects-img").src = `${slides[selectedSlide].image}`;
		document.getElementById("projects-img").classList.remove("animation-fadeoutdown");
		document.getElementById("projects-img").classList.add("animation-fadeinup");
	});
	document.getElementById("projects-text").innerHTML = `${slides[selectedSlide].text}`;
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

var slides = {
	"slide-1": {
		image: "assets/caraguatatuba.JPG",
		text: "Esse é um teste do slide, bla bla bla teste bla bla bla teste bla bla bla teste bla bla bla teste bla bla bla teste bla bla bla teste bla bla bla teste bla bla bla teste bla bla bla teste"
	},
	"slide-2": {
		image: "assets/placeholder2.jpeg",
		text: "Esse já é o segundo slide, tá funcionando até bem né?"
	},
	"slide-3": {
		image: "",
		text: "Esse vai ser o terceiro slide."
	},
	"slide-4": {
		image: "",
		text: "Quarto slide, testando, deu certo?"
	}
};
