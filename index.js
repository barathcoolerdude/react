const btn = document.querySelector("#new_qoute");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const quotes = [{quotee : "The greatest glory in living lies not in never falling, but in rising every time we fall." , person : "Nelson Mandela"},
    {quotee : "The way to get started is to quit talking and begin doing.", person:"Walt Disney"},
    {quotee : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." , person : "Steve Jobs"}
];

btn.addEventListener('click' , generate)

function generate() {
    console.log("it works");
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    quote.innerText = quotes[random].quotee;
    author.innerText = quotes[random].person;
}