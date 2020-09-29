let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function randomExcuses(parameterVariable) {
    let randomWhoNumber = Math.floor(Math.random() * parameterVariable.length);
    return randomWhoNumber;
}

function buildExcuses() {
    let sentenceExcuses = "";
    sentenceExcuses = `${who[randomExcuses(who)]} ${action[randomExcuses(action)]} ${what[randomExcuses(what)]} ${when[randomExcuses(when)]}`;

    document.getElementById("excuse"). innerHTML = sentenceExcuses;
}

