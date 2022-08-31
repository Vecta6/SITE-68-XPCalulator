window.scroll({ top: 0, behavior: "smooth" });
document.documentElement.style.overflow = 'hidden';


function prossess() {
    var MyXP = document.getElementById("MyXP").value;
    var Goal = document.getElementById("Goal").value;
    console.log(MyXP + " " + typeof(MyXP));
    console.log(Goal + " " + typeof(Goal));
    if (!Goal.replace(/\s+/, "").length || !MyXP.replace(/\s+/, "")) {
        document.getElementById("result").innerHTML = 'Attention, il faut obligatoirement mettre quelque chose dans la partie en <em class="emred">ROUGE</em>';
    } else {
        value = ((Goal - MyXP) / 10) / 60;
        valuesplit = String(value).split(".");
        valuehour = Number(valuesplit[0]);
        valuemin = Number("0." + valuesplit[1]) * 60;
        valuemin = Math.round(valuemin);
        if (String(valuemin).length == 1) {
            valuemin = "0" + valuemin;
        } else if (valuemin == NaN) {
            valuemin = "00";
        }
        document.getElementById("result").innerHTML = 'Il vous reste encore <em class="emunderline">' + valuehour + "h" + valuemin + '</em> ∓ 5min de jeu pour atteidre votre but';
    }
}

async function closepopup() {
    document.getElementById("popup").style.top = "-300px";
    document.getElementById("blur").style.visibility = "hidden";
    document.documentElement.style.overflow = "visible";
}

function openpopup() {
    document.getElementById("popup").style.top = "50%";
}

setTimeout(openpopup, 1000);