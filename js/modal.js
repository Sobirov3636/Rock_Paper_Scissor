'use strict'

const btnRules = document.querySelector('.rules__btn')
const modal = document.querySelector('.modal')
const overley = document.querySelector('.overley')
const closeModal = document.querySelector('.modal__box--span')
const body = document.querySelector('body')
const container = document.querySelector('.container')


const openRules = function(){
    modal.classList.remove('hidden')
    overley.classList.remove('hidden')
    
}

const closeRules = function(){
    modal.classList.add('hidden')
    overley.classList.add('hidden')
}

btnRules.addEventListener('click', openRules)

closeModal.addEventListener('click', closeRules)