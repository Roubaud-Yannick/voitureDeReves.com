"use strict" 
//Pour l'étape 1, ce JS doit récuperer les données introduites dans le formulaire et creer un OBJET :TABLEAUX ASSOCIATIFS (voir TP08) avec ce dernier, 
let voiture ={};

function afficherVoiture(formulaire) {
	voiture.genre = formulaire.genre.value;
	voiture.couleur = formulaire.couleur.value
	voiture.dessins = formulaire.dessins.value;
	return false
}