const range=100;
const answer=Math.ceil(Math.random()*range);
console.log(answer);

const inputTag=document.getElementById("input");
const resultDiv=document.getElementById("result");
const formBtn=document.getElementById("formBtn");
const displaylife=document.getElementById("lifecnt");

let life=5;
formBtn.onclick=(event) => {
    life-=1;
    displaylife.textContent=life;
    const userInput=Number(inputTag.value);
    const result=document.createElement('h2');
    result.textContent=userInput+" : ";

    if (userInput===answer){
        result.textContent+="Answer";
        alert("you are correct")
    }
    else{
        if(life>0){
            event.preventDefault();
            (userInput>answer)? (result.textContent+="DOWN"):(result.textContent+="UP");
            inputTag.focus();
        }
        else{
            alert("you failed! \nThe answer is : " + answer);
        }
    }
    resultDiv.append(result);
    inputTag.value=" ";
}