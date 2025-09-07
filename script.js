
  

    // PART 1: Variables & Conditionals


    // Capture age input and check voting eligibility
    document.getElementById("checkAgeBtn").addEventListener("click", function () {
      let age = document.getElementById("ageInput").value; // Variable declaration
      let result = "";

      if (age >= 18) {
        result = "You are eligible to vote!";
      } else if (age > 0) {
        result = "You are NOT eligible to vote.";
      } else {
        result = "Please enter a valid age.";
      }

      document.getElementById("ageResult").textContent = result;
    });

    // =========================
    // PART 2: Functions (Reusability)
    // =========================

    // Function to calculate sum of two numbers
    function calculateSum(a, b) {
      return a + b;
    }

    // Function to format a message
    function formatMessage(message) {
      return "Result: " + message;
    }

    // Use the functions when button is clicked
    document.getElementById("calcBtn").addEventListener("click", function () {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);

      let total = calculateSum(num1, num2); // Using custom function
      document.getElementById("calcResult").textContent = formatMessage(total);
    });

    // =========================
    // PART 3: Loops
    // =========================

    // Example 1: Array loop to display fruits
    let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

    document.getElementById("showFruitsBtn").addEventListener("click", function () {
      let fruitsList = document.getElementById("fruitsList");
      fruitsList.innerHTML = ""; // Clear previous list

      // Using forEach loop
      fruits.forEach(function (fruit) {
        let li = document.createElement("li");
        li.textContent = fruit;
        fruitsList.appendChild(li);
      });
    });

    // Example 2: While loop (simple countdown in console)
    let countdown = 5;
    while (countdown > 0) {
      console.log("Countdown: " + countdown);
      countdown--;
    }


    // PART 4: DOM Manipulation


    // Change background color when button is clicked
    document.getElementById("toggleBgBtn").addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });

    // Add CSS for dark mode dynamically
    let style = document.createElement("style");
    style.innerHTML = `
  .dark-mode {
    background-color: #222;
    color: white;
  }
`;
    document.head.appendChild(style);

