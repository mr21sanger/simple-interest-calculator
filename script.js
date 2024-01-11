let x = 0;
let result = document.createElement("div");
result.setAttribute("class", "result");
result.innerHTML = `<div><p>Principle:- <span class = "pri ans">0</span></p>
<p>Rate:- <span class = "rate ans">0</span></p>
<p>time:- <span class = "time ans">0</span></p>
<p>earned:- <span class = "int ans">0</span></p>
<p>Amount:- <span class = "amt ans">${x}</p></div>`
document.querySelector(".box").append(result);
let calculate = () => {
    //CALCULATING RESULT
    let p = Number(document.getElementById("principle").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let dur = document.getElementById("yr-mon").value;
    let res = dur ==  1? (p * r * t) / 100 : (p * r * t) / 1200;
   
    console.log(res);
    let amount = p + res;
    console.log(amount)

    let pri = document.querySelector(".pri");
    pri.innerText = `${p}`
    let rate = document.querySelector(".rate");
    rate.innerText = `${r}`
    let int = document.querySelector(".int");
    int.innerText = `${res.toFixed(2)}`
    let time = document.querySelector(".time");
    time.innerText = `${t + " " + (dur == 1 ? "years": "months")}`
    let amt = document.querySelector(".amt");
    amt.innerText = amount.toFixed(2);


    //CREATING RESULT BOX

}

let cal = document.querySelector("#calc");
cal.addEventListener("click", calculate);