/*Getting the elements by id's*/
const startButton = document.querySelector('#startButton')
const pauseButton = document.querySelector('#pauseButton')
const resetButton = document.querySelector('#resetButton')
let res = document.querySelector('#res')
/*Creating vars and giving null values*/
let counter = 0
let counterM = 0
let counterH = 0
let unity =''
let state = ''

//Adding some event to button (startButton)
startButton.addEventListener('click',(e)=>{

    //Canceling the  button submit (startButton)
    e.preventDefault()
   
    startButton.value='iniciar'
    //Creating the function counting()
    
const counting = ()=>{

    //Creating the function interval()
const interval = setInterval(()=>{
    /*Incremeting the counter*/
    counter++

    /*Switching decisions about seconds ,minutes and hours*/
    if(counter < 10  && counterM < 10 && counterH < 10 ){
        //00:00:09s
        unity = 's'
        state = `0${counterH}:0${counterM}:0${counter} ${unity}`
    } 
    else if(counter < 10  && counterM < 10 && counterH > 9 ){
        unity = 's'
        state = `${counterH}:0${counterM}:0${counter} ${unity}`
    }
    else if(counter < 10 && counterM > 9 && counterH < 10){
        unity = 's'
        state = `0${counterH}:${counterM}:0${counter} ${unity}`
    }
    else if( counter > 9 && counter === 60 && counterM < 10 && counterH < 10 ){
        unity = 's'
        counter = 0
        counterM++
        state = `0${counterH}:0${counterM}:0${counter} ${unity}`
        }
        else if( counter > 9 && counter === 60 && counterM > 9 && counterH < 10 ){
            unity = 's'
            counter = 0
            counterM++
            state = `0${counterH}:${counterM}:0${counter} ${unity}`
            }
        else if( counter > 9 && counter < 60 && counterM < 10 && counterH < 10 ){
            unity = 's'
            state = `0${counterH}:0${counterM}:${counter} ${unity}`
            }
        else if(counter > 9 && counter < 60 && counterM > 9 && counterH < 10 ){
            unity = 's'
            state = `0${counterH}:${counterM}:${counter} ${unity}`
            }
        else if(counter > 9 && counter === 60 && counterM > 9 && counterH > 9 ){
            unity = 's'
            counter = 0
            state = `${counterH}:${counterM}:0${counter} ${unity}`
        }
        else if(counter > 9 && counter < 60 && counterM > 9 && counterH > 9 ){
            unity = 's'
            state = `${counterH}:${counterM}:${counter} ${unity}`
        }
    else if(counter === 60 && counterM < 10 && counterH < 10  ){
        //00:00:10s
        unity = 's'
        counter = 0
        counterM++
        state = `0${counterH}:0${counterM}:0${counter} ${unity}`
    }
    else if(counter === 60 && counterM > 9 && counterH < 10 ){
        unity = 's'
        counter = 0 
        counterM++
        state = `0${counterH}:${counterM}:0${counter} ${unity}`
    }
    else if(counter === 60 && counterM === 60 && counterH < 10 ){
        unity = 's'
        counter = 0 
        counterM = 0
        counterH++
        state = `0${counterH}:${counterM}:0${counter} ${unity}`
    }
    else if(counter === 60 && counterM === 60 && counterH > 9 ){
        unity = 's'
        counter = 0 
        counterM = 0
        counterH++
        state = `${counterH}:${counterM}:0${counter} ${unity}`
    }/*Finally of  switching */
    
res.innerHTML= state
},1000)//Finally of creation about function interval()

//Creating the function to pause the counting()
pauseButton.addEventListener('click',(e)=>{
    e.preventDefault()
    clearInterval(interval)
    startButton.value='continuar'
    res.innerHTML = state
})//Finally of her

/*Creating the function reset()*/
resetButton.addEventListener('click',(e)=>{
e.preventDefault()
clearInterval(interval)
counter = 0
counterM = 0
counterH = 0
resetButton.value='reiniciar'
startButton.value='iniciar'
res.innerHTML = `0${counterH}:0${counterM}:0${counter} ${unity}`
})

}

//Calling counting() function 
counting()

})//Finally of addition of event to button iniciar(startButtton)

