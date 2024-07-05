function winorloose() {
  let choice = document.getElementById("choice").value;
  let button = document.getElementById("submit-button");
  let result = document.getElementById("result");
  let machine = document.getElementById("mychoice");
  let resText = "Sorry You Loose..!";
  let choicearr = ["stone", "paper", "sicssor"];
  console.log(choice == "empty");
  if (choice !== "empty") {
    let x = parseInt(Math.random() * 10);
    let myChoice = choicearr[x % 3];
    machine.innerHTML = "My Choice is " + myChoice.toLocaleUpperCase();
    console.log(myChoice);
    if (myChoice === choice) {
      resText = "Match is Draw..!";
    } else if (
      (choice === "stone" && myChoice === "sicssor") ||
      (choice === "paper" && myChoice === "stone") ||
      (choice === "sicssor" && myChoice === "paper")
    ) {
      resText = "You Won The Match.. :)";
    }
  } else {
    resText = "Please Enter a Choice :(";
  }
  result.innerHTML = resText;
}
