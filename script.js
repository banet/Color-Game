

// Important! you need the space between numbers in arrays otherwize want working
var colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 255)',
    'rgb(255, 255, 0)',
    'rgb(255, 0, 255)'
]

/* array.forEach(element, index => {
    console.log(element)
})*/
// colors.forEach(pizza => {
//     console.log(pizza)
// });
// 1. First we selecting a squares
// 2. We are looping throung all squares and adding backgound colors
// 3. We are selecting picked color adding it colors[3]
// 4. We are defining and selecting color display and update with a color pickedColor
// 5. Lets add logic for click Events
// 5.1 Grab the color of clicked square and compare color to pickedColor 
// 5.3 If clicked color is picked color, output message Correct
// 5.4 If is not than lets clicked color maked dissapired using the same bg of body
// 5.5 Lets also Output message in html if wass Correct picked color or not!. 
// 6. Let's add feature that when you get the right answer all the squares change color -> to match that answer
// 7. Let s add random colors making a separat function randomChangeColors and add

var colors = generateRandomColors(6); // it could be 3 or 6 colors easy or hard mode

// Selecting a elements colors and sqaure
var squares = document.querySelectorAll('.square') 

// Let's define picked colors, simple just choose one  rgb code with three color-code
var pickedColor = pickRandomColor()
//Selecting span RGB
var colorDisplay = document.querySelector('#colorDisplay')
colorDisplay.textContent = pickedColor

// Selecting the message
var messageDisplay = document.querySelector('#messageDisplay')
// Selecting the header to add win combination background

var headerDisplay = document.querySelector('h1')


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]

    // Adding click events to colors
    squares[i].addEventListener('click', function () {
       /* Test
        console.log('clicked a square') */
        // 1.Grab a color of a clicked square
        var clickedColor = this.style.backgroundColor 
        console.log(clickedColor, pickedColor)
        //2. Compare color to pickedColor
        if(clickedColor === pickedColor) {
            //alert('Coorrect') 
            messageDisplay.textContent = 'Correct!'
            // adding a callback function
            changeColors(clickedColor);
            // Adding headers background to winnings combination
            headerDisplay.style.backgroundColor =  clickedColor
        }else {
            /** alert('wrong') */
            this.style.backgroundColor = '#3a3a3a'
            messageDisplay.textContent ='Try again'
           
        }
        

    })

}

function changeColors(color) {
    // loop through all squares
    for(var i=0; i<squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor() {
    
    // pick random color
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random color to array
    for(var i=0; i<num; i++) {
        // get random color an push into arr
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a 'red' from 0 -255
    var r = Math.floor(Math.random() * 256)
    // pick a 'green' from 0 -255
    var g = Math.floor(Math.random() * 256)
    // pick a 'blue' from 0 -255
    var b = Math.floor(Math.random() * 256)
   // Important! add space between comas to start working as we plant
   return "rgb(" + r + ", " + g + ", " + b + ")"
}