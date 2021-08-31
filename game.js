let cardsChosen = []

document.addEventListener('DOMContentLoaded', () => {

    // card option
    const cardArray = [{
        name: 'blue',
        img: 'assets/blue.png'
    },
    {
        name: 'blue',
        img: 'assets/blue.png'
    },
    {
        name: 'gray',
        img: 'assets/gray.png'
    },
    {
        name: 'gray',
        img: 'assets/gray.png'
    },
    {
        name: 'green',
        img: 'assets/green.png'
    },
    {
        name: 'green',
        img: 'assets/green.png'
    },
    {
        name: 'purple',
        img: 'assets/purple.png'
    },
    {
        name: 'purple',
        img: 'assets/purple.png'
    },
    {
        name: 'red',
        img: 'assets/red.png'
    },
    {
        name: 'red',
        img: 'assets/red.png'
    },
    {
        name: 'yellow',
        img: 'assets/yellow.png'
    },
    {
        name: 'yellow',
        img: 'assets/yellow.png'
    }
]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', cardArray[i].img)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        setTimeout(startGame, 2000)
    }

    function startGame() {
        var cards = document.querySelectorAll('img')
        for (let i = 0; i < cardArray.length; i++) {
            cards[i].setAttribute('src', 'assets/blank.png')
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/blank.png')
            alert('You have clicked the same image!')
        } 
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'assets/white.png')
            cards[optionTwoId].setAttribute('src', 'assets/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            
        }else {
            cards[optionOneId].setAttribute('src', 'assets/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    // check for reclick
    var oldId = null;
    const checkForReclick = (cardId) => {
        if (oldId === cardId) return false
        else {
            oldId = cardId;
            return true;
        }
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        if (checkForReclick(cardId)) {
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
    }

    createBoard();

})