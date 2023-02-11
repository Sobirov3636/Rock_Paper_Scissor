const contentDiv = document.querySelector('.content')
const controlBtns = document.querySelectorAll('.content__btn')
const content1 = document.querySelector('.content--1')
const content2 = document.querySelector('.content--2')
const choiceBox1 = document.querySelector('.choice-box--paper')
const choiceBox2 = document.querySelector('.choice-box--rock')
const playMessage = document.querySelector('.play-message')
const result = document.querySelector('.result')
const PlayAgain = document.querySelector('.btn')
const scoresNum = document.querySelector('.header__scores-num')


let counter = 3
let scores = 3
const types = ['paper', 'rock', 'scissors']
const checkStatus = function(selectedOption, randomOption){
    PlayAgain.classList.remove('hidden')

    if(selectedOption === 'rock'){
        if(randomOption === 'rock'){
            result.textContent = "drow"
            return 'drow'
        }
        if(randomOption === 'paper'){
            result.textContent = "lose"

            return 'lose'
        }
        if(randomOption === 'scissors'){
            result.textContent = "win"

            return 'win'
        }
    }

    if(selectedOption === 'paper'){

        if(randomOption === 'paper'){
            result.textContent = "drow"
            return 'drow'

        }
        if(randomOption === 'scissors'){
            result.textContent = "lose"
            return 'lose'

        }
        if(randomOption === 'rock'){
            result.textContent = "win"
            return 'win'
        }
    }

    if(selectedOption === 'scissors'){
        if(randomOption === 'scissors'){
        result.textContent = "drow"
            return 'drow'

        }
        if(randomOption === 'rock'){
            result.textContent = "lose"
            return 'lose'

        }
        if(randomOption === 'paper'){
            result.textContent = "win"
            return 'win'

        }
    }

}

const play = function(){
    choiceBox1.innerHTML = ''
    choiceBox2.innerHTML = ''
    choiceBox1.classList.add('hidden')
    choiceBox2.classList.add('hidden')
    playMessage.classList.add('hidden')
    content2.classList.add('hidden')
    content1.classList.remove('hidden')
}
const gameOver = function(){
    if (scores === 0){
        play()
        scores = 3
        scoresNum.textContent = scores
    }
}

content1.addEventListener('click', function(e){
    const target = e.target.closest('.play-box')
    if(!target) return 
    const selectedOption = target.dataset.option
    const randomOption = types[Math.trunc(Math.random() * 3)]
    
    
    content1.classList.add('hidden')
    content2.classList.remove('hidden')
    choiceBox2.classList.remove('hidden')
    // countdown.classList.remove('hidden')


    // User picking button
    userPicked=`
    <p class="choice-box__title">
          You Picked
        </p>

        <div class="play-box play-box--${selectedOption} play-box--lg" data-option="${selectedOption}">
          <img src="./images/icon-${selectedOption}.svg" alt="">
        </div>
    `
    
    choiceBox1.insertAdjacentHTML('afterbegin',userPicked)
    choiceBox1.classList.remove('hidden')
    const count = `
        <div class="countdown"> 3 </div>`
    choiceBox2.insertAdjacentHTML('afterbegin',count)
    const countdown = choiceBox2.querySelector('.countdown')

    // Starting countdown 
    const timeInterval = setInterval(() => {
        counter--
        if(counter === 0){
            counter = 3
            clearInterval(timeInterval)
        }
        // countdown.textContent = counter
        countdown.textContent = counter
    }, 1000);

    const timeOut = setTimeout(() => {
        const randomHtml = `
        <p class="choice-box__title">
          The House Picked
        </p>

        <div class="play-box play-box--${randomOption} play-box--lg" data-option="${selectedOption}">
          <img src="./images/icon-${randomOption}.svg" alt="">
        </div>
        `
        countdown.classList.add('hidden')

        playMessage.classList.remove('hidden')

        choiceBox2.insertAdjacentHTML("afterbegin", randomHtml)

        const status = checkStatus(selectedOption, randomOption)

        if(status === 'win'){
            scores++
            scoresNum.textContent = scores
        }
        if(status === 'lose'){
            scores--
            scoresNum.textContent = scores
        }
        if(status === 'drow'){
            return
        }

    gameOver()

        

    }, 3000);
})



PlayAgain.addEventListener('click', function(){
    play()
})

