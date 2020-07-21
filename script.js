function log(message){
    console.log('> '+message)
}

/** app */


const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)

})



function dragstart(){
    //inicia
   //log('card: start dragging')
   dropzones.forEach(dropzone => dropzone.classList.add('hightlight'))
   this.classList.add('is-dragging')

}

function drag(){
    //arrastando
    //log('card: Is dragging')
}
function dragend(){
    //parar de arrastar
    //log('card: Stop dragging')
    dropzones.forEach(dropzone => dropzone.classList.remove('hightlight'))
    this.classList.remove('is-dragging')
}

//local onde vou soltar os cartões
//place where  we will drop cards

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    log('Dropzone: Enter is zone')
}

function dragover(){
    //log('Dropzone: over')
    this.classList.add('over')

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragleave(){
    //log('Dropzone: leave')
    this.classList.remove('over')
}

function drop(){
   // log('Dropzone: drop')
   this.classList.remove('over')
}


