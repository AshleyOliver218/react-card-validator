import './App.css';
import {useEffect, useState} from "react"

// import {useState} from "react"
function App() {
  const [cardNumber, setCardNumber] = useState("")
  const [validity, setValidity] = useState(false);
  const handleChange = (evt) => {
    setCardNumber(evt.target.value);}

 const validCard=(cardNumber) => {
  let numberArray = cardNumber.split("").map(Number);

  for(let i=numberArray.length-2; i>=0; i=i-2){
      let oddValue = numberArray[i];
      oddValue=oddValue*2;

      if(oddValue>9){
        oddValue=oddValue % 10+1;
    }
    numberArray[i]=oddValue;
}

let total=0
for (let i=0; i < numberArray.length; i++){
    total+= numberArray[i];
}
   if( total % 10 === 0){
    return "valid"
  }else{
    return "invalid"
  }
}
console.log(validCard(cardNumber))
// useEffect(() => {
//   validCard(cardNumber);
// }, );

  return (
    <div className="App">
    
    <form onSubmit={(evt)=>{evt.preventDefault(); validCard(cardNumber)}}>
    <label >Validator</label> 
    <input name="cardNumber" value={cardNumber} onChange={handleChange} type="tel" placeholder="Enter Card Number"/>
    <button type="submit"  value="Validate">Validate</button> 
    </form>
    {validity ? <h1>Card accepted! Enjoy Your Purchase</h1> : <h1>Sorry This card is invalid. Try again..</h1> }
    </div>
   
  );
}

export default App;
