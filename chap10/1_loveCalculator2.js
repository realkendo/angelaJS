window.onload = () => {
    const button = document.getElementById("start");
  
    button.addEventListener("click", () => {
      button.remove(); // Removing the start button
  
      const inputField = document.getElementById("inputField");
      inputField.style.height = "30vh";
  
      // Helper function to create input elements
      const createInput = (id, placeholder) => {
        const input = document.createElement("input");
        input.type = "text";
        input.id = id;
        input.classList.add("inputs");
        input.placeholder = placeholder;
        return input;
      };
  
      // Creating input elements for lovers' names
      const input1 = createInput("name1", "Enter name of first lover");
      const input2 = createInput("name2", "Enter name of other lover");
  
      // Creating calculate button
      const resultBtn = document.createElement("button");
      resultBtn.classList.add("calBtn");
      resultBtn.textContent = "Calculate";
  
      // Appending inputs and button to inputField
      inputField.append(input1, input2, resultBtn);
  
      // Create result and refresh elements only once
      let resultValue;
      let refreshBtn;
  
      // Calculate button click event
      resultBtn.addEventListener("click", () => {
        if (input1.value.trim() && input2.value.trim()) {
          const resultField = document.getElementById("resultField");
  
          // Check if resultValue and refreshBtn already exist
          if (!resultValue && !refreshBtn) {
            // Create result div and value elements
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("resultDiv");
  
            resultValue = document.createElement("h4"); // Create resultValue once
            refreshBtn = document.createElement("button"); // Create refreshBtn once
            refreshBtn.textContent = "Refresh";
            refreshBtn.classList.add("calBtn");
  
            // Reload page on refresh button click
            refreshBtn.addEventListener("click", () => location.reload());
  
            // Append resultValue and refreshBtn to resultDiv and resultField
            resultDiv.append(resultValue, refreshBtn);
            resultField.appendChild(resultDiv);
          }
  
          // Generate and display a new random percentage
          const num = Math.floor(Math.random() * 100) + 1;
          resultValue.textContent = `The love percentage is: ${num}%`;
  
        } else {
          alert("Empty Input, Please fill in both names");
        }
      });
    });
  };
  