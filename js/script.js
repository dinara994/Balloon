const balloon = document.querySelector('.balloon')
const box = document.querySelector('.box')
const box1 = document.querySelectorAll('.box-1')
const balllonImg = document.querySelectorAll('.balloon-img')
const bx = document.querySelector('.bx')

let idx = 0

balloon.addEventListener('click', (ev) => { //кликнув
    if (ev.target.classList[0] === 'balloon-img') {
        box1[idx].src = ev.target.src
        idx++
    }
})
bx.addEventListener('click', () => {
    box1.forEach(el => el.src = "./img/standard_white.gif")
    idx = 0

})
































