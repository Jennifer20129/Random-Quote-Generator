const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },

    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        text: "With God all things are possible.",
        author: "Matthew 19:26"
    },

    {
        text: "Commit your work to the Lord, and your plans will be established.",
        author: "Proverbs 16:3"
    },

    {
        text: "Do not despise small beginnings.",
        author: "Zechariah 4:10"
    },

    {
        text: "She believed she could, so she did.",
        author: "R. S. Grey"
    },

    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },

    {
        text: "Be strong and courageous. Do not be afraid.",
        author: "Joshua 1:9"
    },

    {
        text: "Your only limit is your mind.",
        author: "Unknown"
    }
];


const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");


function generateQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote.text;

    authorElement.textContent = `— ${randomQuote.author}`;

    message.textContent = "";
}


newQuoteBtn.addEventListener("click", generateQuote);


copyBtn.addEventListener("click", async function () {

    const quoteText = `"${quoteElement.textContent}" — ${authorElement.textContent.replace("— ", "")}`;

    await navigator.clipboard.writeText(quoteText);

    message.textContent = "Quote copied! ✨";

});