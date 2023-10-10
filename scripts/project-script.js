/*******************************************************************************

ooooooooo.   ooooooooo.         .oooooo..  ooooo                  ooo
`888   `Y88. `888   `Y88.      d8P'    `Y8 `888                   888            
 888   .d88'  888   .d88'      Y88bo.       888  oooo   .ooooo.   888   .oooo.
 888ooo88P'   888ooo88P'        `"Y8888o.   888 .8P'   d88' `88b  888  `P  )88b
 888          888                   `"Y88b  888888.    888   888  888   .oP"888
 888          888              oo     .d8P  888 `88b.  888   888  888  d8(  888
o888o        o888o             8""88888P'  o888o o888o `Y8bod8P' o888o `Y888 "8o

					Aleksandrs Kuzņecovs
					   Jūrmala, Latvia
					  PP Skola (C) 2018
					  
*******************************************************************************/
//  Funkcija datu iegūšanai un gala rezultātu izdrukāšanai
function menedzFunk() {
	const ievad1 = document.getElementById('ievade1').value; // Iegūstam ievadīto vērtību kā tekstu
	const input2 = parseInt(document.getElementById('maniDati2').value, 10); // Izgūstam skaitlisku vērtību no ievades
	const izvade = document.getElementById('mansRezultats'); // Izgūstam rezultāta lauku

	// Pārbauda, vai viss ir pareizi
	const rezultats = convertNum(ievad1, input2); // konvertejam skaitlu
	if (rezultats[1]) {
		const finalResult = galvenaFunk(rezultats[0]); // atsutijam rezultata skaitlu pie gala tekstu
		izvade.value = finalResult; // mainam rezultata lauka rezultatu
		izvade.style.color = 'green'; // mainam rezultata lauka krasu
	} else {
		izvade.value = finalResult; // mainam rezultata lauka rezultatu
		izvade.style.color = 'red'; // mainam rezultata lauka krasu
	}
}

//  Funkcija vērtību konvertesanai
/////////////////////////////////////////////////////////
function convertNum(num, to) {
	const parsedNum = parseInt(num, 10); // String -> Integer
	if (!isNaN(parsedNum)) {
		const convertedNum = parsedNum.toString(to); // Skaitlis tu numura sistema izveleto numuru
		return [convertedNum, true];
	} else {
		return ['Nepareizi dati.', false];
	}
}
/////////////////////////////////////////////////////////
//  Funkcija, lai atrisinātu doto projektu
function galvenaFunk(rezultats) {
	//  Pēc liela darba veikšanas rezultāts ir šāds:
	return `Pēc liela darba veikšanas, rezultāts ir šāds:\n\n>>> ${rezultats}`;
}
/////////////////////////////////////////////////////////
//  Funkcija, lai notīrītu visas lauku vērtības
function dzestFunk() {
	document.getElementById('ievade1').value = ''; // teksta lauki
	document.getElementById('maniDati1').value = ''; // input lauki
	document.getElementById('maniDati2').value = ''; // input lauki
	document.getElementById('mansRezultats').value = ''; // izvades lauks
}
/////////////////////////////////////////////////////////
//  Izveidot jaunu dokumentu (ar diagrammu). Neveikt izmaiņas!!!
function izveidotDok() {
	//  Atvērt jaunu logu
	var jaunsLogs = window.open('', '_blank', 'top=0,left=100,width=700,height=850');
	//  Jaunā dokumenta HTML5 un CSS3 kods
	var mansDok =
		'<title>Diagramma</title><body style="margin:0; padding:10px; background-color:#e3ece3; text-align:center;"><img src="../images/diagramma.png" style="width: 95%;" alt="No JavaScript code in this example"><br></body>';
	//  Ielieciet šo kodu jaunā loga dokumentā
	jaunsLogs.document.write(mansDok);
}
/////////////////////////////////////////////////////////
