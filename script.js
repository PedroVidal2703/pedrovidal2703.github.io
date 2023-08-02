window.onload = function () {
	quoteObj = getQuote();
	document.getElementById("quote").innerHTML = `"${quoteObj.quote}"`;
	document.getElementById("author").innerHTML = `- ${quoteObj.author}`;
};

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
