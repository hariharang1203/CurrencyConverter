let select = document.querySelectorAll(".select");

   fetch("https://api.frankfurter.app/currencies")
  .then((result) => result.json())
  .then((data) => dropdown(data));

  function dropdown(data) {
     let currencies = Object.entries(data);
      for (let currency of currencies) {
      let option = `<option value="${currency[0]}">${currency[0]}</option>`;
      select[0].innerHTML += option;
      select[1].innerHTML += option;
  }
}

let btn=document.getElementById("btn");
let input_number=document.getElementById("input_number");
btn.addEventListener("click",()=>
{
    let currency1=select[0].value;
    let currency2=select[1].value;
    let inputValue=input_number.value;
    if (currency1==currency2)
    {
        alert("Same Currency Not Allowed");
    }
    else{
        convert(currency1,currency2,inputValue);
    }
});

function convert(currency1,currency2,inputValue)
{
    const host = 'api.frankfurter.app';
   fetch(`https://${host}/latest?amount=${inputValue}&from=${currency1}&to=${currency2}`)
   .then(resp => resp.json())
   .then((data) => {
      document.getElementById("result").value=Object.values(data.rates)[0]
  });
}