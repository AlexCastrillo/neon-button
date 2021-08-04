//root css handle
let root = document.documentElement
const bgColor = document.querySelector('#bgColor')
//neon text handles
const neonText = document.querySelector('#neonText')
const neonBtn = document.querySelector('#neonBtn')
// used for more neon? section
const fill = document.querySelector('#fill');
const formArea = document.querySelector('.formArea')
const neonFont = document.querySelector('.neonFont')
//radio button handles
const neonColorPink = document.querySelector('#pink')
const neonColorGreen = document.querySelector('#green')
const neonColorYellow = document.querySelector('#yellow')

//code to change the neon button as the user fills in the input field
neonText.addEventListener('keyup', () => {
    neonBtn.innerText = neonText.value
    if (neonText.value == '') {
        neonBtn.innerText = 'neon'
    }

})

//code for the select section to change the background of the whole site
bgColor.addEventListener('change', () => {
    if (bgColor.value == 'lGray') {
        root.style.setProperty('--clr-bg', 'hsl(59, 0%, 30%)')
    } else if (bgColor.value == 'black') {
        root.style.setProperty('--clr-bg', 'hsl(323, 0%, 5%)')
    } else if (bgColor.value == 'gray') {
        root.style.setProperty('--clr-bg', 'hsl(59, 1%, 15%)')
    }
})

//code for the radio buttons
neonColorPink.addEventListener('click', () => {
    root.style.setProperty('--clr-neon', 'hsl(323, 100%, 54%)')
})
neonColorGreen.addEventListener('click', () => {
    root.style.setProperty('--clr-neon', 'hsl(112, 100%, 54%)')
})
neonColorYellow.addEventListener('click', () => {
    root.style.setProperty('--clr-neon', 'hsl(61, 100%, 54%)')
})

//more neon? button - changes the background of the form area
fill.addEventListener('change', () => {
    if (fill.checked == true) {
        formArea.style.setProperty('background-color', 'var(--clr-neon)')
        formArea.style.setProperty('box-shadow', 'inset 0 0 2em 0 var(--clr-neon), 0 0 3em 0 var(--clr-neon)')
        formArea.style.setProperty('border', '15px  solid var(--clr-neon)')
    } else if (fill.checked == false) {
        formArea.style.setProperty('background-color', 'white')
        formArea.style.setProperty('box-shadow', '0 0 25px rgba(129, 129, 129, 0.582)')
        formArea.style.setProperty('border', '15px  solid white')
    }
})

