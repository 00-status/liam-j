
// function to roll various sizes of dice
const rollDice = (diceType, diceRollNumber = 1, add = 0) => {
    // If the user is only rolling once, then display something simpler
    if (diceRollNumber == 1 && add === 0)
    {
        const result = Math.floor(Math.random() * diceType) + 1;
        return "1 d" + diceType + " = " + result + "\n";
    } else {
        var rollText = "\n";

        // roll the amount of dice indicated by diceRollNumber
        var result = 0;
        var totalRoll = 0;
        for (var i = 0; i < diceRollNumber; i++) {
            result = Math.floor(Math.random() * diceType) + 1;
            totalRoll += result;

            rollText = "1 d" + diceType + " = " + result + "\n" + rollText;
        }

        totalRoll += parseInt(add);
        rollText = "Total: \t" + totalRoll + "\n" + rollText;
        return "Roll: \t" + diceRollNumber + " d" + diceType + " + " + add
            + "\n" + rollText;
    }
};

export default rollDice;
