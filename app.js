function randomSuitInfo() {

    let cardSuit = ["&#9824;", "<font color=red>&#9829;</font>", "&#9827;", "&#9830;"];

    let suitCalc = cardSuit[Math.floor(Math.random() * cardSuit.length)];

    return suitCalc;

}

function randomNumberInfo() {

    let cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    let cardCalc = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

    return cardCalc;

}

function buildCardInfo() {

    //let sentenceExcuses = "";

    //sentenceExcuses = `${who[randomExcuses(who)]} ${action[randomExcuses(action)]} ${what[randomExcuses(what)]} ${when[randomExcuses(when)]}`;
    let suitInfo = randomSuitInfo();

    document.getElementById("suitTop"). innerHTML = suitInfo;
    document.getElementById("suitBottom"). innerHTML = suitInfo;

    document.getElementById("numbersCard"). innerHTML = randomNumberInfo();    

}

