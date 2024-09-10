window.onload = () => {
  var button = document.getElementById("start");

  button.addEventListener("click", () => {
    // removing button from the DOM
    button.remove();

    // // selecting the input field div
    let inputField = document.getElementById("inputField");
    inputField.style.height = "30vh";

    //input -1
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "name1");
    input1.classList.add("inputs");
    input1.setAttribute("placeholder", "enter name of first lover");

    //creating an input element for -1
    //input -1
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "name2");
    input2.classList.add("inputs");
    input2.setAttribute("placeholder", "enter name of other lover");

    //result button element
    const resultBtn = document.createElement("button");
    resultBtn.classList.add("calBtn");
    resultBtn.innerHTML = "Calculate";

    inputField.appendChild(input1);
    inputField.appendChild(input2);
    inputField.appendChild(resultBtn);

    resultBtn.addEventListener("click", () => {
      alert("click 'OK' to proceed");
    });
  });
};
