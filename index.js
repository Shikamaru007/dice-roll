function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(i=0; i < numOfDice; i++) {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src=dice/${value}.png alt=dice${value}>`)
    }

    diceResult.textContent = `Dice rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");    
}
