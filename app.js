// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const si = document.getElementById('Si')
const no = document.getElementById('No')
const sonidos = document.getElementById('sonidos')
const modal = document.querySelector('.modal')
const modalCtn = document.querySelector('.modal-ctn')

si.addEventListener('click',function(e){
    sonidos.innerHTML = '<audio src="sound.mp3" autoplay></audio>'
    modal.style.display = "flex"

 
})


no.addEventListener('mousemove',function(){
    let x = Math.round(Math.random()*90)
    let y = Math.round(Math.random()*90)
    no.style.left = x+"%"
    no.style.top = y+"%"
})