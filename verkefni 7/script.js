/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES = 10;
let r = 0;
/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
	alert("Markmið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
	do{
		play()
	}while(confirm(`Spila aftur ?`));
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
 let enda = null;
 let byrja = null;
 let time = null;

function play() {
	byrja = new Date();
	for(let i = 0; i < GAMES; i++){
		let x = ask();
		if(x){
			r++;
		}
		if(!x){
			return;
		}
	}
	 enda = new Date();
	time = (enda - byrja)/1000;



	alert(`Þú hefur svarað ` + r + `/` + GAMES + ` dæmum rétt á ` + time + `.` + `\n\nMeðalrétt svör á sekúndum eru ` + r/time + `.`);

	
}



/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
	let number = randomNumber(1, 4);
	let num1 = null;
	let num2 = null;
	let sum = null;
	let spurn = null;
	if(number == 1){
		num1 = randomNumber(1, 100);
		num2 = randomNumber(1, 100);
		sum = num1 + num2;
		spurn = "Hvað er " + num1 + " + " + num2 + " ?";
	}
	if(number == 2){
		num1 = randomNumber(1, 100);
		num2 = randomNumber(1, 100);
		sum = num1 - num2;
		spurn = "Hvað er " + num1 + " - " + num2 + " ?";
	}
	if(number == 3){
		num1 = randomNumber(1, 10);
		num2 = randomNumber(1, 10);
		sum = num1 * num2;
		spurn = "Hvað er " + num1 + " * " + num2 + " ?";
	}
	if(number == 4){
		num1 = randomNumber(2, 10);
		num2 = num1 * randomNumber(2, 10);
		sum = num1 / num2;
		spurn = "Hvað er " + num2 + " / " + num1 + " ?";
	}

	let svar = Number(prompt(spurn));
	if(svar == sum) {
		return true;
	}
	if(svar == null){
		return null;

	}
	else{
		false;
	}
	



}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
