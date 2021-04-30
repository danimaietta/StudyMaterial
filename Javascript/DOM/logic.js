/* ********************
    DOM INTERACTION
******************** */

/*
  innerText
*/
function changeText() {
  var p1Text = document.getElementById('p1').innerText // obtain the text of the actual p1

  if (p1Text === 'Primer Mensaje') {
    document.getElementById('p1').innerText = 'Segundo Mensaje' // saves the text of the element p1
  } else {
    document.getElementById('p1').innerText = 'Primer Mensaje' // saves the text of the element p1
  }
}

/*
  innerHTML
*/
function showInnerHTML() {
  var containerHTML = document.getElementsByClassName('container')[1].innerHTML // obtain the inner html of the 2nd container
  document.getElementById('p2').innerText = containerHTML // saves the text of the element p2
  document.getElementsByTagName('button')[1].disabled = true // disable the button to evade a visual error
}

var oldContainer

function inyectHTML() {
  var containerHTML = document.getElementsByClassName('container')[1]
  oldContainer = containerHTML.innerHTML
  containerHTML.innerHTML = `<p> This message comes from JS </p>
                            <button onclick="inyectBack()"> Inyect back </button>`
}

function inyectBack() {
  document.getElementsByClassName('container')[1].innerHTML = oldContainer
}

/*
  value
*/
function showValue() {
  var inputValue = document.getElementsByTagName('input')[0].value // obtain the value of the input
  document.getElementById('p3').innerText = inputValue // saves the text of the element p2
}

/*
  style
*/
var colorTheme = 'white'
var changeStyle = () => {
  if (colorTheme == 'white') {
    colorTheme = 'black'
    changeColor('black')
  } else {
    colorTheme = 'white'
    changeColor('white')
  }
}

function changeColor(color) {
  var styleBody = window.document.body.style
  styleBody.backgroundColor = color // css: background-color, js: backgroundColor
  styleBody.color = color == 'white' ? 'black' : 'white'
  styleBody.border = `2px solid ${color == 'white' ? 'black' : 'white'}` // string concatenator + if else sugar
  var allContainers = document.getElementsByClassName('container')
  for (var i = 0; i < allContainers.length; i++) {
    allContainers[i].style.border = `2px solid ${
      color == 'white' ? 'black' : 'white'
    }`
  }
}

/*
  eventListener
*/
var eventContainer = document.getElementsByClassName('container')[4]
eventContainer.addEventListener(
  'mouseover',
  () => (eventContainer.style.backgroundColor = 'green')
)
eventContainer.addEventListener(
  'mouseout',
  () => (eventContainer.style.backgroundColor = colorTheme)
)
