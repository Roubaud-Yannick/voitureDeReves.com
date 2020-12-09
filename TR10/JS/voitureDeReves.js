"use strict" 
//Pour l'étape 1, ce JS doit récuperer les données introduites dans le formulaire et creer un OBJET :TABLEAUX ASSOCIATIFS (voir TP08) avec ce dernier, 
let leNom;
let laVoiture; 

function afficherVoiture(formulaire) {
	let laDate = new Date();
	leNom = formulaire.nom.value
	laVoiture[leNom] = {};
	laVoiture[leNom].genre = formulaire.genre.value;
	laVoiture[leNom].couleur = formulaire.couleur.value;
	laVoiture[leNom].dessins = formulaire.dessins.value;
	laVoiture[leNom].date = laDate.toLocaleString('fr-BE');
	ajoutTable();
	return false
}

function chargement() {
	laVoiture ={};
	leNom ={}
	let section2 = document.getElementsByTagName('section')[1];
	section2.innerHTML = "<table><thead><th>Nom</th><th>Genre</th><th>Couleur</th><th>Dessins</th><th>Date</th></thead><tbody id='tabVoitures'></tbody></table>";
}

function ajoutTable() {
	let message = " ";
	let leBonMessage =" ";
	for ( let i in laVoiture) {
		message +="<tr><td>"+ i + "</td><td>"+ laVoiture[i].genre + "</td><td>"+ laVoiture[i].couleur + "</td><td>"+ laVoiture[i].dessins + "</td><td>"+ laVoiture[i].date + "</td></tr>";
		}
	document.getElementById("tabVoitures").innerHTML= message;
}





