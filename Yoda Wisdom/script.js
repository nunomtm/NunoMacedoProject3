// Scope Code

// - My ideia is to have a one page app where the theme is from Star Wars and the user will be able to get some Jedi Wisdom from Master Yoda.

// - Once the page loads they will be prompt to answer two questions: the 1st one would be: "How are you feeling today?" The user would have radion buttons to sleect which one they would like and the otions are, option1 = Rebel / option2 = Dark. The 2nd question would be: "Which lighsaber would you choose?" option1 = Blue / option2 = Red. I would have an image or a gif with the lightsabers beside the radio button. 

// - To randomize the selection of which quote will be displayed I will create two objects arrays, one for Jedi with two key values Red and Blue and inside this values I will have quotes based on if they select Rebel, Red something related to the dark side, if they select Rebel and Blue some good advise from Yoda. I will do the same for the Vader with two key values Red and Blue.

// - Depending on their selection I would have a random quote from Yoda displaying below the two questions and beside Yoda's photo. 

// Strech Goal

// - Increase number of quotes
// - Have the quote shown in a speaking balloon 
// - Animate the header and have Yoda with some sort of animation too 

const rebel = {
    jedi: [
        {
            quote: 'May the Force be with you.',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'Train yourself to let go of everything you fear to lose.',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack.',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'Do or do not. There is no try.',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'Much to learn you still have…my old padawan.” … “This is just the beginning!',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'Clear your mind must be, if you are to find the villains behind this plot.',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'To be Jedi is to face the truth, and choose. Give off light, or darkness, Padawan. Be a candle, or the night.',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'At an end your rule is, and not short enough it was!',
            color: 'blue'
        },
        {
            quote: 'Control, control, you must learn control!',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'Already know you that which you need.',
            type: 'resistance',
            color: 'blue'
        },
        {
            quote: 'Patience you must have my young padawan.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'If you end your training now — if you choose the quick and easy path as Vader did — you will become an agent of evil.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'In a dark place we find ourselves, and a little more knowledge lights our way.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'When you look at the dark side, careful you must be. For the dark side looks back.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'Always two there are, no more, no less. A master and an apprentice.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'Strong is Vader. Mind what you have learned. Save you it can.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'Faith in your new apprentice, misplaced may be. As is your faith in the dark side of the Force.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'To answer power with power, the Jedi way this is not. In this war, a danger there is, of losing who we are.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'The dark side clouds everything. Impossible to see the light, the future is.',
            type: 'resistance',
            color: 'red'
        },
        {
            quote: 'Blind we are, if creation of this clone army we could not see.',
            type: 'resistance',
            color: 'red'
        },
    ],
    vader: [
        {
            quote: 'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'Powerful you have become, the dark side I sense in you.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'You must unlearn what you have learned.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'The fear of loss is a path to the Dark Side.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'If into the security recordings you go, only pain will you find.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'You will find only what you bring in.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'Named must your fear be before banish it you can.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'The boy you trained, gone he is. Consumed by Darth Vader.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'I cannot teach him. The boy has no patience.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain.',
            type: 'dark side',
            color: 'red'
        },
        {
            quote: 'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Once you start down the dark path, forever will it dominate your destiny, consume you it will.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'The dark side clouds everything. Impossible to see the future is.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Not if anything to say about it I have.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Only the Dark Lord of the Sith knows of our weakness. If informed the senate is, multiply our adversaries will.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Hmm. In the end, cowards are those who follow the dark side.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Stopped they must be; on this all depends. Only a fully-trained Jedi Knight, with the Force as his ally, will conquer Vader and his Emperor.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Decide you must, how to serve them best. If you leave now, help them you could; but you would destroy all for which they have fought, and suffered.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Younglings, younglings gather around.',
            type: 'dark side',
            color: 'blue'
        },
        {
            quote: 'Use your feelings, Obi-Wan, and find him you will.',
            type: 'dark side',
            color: 'blue'
        },
    ]
};


// The function will start here
$(function() {

    const playScroll = $(window).scrollTop();
    $('.fa-angle-down, p').click(function () {
        $('html, body').animate({scrollTop: playScroll + 580})
    });

    const wisdomScroll = $(window).scrollTop();
    $('.submit').click(function () {
        $('html, body').animate({scrollTop: wisdomScroll + 970})
        $('audio#yoda')[0].play()
    });

    function randomQuote(optionArray) {
        const item = Math.floor(Math.random() * optionArray.length);
        return optionArray[item];
    }

    $("form").on("submit", function(e) {
        e.preventDefault();
        const joinOption = $('input[name=join]:checked').val();
        const saberOption = $('input[name=saber]:checked').val();

        const selection = rebel[joinOption];
        const option = rebel[joinOption];
        const color = selection.filter((choice) => {
            if(choice.color === saberOption) {
                return true;
            };
        });
    
        const quoteToDisplay = randomQuote(color);

        $('.quote').html(`<p class="quote">${quoteToDisplay.quote}</p>`);

        $('.quote').css('display', 'block');

    });  
});