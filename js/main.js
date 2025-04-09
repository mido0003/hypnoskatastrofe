// testing
// alert("test-branch");
document.querySelector("#knap1").addEventListener("click", visInfo); 

function visInfo(){
console.log("visInfo");

document.querySelector(".info-text > h2").textContent = "Gå i bad om aftenen";

document.querySelector(".placeholder").textContent = "Varmen fra vandet, duften fra din gode showergele og du er klar til at komme i drømmeland, sov godt.";

document.querySelector("#efficiency").innerHTML = "<h3>Fordele</h3> <p>Det er beroligende for kroppen med et varmt bad om aftenen inden sengetid. Varmen fra vandet får kroppen til at slappe af og er med til at kunne forbedre søvnen.</p>"

document.querySelector("#requirement").innerHTML = "<h3>Opsumering</h3> <p> Bedre søvn, mere tid om morgenen, undgå at stå i kø til badeværelset i din familie, følelsen efter et varmt bad er en god afslutning på din dag.</p>"

}

document.querySelector("#knap2").addEventListener("click", visInfo2); 

function visInfo2(){
console.log("visInfo2");

document.querySelector(".info-text > h2").textContent = "Pak din madpakke om aftenen";

document.querySelector(".placeholder").textContent = "Ved at du pakker madpakken dagen før, er du sikker på at du når at gøre den klar til dagen.";

document.querySelector("#efficiency").innerHTML = "<h3>Fordele</h3> <p>Det er vigtigt at spise frokost, så du får noget energi og næring. Det er derfor en rigtig god ide at gøre det en del af din aftenrutine, at få den pakket. </p>"

document.querySelector("#requirement").innerHTML = "<h3>Opsumering</h3> <p> Spare penge - da du ikke ender med dyr kantine mad, du kan lave en lækker madpakke om aftenen, og danne dig overblik over hvad du har i køleskabet.</p>"

}

document.querySelector("#knap3").addEventListener("click", visInfo3); 

function visInfo3(){
console.log("visInfo3");

document.querySelector(".info-text > h2").textContent = "Dæk op om aftenen";

document.querySelector(".placeholder").textContent = "Så føles det som at være på Bed&Breakfast, at der allerede er dækket op til en";

document.querySelector("#efficiency").innerHTML = "<h3>Fordele</h3> <p>Du kan sætte dig til bord med det samme om morgenen og spise din morgenmad. Hvis du er en af dem som er meget tidligt oppe i din familie, risikerer du heller ikke at larme med porcelænet fra skabet.</p>"

document.querySelector("#requirement").innerHTML = "<h3>Opsumering</h3> <p>Følelsen af luksus, at der allerede er dækket op - det er lige til, bare at tage morgenmaden frem, da du dækkede op om aftenen.</p>"

}