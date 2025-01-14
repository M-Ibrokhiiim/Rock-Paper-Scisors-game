// Find computer turn
// Contrast computer turn and my turn
// Display what I chose and computer chose

const scores={wins:0,losses:0,ties:0}
 

let randomNumber=Math.random()
 


// Rock eventListener
let rockInvoking=document.getElementById('rock')
  


rockInvoking.addEventListener('click',()=>{
    let randomNumber=Math.random()
    let invokingComputerTurn=document.getElementById('computerTurn')
    let sumResultOFContrast=document.getElementById('resultOfTurn')
    let invokingYourTurn=document.getElementById('yourTurn')
    invokingYourTurn.textContent='You :👊'
    if(randomNumber>0 && randomNumber<1/3){
        invokingComputerTurn.textContent='👊 :Computer'        
    }else if(randomNumber>1/3 && randomNumber<2/3){
        invokingComputerTurn.textContent='🤚 :Computer'
    }else if(randomNumber>2/3 && randomNumber<1){
        invokingComputerTurn.textContent='✌️ :Computer'
    }
     
    

    if(invokingComputerTurn.textContent==='👊 :Computer'){
        sumResultOFContrast.textContent='Same turn,try again 🙂‍!'
        scores.wins++
    }else if(invokingComputerTurn.textContent==='🤚 :Computer'){
        sumResultOFContrast.textContent='You lose ☹️'
        scores.losses++
    }else if(invokingComputerTurn.textContent==='✌️ :Computer'){
        sumResultOFContrast.textContent='You win 🤩!!!'
        scores.ties++
    }
    


    const appeaToWinsFromDom=document.getElementById('Wins')
    const appealingToLossingFromDom=document.getElementById('Losses')
    const appealingToTiesFromDom=document.getElementById('Ties')


    appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
    appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
    appealingToTiesFromDom.textContent=`Ties:${scores.ties}`
    
         
})

// Paper eventlistener

const paperInvoking=document.getElementById('paper')


paperInvoking.addEventListener('click',()=>{
    let randomNumber=Math.random()
    let invokingComputerTurn=document.getElementById('computerTurn')
    let sumResultOFContrast=document.getElementById('resultOfTurn')
    let invokingYourTurn=document.getElementById('yourTurn')
    invokingYourTurn.textContent='You:🤚'

    if(randomNumber>0 && randomNumber<1/3){
        invokingComputerTurn.textContent='👊 :Computer'        
    }else if(randomNumber>1/3 && randomNumber<2/3){
        invokingComputerTurn.textContent='🤚 :Computer'
    }else if(randomNumber>2/3 && randomNumber<1){
        invokingComputerTurn.textContent='✌️ :Computer'
    }
     
    

    if(invokingComputerTurn.textContent==='👊 :Computer'){
        sumResultOFContrast.textContent='You win 🤩!!!'
        scores.wins++
    }else if(invokingComputerTurn.textContent==='🤚 :Computer'){
        sumResultOFContrast.textContent='Same turn,try again 🙂‍!'
        scores.ties++
    }else if(invokingComputerTurn.textContent==='✌️ :Computer'){
        sumResultOFContrast.textContent='You lose ☹️'
        scores.losses++
    }
    


    const appeaToWinsFromDom=document.getElementById('Wins')
    const appealingToLossingFromDom=document.getElementById('Losses')
    const appealingToTiesFromDom=document.getElementById('Ties')


    appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
    appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
    appealingToTiesFromDom.textContent=`Ties:${scores.ties}`
    
         
})


// Scisors eventlistener

const scisorsInvoking=document.getElementById('scisors')

scisorsInvoking.addEventListener('click',()=>{
    let randomNumber=Math.random()
    let invokingComputerTurn=document.getElementById('computerTurn')
    let sumResultOFContrast=document.getElementById('resultOfTurn')
    let invokingYourTurn=document.getElementById('yourTurn')
    invokingYourTurn.textContent='You: ✌️'

    if(randomNumber>0 && randomNumber<1/3){
        invokingComputerTurn.textContent='👊 :Computer'        
    }else if(randomNumber>1/3 && randomNumber<2/3){
        invokingComputerTurn.textContent='🤚 :Computer'
    }else if(randomNumber>2/3 && randomNumber<1){
        invokingComputerTurn.textContent='✌️ :Computer'
    }
     
    

    if(invokingComputerTurn.textContent==='👊 :Computer'){
        sumResultOFContrast.textContent='You lose ☹️'
        scores.losses++
    }else if(invokingComputerTurn.textContent==='🤚 :Computer'){
        sumResultOFContrast.textContent='You win 🤩!!!'
        scores.wins++
    }else if(invokingComputerTurn.textContent==='✌️ :Computer'){
        sumResultOFContrast.textContent='Same turn,try again 🙂‍!'
        scores.ties++
    }
    


    const appeaToWinsFromDom=document.getElementById('Wins')
    const appealingToLossingFromDom=document.getElementById('Losses')
    const appealingToTiesFromDom=document.getElementById('Ties')


    appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
    appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
    appealingToTiesFromDom.textContent=`Ties:${scores.ties}`
    
         
})


