"use strict" 

//JSON.stringify(laVoiture) Ne pas oublier de mettre des apostrophes
let leNom;
let laVoiture = JSON.parse('{"A":{"genre":"Pickup","couleur":"Mauve","dessins":"Etoiles","vitesseMin":"223","vitesseMax":"50","vitesseMoy":"25111.50","date":"16/12/2020 à 14:49:52"},"L":{"genre":"Pickup","couleur":"Mauve","dessins":"Etoiles","vitesseMin":"270","vitesseMax":"59","vitesseMoy":"29635.00","date":"16/12/2020 à 14:50:03"},"F":{"genre":"SUV","couleur":"Blanche","dessins":"Nuages","vitesseMin":"20","vitesseMax":"340","vitesseMoy":"17010.00","date":"16/12/2020 à 14:50:24"},"Z":{"genre":"Cabriolet","couleur":"Bleue","dessins":"/","vitesseMin":"120","vitesseMax":"13","vitesseMoy":"6560.00","date":"16/12/2020 à 14:50:45"},"P":{"genre":"SUV","couleur":"Noire","dessins":"Hello Kitty","vitesseMin":"145","vitesseMax":"70","vitesseMoy":"35072.50","date":"16/12/2020 à 14:51:18"}}');

/**
 *Fonction qui introduit deux valeur comme étant deux objets distincs l'un de l'autre et ensuite insert un tableau dans la deuxième balise "<secton>" du contenu HTML. 
 *Cette fonction sera utilisée lors du chargement de la page.
 *Précisions: 
 *La balise "<tbody>" qui doit être insérée, contient un id afin d'être réutilisé ultérieurement dans une autre fonction.
*/

function chargement() {
	leNom ={};
	let section2 = document.getElementsByTagName('section')[1];
	section2.innerHTML = "<table><thead><th class='bouton' title='Cliquer pour trier alphabétiquement' onclick='trierSurLesNoms();'>Nom</th><th>Genre</th><th>Couleur</th><th>Dessins</th><th>Vitesse Minimum</th><th>Vitesse Maximum</th><th class='bouton' title='Cliquer pour trier de façon décroissante' onclick='trierSurLesVitessesMoyennes();'>Vitesse Moyenne</th><th>Date</th></thead><tbody id='tabVoitures'></tbody></table>";
	ajoutTable();
}

/**
*Fonction qui récupère dans le formulaire le nom, le genre, la couleur, les dessins et crée une variable faisant appel à la fonction "new Date()" 
*Afin d'y introduire la date à laquelle le formulaire a été introduit 
*Pour ensuite les ajouter dans un objet, objet ayant été initialisé dans une autre fonction au préalable ( la fonction du chargement ).
*
*@see la fonction "chargement()"
*
*La fonction fait ensuite appel une autre fonction nomée "ajoutTable()" afin d'inserer dynamiquement le nouvel objet dans le contenu de la page.
*
*@see la fonction "ajoutTable()"
*@return {boolean}
*/

function afficherVoiture(formulaire) {
	let vitesseMax = formulaire.vitesseMax.value;
	let vitesseMin = formulaire.vitesseMin.value;
	if ( vitesseMax < vitesseMin ) {
		let temp = vitesseMax;
		vitesseMax = vitesseMin;
		vitesseMin = temp;
	}
	let vitesseMoyenne = ( vitesseMax + vitesseMin ) / 2;
	let laDate = new Date();
	leNom = formulaire.nom.value;
	laVoiture[leNom] = {};
	laVoiture[leNom].genre = formulaire.genre.value;
	laVoiture[leNom].couleur = formulaire.couleur.value;
	laVoiture[leNom].dessins = formulaire.dessins.value;
	laVoiture[leNom].vitesseMin = vitesseMin;
	laVoiture[leNom].vitesseMax = vitesseMax;
	laVoiture[leNom].vitesseMoy = vitesseMoyenne.toFixed(2);
	laVoiture[leNom].date = laDate.toLocaleString('fr-BE');
	ajoutTable();
	return false
}

function ajoutTable() {
	let message = " ";
		for ( let i in laVoiture) {
				message +="<tr><td>"+ i + "</td><td>"+ laVoiture[i].genre + "</td><td>"+ laVoiture[i].couleur + "</td><td>"+ laVoiture[i].dessins + "</td><td>"+ laVoiture[i].vitesseMin + " km/h" + "</td><td>"+ laVoiture[i].vitesseMax + " km/h" + "</td><td>"+ laVoiture[i].vitesseMoy + " km/h" + "</td><td>"+ laVoiture[i].date + "</td></tr>";
				}
		document.getElementById("tabVoitures").innerHTML= message;
}


function trierSurLesNoms() {
	let message = " ";
	let clefs = Object.keys( laVoiture );
	clefs.sort( triCroissant );
	for ( let i in clefs ) {
		message +="<tr><td>"+ clefs[i] + "</td><td>"+ laVoiture[clefs[i]].genre + "</td><td>"+ laVoiture[clefs[i]].couleur + "</td><td>"+ laVoiture[clefs[i]].dessins + "</td><td>"+ laVoiture[clefs[i]].vitesseMin + " km/h" + "</td><td>"+ laVoiture[clefs[i]].vitesseMax + " km/h" + "</td><td>"+ laVoiture[clefs[i]].vitesseMoy + " km/h" + "</td><td>"+ laVoiture[clefs[i]].date + "</td></tr>";
		document.getElementById("tabVoitures").innerHTML= message;
	}
}

function trierSurLesVitessesMoyennes(){
	let message = " ";
	let clefs = Object.keys( laVoiture );
	clefs.sort(triVitesseMoyenne );
		for ( let i in clefs ) {
		message +="<tr><td>"+ clefs[i] + "</td><td>"+ laVoiture[clefs[i]].genre + "</td><td>"+ laVoiture[clefs[i]].couleur + "</td><td>"+ laVoiture[clefs[i]].dessins + "</td><td>"+ laVoiture[clefs[i]].vitesseMin + " km/h" + "</td><td>"+ laVoiture[clefs[i]].vitesseMax + " km/h" + "</td><td>"+ laVoiture[clefs[i]].vitesseMoy + " km/h" + "</td><td>"+ laVoiture[clefs[i]].date + "</td></tr>";
		document.getElementById("tabVoitures").innerHTML= message;
	}
}
	
		
function triCroissant(x,y) {
	if ( x > y ) return +1
	if ( x < y ) return -1
	return 0
}


function triVitesseMoyenne(x,y) {
	if ( laVoiture[x].vitesseMoy > laVoiture[y].vitesseMoy ) return +1
	if ( laVoiture[x].vitesseMoy < laVoiture[y].vitesseMoy ) return -1
	return 0
}

