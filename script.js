const choices = {
    rock: { name: "Rock", img: "sto.png" },
    paper: { name: "Paper", img: "pap.png" },
    scissors: { name: "Scissors", img: "sci.png" }
  };
  
  function play(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    showResult(userChoice, computerChoice, result);
  }
  
  function getComputerChoice() {
    const keys = Object.keys(choices);
    return keys[Math.floor(Math.random() * keys.length)];
  }
  
  function determineWinner(user, computer) {
    if (user === computer) return "It's a Draw!";
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) return "You Win!";
    return "Computer Wins!";
  }
  
  function showResult(userChoice, computerChoice, result) {
    document.getElementById('result').innerHTML = `
      <h2>Result:</h2>
      <div style="display: flex; justify-content: center; align-items: center; gap: 40px;">
        <div>
          <h3>You</h3>
          <img src="${choices[userChoice].img}" alt="${choices[userChoice].name}" width="100">
          <p>${choices[userChoice].name}</p>
        </div>
        <div>
          <h3>Computer</h3>
          <img src="${choices[computerChoice].img}" alt="${choices[computerChoice].name}" width="100">
          <p>${choices[computerChoice].name}</p>
        </div>
      </div>
      <h3 style="margin-top: 20px;">${result}</h3>
    `;
  }