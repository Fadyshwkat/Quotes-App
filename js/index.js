var quoteBtn = document.getElementById("quoteBtn");
var quoteContainer = document.getElementById("quoteContainer");



var quotesList=[
     quotes ={
        quote:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde"
    },
     quotes ={
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"― Marilyn Monroe"
    }
    ,
    quotes ={
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },
    quotes ={
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein"
    },
    quotes ={
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },
    quotes ={
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
    quotes ={
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    }
]


let previousRandom = null;

function getRandomQuote() {
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * quotesList.length);
    } while (newIndex === previousRandom);

    previousRandom = newIndex;

    var cartona = `
        <p class="my-4">${quotesList[newIndex].quote}</p>
        <p>${quotesList[newIndex].author}</p>
    `;

    quoteContainer.innerHTML = cartona;
    quoteBtn.innerText = "New Quote";
}


quoteBtn.addEventListener("click",getRandomQuote)
