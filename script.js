const play = document.getElementById('play')
const cards = document.querySelectorAll('.card')

const time = new Date()

let day = time.getDate()
let month = time.getMonth()
let year = time.getFullYear()

let len

if (month==7){
    len = day - 24 
} else if (month==8){
    day+=31
    len = day - 24 
} else if (month>7 || year>=2022){
    len = 13
} 

if (len>13){
    len=13
}

play.addEventListener('click', ()=>{
    if(!play.hasAttribute('active')){
        play.setAttribute('active','true')
        for (let i=1; i<=len; i++){
            const card = cards[i-1]
            card.style.opacity = 1
            card.style.zIndex = 1
            card.style.transform = 'rotate(0)'
            card.children[0].style.opacity = 1
            card.children[0].style.transform = 'rotate(0)'
            if (i<=7){
                card.style.top = `30px`
                card.style.left = `${203*(i-1)+20}px`
            } else{
                card.style.top = `450px`
                card.style.left = `${203*(i-8)+125}px`
            }
        }
    } else{
        play.removeAttribute('active')
        for (let i=1; i<=len; i++){
            const card = cards[i-1]
            card.style.opacity = `${1-0.05*(i-1)}`
            card.style.transform = 'translateX(-50%) translateY(calc(3px  * var(--i))) rotate(40deg) skew(-20deg,-10deg) scale(0.15)'
            card.children[0].style.opacity = 0
            card.children[0].style.transform = 'translateY(50px)'
            card.style.top = `calc(50% - 135px)`
            card.style.left = `50%`
        }
    }
})


