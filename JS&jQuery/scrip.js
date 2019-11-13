// Scope Code

// - My ideia is to have a one page app where the theme is from Star Wars and the user will be able to get some Jedi Wisdom from Master Yoda.

// - Once the page loads they will be prompt to answer two questions: the 1st one would be: "How are you feeling today?" The user would have radion buttons to sleect which one they would like and the otions are, option1 = Rebel / option2 = Dark. The 2nd question would be: "Which lighsaber would you choose?" option1 = Blue / option2 = Red. I would have an image or a gif with the lightsabers beside the radio button. 

// - To randomize the selection of which quote will be displayed I will create two objects arrays, one for Rebel with two key values Red and Blue and inside this values I will have quotes based on if they select Rebel, Red something related to the dark side, if they select Rebel and Blue some good advise from Yoda. I will do the same for the Dark with two key values Red and Blue.

// - Depending on their selection I would have a random quote from Yoda displaying below the two questions and beside Yoda's photo. 

// Strech Goal

// - Increase number of quotes
// - Have the quote shown in a speaking balloon 
// - Animate the header and have Yoda with some sort of animation too 


const rebel = {
    blue: [
        {
            quote: 'May the Force be with you.'
        },
        {
            quote: 'Train yourself to let go of everything you fear to lose.'
        },
        {
            quote: 'You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack.'
        },
        {
            quote: 'Do or do not. There is no try.'
        },
        {
            quote: 'Much to learn you still have…my old padawan.” … “This is just the beginning!'
        },
    ],
    red: [
        {
            quote: 'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.'
        },
        {
            quote: 'Powerful you have become, the dark side I sense in you.'
        },
        {
            quote: 'You must unlearn what you have learned.'
        },
        {
            quote: 'The fear of loss is a path to the Dark Side.'
        },
        {
            quote: 'If into the security recordings you go, only pain will you find.'
        },
    ]
};

const dark = {
    blue: [
        {
            quote: 'PATIENCE YOU MUST HAVE my young padawan.'
        },
        {
            quote: 'If you end your training now — if you choose the quick and easy path as Vader did — you will become an agent of evil.'
        },
        {
            quote: 'In a dark place we find ourselves, and a little more knowledge lights our way.'
        },
        {
            quote: 'When you look at the dark side, careful you must be. For the dark side looks back.'
        },
        {
            quote: 'Always two there are, no more, no less. A master and an apprentice.'
        },
    ],
    red: [
        {
            quote: 'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.'
        },
        {
            quote: 'Once you start down the dark path, forever will it dominate your destiny, consume you it will.'
        },
        {
            quote: 'The dark side clouds everything. Impossible to see the future is.'
        },
        {
            quote: 'Not if anything to say about it I have.'
        },
        {
            quote: 'Only the Dark Lord of the Sith knows of our weakness. If informed the senate is, multiply our adversaries will.'
        },
    ]
};

// The function will start here
$(function() {

    $("form").on("submit", function (e) {
        e.preventDefault();
        
        
        
        





















        const drinkType = $("input[name=beverage]:checked");
        const priceRange = $("input[name=price]:checked");
        const selectedDrink = $(drinkType).attr("value");
        const selectPrice = priceRange.attr("value");
        drinks[selectedDrink].forEach((e) => {
            if (e.price === selectPrice) {
                $(".results").append(`<p class="choice">${e.title}</p>`);
            }
        })
    })
    
});

or 

$(function () {

    function randomItem(optionsArray) {
        const index = Math.floor(Math.random() * optionsArray.length);
        return optionsArray[index];
    }

    $('form').on('submit', function (e) {
        e.preventDefault();
        const type = $('input[name=beverage]:checked').val();
        const price = $('input[name=price]:checked').val();

        const choice = drinks[type];
        const options = [];

        for (let i = 0; i < choice.length; i++) {
            const store = choice[i];

            if (store.price === price) {
                options.push(store);
            }
        }

        const optionToDispaly = randomItem(options);

        $('.results').html(`<h2 class="choice">${optionToDispaly.title}</h2>`);
    });
});

