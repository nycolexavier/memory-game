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

    const grid = document.querySelector('grid')

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }




})