const invokingResetBtn=document.getElementById('resetBtn')

invokingResetBtn.addEventListener('click',()=>{
 
    const appeaToWinsFromDom=document.getElementById('Wins')
    const appealingToLossingFromDom=document.getElementById('Losses')
    const appealingToTiesFromDom=document.getElementById('Ties')
     

    scores.wins=0   
    scores.losses=0
    scores.ties=0

    appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
    appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
    appealingToTiesFromDom.textContent=`Ties:${scores.ties}`

    let invokingYourTurn=document.getElementById('yourTurn')
    invokingYourTurn.textContent='You:⭕️'    
    let invokingComputerTurn=document.getElementById('computerTurn')
    invokingComputerTurn.textContent='⭕️:Computer'

    let sumResultOFContrast=document.getElementById('resultOfTurn')
    sumResultOFContrast.textContent='Press your turn!'


    
})


//Auto Play eventlistener

const invokingAutoPlayButton=document.getElementById('autoPlayBtn')

invokingAutoPlayButton.addEventListener('click',()=>{
    // Random numbers
    let randomNumbers=Math.random()

    // Computer turn 
      
     let invokingComputerTurn=document.getElementById('computerTurn')
      
    

    if(randomNumbers>0 && randomNumbers<1/3){
        invokingComputerTurn.textContent='👊:Computer'
    }else if(randomNumbers>1/3 && randomNumbers<2/3){
        invokingComputerTurn.textContent='🤚:Computer'
    }else if(randomNumbers>2/3 && randomNumbers<1){
        invokingComputerTurn.textContent='✌️:Computer'
    }
    
     
    
    // My Turn
    let invokingMyTurn=document.getElementById('yourTurn')
   
      
     

    if(randomNumbers>0 && randomNumbers<1/3){
        invokingMyTurn.textContent='You:✌️'
    }else if(randomNumbers>1/3 && randomNumbers<2/3){
        invokingMyTurn.textContent='You:🤚'
    }else if(randomNumbers>2/3 && randomNumbers<1){
        invokingMyTurn.textContent='You:👊'
    }
    
    
    // Result of contrasted both turns
    let sumResultOFContrast=document.getElementById('resultOfTurn')
     
    
    

    if(( invokingMyTurn.textContent==='You:✌️' &&   invokingComputerTurn.textContent==='👊:Computer') ){
        sumResultOFContrast.textContent='You lose ☹️'
        scores.losses++
    }else if(( invokingMyTurn.textContent==='You:✌️' &&  invokingComputerTurn.textContent==='🤚:Computer')){
        sumResultOFContrast.textContent='You win 🤩!!!'
        scores.wins++
    }else if((invokingMyTurn.textContent==='You:✌️' &&  invokingComputerTurn.textContent==='✌️:Computer' )){
        sumResultOFContrast.textContent='Same turns,try again 🙂‍!'
        scores.ties++
    }else if(( invokingMyTurn.textContent==='You:🤚' && invokingComputerTurn.textContent==='👊:Computer') ){
        sumResultOFContrast.textContent='You win 🤩!!!'
        scores.wins++
    }else if((  invokingMyTurn.textContent==='You:🤚'  &&  invokingComputerTurn.textContent==='🤚:Computer')){
        sumResultOFContrast.textContent='Same turns,try again 🙂‍!'
        scores.ties++
    }else if((invokingMyTurn.textContent==='You:🤚' && invokingComputerTurn.textContent==='✌️:Computer' )){
        sumResultOFContrast.textContent='You lose ☹️'
        scores.losses++
    }else if(invokingMyTurn.textContent==='You:👊' && invokingComputerTurn.textContent==='✌️:Computer' ){
        sumResultOFContrast.textContent='You win 🤩!!!'
        scores.wins++
    }else if(invokingMyTurn.textContent==='You:👊'&&   invokingComputerTurn.textContent==='🤚:Computer'){
        sumResultOFContrast.textContent='You lose ☹️'
        scores.losses++
    }else if(invokingMyTurn.textContent==='You:👊'&& invokingComputerTurn.textContent==='👊:Computer'){
        sumResultOFContrast.textContent='Same turns,try again 🙂‍!'
        scores.ties++
    }



    // Palceing scores
       
    const appeaToWinsFromDom=document.getElementById('Wins')
    const appealingToLossingFromDom=document.getElementById('Losses')
    const appealingToTiesFromDom=document.getElementById('Ties')

    appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
    appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
    appealingToTiesFromDom.textContent=`Ties:${scores.ties}`
})



// Gaming through keywords

