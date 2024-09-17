window.onload = () => {
  var button = document.getElementById("start");

  button.addEventListener("click", () => {
    // removing button from the DOM
    button.remove();

    // // selecting the input field div
    let inputField = document.getElementById("inputField");
    inputField.style.height = "30vh";

    //creating an input element for -1
    //input -1
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "name1");
    input1.classList.add("inputs");
    input1.setAttribute("placeholder", "enter name of first lover");
    //input -2
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "name2");
    input2.classList.add("inputs");
    input2.setAttribute("placeholder", "enter name of other lover");

    //result button element
    const resultBtn = document.createElement("button");
    resultBtn.classList.add("calBtn");
    resultBtn.innerHTML = "Calculate";

    // appending to parent elements
    inputField.appendChild(input1);
    inputField.appendChild(input2);
    inputField.appendChild(resultBtn);

    // click event listener
    resultBtn.addEventListener("click", () => {

      // creating a refresh button
      let refreshDiv = document.createElement("div");
      let refreshBtn = document.createElement('button');
      refreshBtn.innerText = "Refresh";
      refreshBtn.classList.add("calBtn");

      // reloading the page when refresh is clicked
      refreshBtn.addEventListener("click",()=>{
        location.reload();
      })

      //display conditions 
      if(input1.value && input2.value !== ""){
        const elementChecker = ()=>{
          return true;
        }
        if(elementChecker()){
          // assigning elements to a variable
          let resultDiv = document.createElement("div");
          let resultValue = document.createElement("h4");
          let resultField = document.getElementById("resultField");

          // adding a class to the result div
          resultDiv.classList.add("resultDiv");

          
          // inserting the value into the variable
          resultDiv.appendChild(resultValue);
          // inserting the refresh button into its div
          refreshDiv.appendChild(refreshBtn);
          // inserting the refresh button div to the result div
          resultDiv.appendChild(refreshDiv);
          // inserting the result div into the result field
          resultField.appendChild(resultDiv);

          // condition for final results
          if(resultDiv){
              
            // the random value generator
            let num = Math.random();
            num = num * 100;
            num = Math.floor(num) +1;
            console.log(num);

            // adding attributes
            resultValue.innerHTML = `The love percentage has been calculated to be: ${num}%`;
          }

        }
      }else{
        // message for an empty input
        alert("Empty Input, Please fill in a value");
      }
    });


     
  });
};
