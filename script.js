const quotes = ["This too shall pass.",
"Every day is a new beginning.",
"Believe in yourself.",
"You are stronger than you think.",
"Embrace the journey, not just the destination.",
"Keep going, even when it's tough.",
"The darkest hour has only sixty minutes.",
"You are capable of amazing things.",
"Stars can't shine without darkness.",
"Inhale courage, exhale fear.",
"You are not alone in this battle.",
"Happiness is a choice.",
"Dream big and dare to fail.",
"Your potential is endless.",
"The best is yet to come."];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");

quoteBtn.addEventListener("click", () => {
  const quote = getRandomQuote();
  quoteText.innerText = quote;
});



const copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});