// S
document.body.addEventListener('keydown',(event)=>{
    if (event.key==='s'){
        let randomNumber=Math.random()
        let invokingComputerTurn=document.getElementById('computerTurn')
        let sumResultOFContrast=document.getElementById('resultOfTurn')
        let invokingYourTurn=document.getElementById('yourTurn')
        invokingYourTurn.textContent='You: ✌️'
    
        if(randomNumber>0 && randomNumber<1/3){
            invokingComputerTurn.textContent='👊 :Computer'        
        }else if(randomNumber>1/3 && randomNumber<2/3){
            invokingComputerTurn.textContent='🤚 :Computer'
        }else if(randomNumber>2/3 && randomNumber<1){
            invokingComputerTurn.textContent='✌️ :Computer'
        }
         
        
    
        if(invokingComputerTurn.textContent==='👊 :Computer'){
            sumResultOFContrast.textContent='You lose ☹️'
            scores.losses++
        }else if(invokingComputerTurn.textContent==='🤚 :Computer'){
            sumResultOFContrast.textContent='You win 🤩!!!'
            scores.wins++
        }else if(invokingComputerTurn.textContent==='✌️ :Computer'){
            sumResultOFContrast.textContent='Same turn,try again 🙂‍!'
            scores.ties++
        }
        
    
    
        const appeaToWinsFromDom=document.getElementById('Wins')
        const appealingToLossingFromDom=document.getElementById('Losses')
        const appealingToTiesFromDom=document.getElementById('Ties')
    
    
        appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
        appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
        appealingToTiesFromDom.textContent=`Ties:${scores.ties}`
            
        
    }
})

// P
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='p'){

        let randomNumber=Math.random()
        let invokingComputerTurn=document.getElementById('computerTurn')
        let sumResultOFContrast=document.getElementById('resultOfTurn')
        let invokingYourTurn=document.getElementById('yourTurn')
        invokingYourTurn.textContent='You:🤚'
    
        if(randomNumber>0 && randomNumber<1/3){
            invokingComputerTurn.textContent='👊 :Computer'        
        }else if(randomNumber>1/3 && randomNumber<2/3){
            invokingComputerTurn.textContent='🤚 :Computer'
        }else if(randomNumber>2/3 && randomNumber<1){
            invokingComputerTurn.textContent='✌️ :Computer'
        }
         
        
    
        if(invokingComputerTurn.textContent==='👊 :Computer'){
            sumResultOFContrast.textContent='You win 🤩!!!'
            scores.wins++
        }else if(invokingComputerTurn.textContent==='🤚 :Computer'){
            sumResultOFContrast.textContent='Same turn,try again 🙂‍!'
            scores.ties++
        }else if(invokingComputerTurn.textContent==='✌️ :Computer'){
            sumResultOFContrast.textContent='You lose ☹️'
            scores.losses++
        }
        
    
    
        const appeaToWinsFromDom=document.getElementById('Wins')
        const appealingToLossingFromDom=document.getElementById('Losses')
        const appealingToTiesFromDom=document.getElementById('Ties')
    
    
        appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
        appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
        appealingToTiesFromDom.textContent=`Ties:${scores.ties}`
        

    }
})

// R
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        let randomNumber=Math.random()
        let invokingComputerTurn=document.getElementById('computerTurn')
        let sumResultOFContrast=document.getElementById('resultOfTurn')
        let invokingYourTurn=document.getElementById('yourTurn')
        invokingYourTurn.textContent='You :👊'
        if(randomNumber>0 && randomNumber<1/3){
            invokingComputerTurn.textContent='👊 :Computer'        
        }else if(randomNumber>1/3 && randomNumber<2/3){
            invokingComputerTurn.textContent='🤚 :Computer'
        }else if(randomNumber>2/3 && randomNumber<1){
            invokingComputerTurn.textContent='✌️ :Computer'
        }
         
        
    
        if(invokingComputerTurn.textContent==='👊 :Computer'){
            sumResultOFContrast.textContent='Same turn,try again 🙂‍!'
            scores.wins++
        }else if(invokingComputerTurn.textContent==='🤚 :Computer'){
            sumResultOFContrast.textContent='You lose ☹️'
            scores.losses++
        }else if(invokingComputerTurn.textContent==='✌️ :Computer'){
            sumResultOFContrast.textContent='You win 🤩!!!'
            scores.ties++
        }
        
    
    
        const appeaToWinsFromDom=document.getElementById('Wins')
        const appealingToLossingFromDom=document.getElementById('Losses')
        const appealingToTiesFromDom=document.getElementById('Ties')
    
    
        appeaToWinsFromDom.textContent=`Wins:${scores.wins}`
        appealingToLossingFromDom.textContent=`Losses:${scores.losses}`
        appealingToTiesFromDom.textContent=`Ties:${scores.ties}`
    }
})