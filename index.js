
const numberBtns = document.querySelectorAll('.number')
const allClear = document.querySelector('.ac')
const deleteSelection = document.querySelector('.delete')
const operator = document.querySelectorAll('.operator')
const textBox =document.querySelector('.boxx')
const equals = document.querySelector('.equals')
let numberSelection = [];
let finalNumberSelection = []
let operatorVal = '+'


// querySelectorAll creates node list
// looping through node list
for (let i = 0; i < numberBtns.length; i++) {

    numberBtns[i].addEventListener('click', () => {
        numberSelection.push(parseInt(numberBtns[i].innerText))
        // join command removes comma
        textBox.innerText = numberSelection.join("")
    })
}

for (let i = 0; i < operator.length; i++) {

    operator[i].addEventListener('click', () => {

        // concatenates numbers of array - makes into one long int; can perform math operations now
        finalNumberSelection = Number(numberSelection.join(""))
        // resets numberSelection array
        numberSelection = []
        textBox.innerText = operator[i].innerText
        operatorVal = operator[i].innerText
    })
}

const applyingOperators = () => {
     
    if (operatorVal == "+") {
        textBox.innerText = numberSelection + finalNumberSelection
    } else if (operatorVal == '—') {
        textBox.innerText = finalNumberSelection - numberSelection
    }else if (operatorVal == "÷") {
        textBox.innerText = finalNumberSelection / numberSelection
    } else if (operatorVal == "x") {
        textBox.innerText = numberSelection * finalNumberSelection
    } else {
        return null
    }
}

equals.addEventListener('click', () => {
    numberSelection = Number(numberSelection.join(""))
    console.log('works')
    applyingOperators()
})

deleteSelection.addEventListener('click', () => {
    numberSelection.pop()
    textBox.innerText = numberSelection.join("")
})

allClear.addEventListener('click', () =>{
    numberSelection = []
    textBox.innerText = '0'
})


