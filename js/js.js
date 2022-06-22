function prossess() {
    var MyXP = document.getElementById("MyXP").value;
    var Goal = document.getElementById("Goal").value;
    console.log(MyXP);
    console.log(Goal);
    value = ((Goal - MyXP) / 10) / 60;
    valuesplit = String(value).split(".");
    valuehour = Number(valuesplit[0])
    valuemin = Number("0." + valuesplit[1]) * 60;
    document.getElementById("result").innerHTML = "Il vous reste encore " + valuehour + "h" + valuemin + " de jeu pour atteidre votre but";
}