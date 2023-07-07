// Bringing any element we need
const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')


btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
    // total boxes are 16
    for(let i = 0; i<4; i++){
        for(let j=0; j<4; j++){
            const box = document.createElement('div')
            box.classList.add('box')
            //Do the positioning
            // Make it dynamic
            
            // box.style.backgroundPosition = `-125px 0` 
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`

            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()