// Etape 
document.querySelector('#a-supprimer').remove(); // Supprimer le div avec l'id #a-supprimer

let headerUn = document.createElement('header'); // Créer un header
let navigationUn = document.createElement('nav');
let paragraphe = document.createElement('p');

headerUn.textContent = 'Bienvenue'; // Personnalisation HEADER
headerUn.style.backgroundColor = '#e3b04b';
headerUn.style.color = '#fff';
headerUn.style.padding = '30px';
headerUn.style.fontSize = '3em';
headerUn.style.textAlign = 'center';

navigationUn.innerHTML = '<a href="#">Accueil</a> | <a href="#">Une autre page</a>'; // Personnalisation NAV
navigationUn.style.backgroundColor = '#f1d6ab';
navigationUn.style.padding = '15px';

paragraphe.textContent = 'Paragraphe créé en JS'; // Personnalisation PARAGRAPHE
paragraphe.style.padding = '15px';

document.body.append(headerUn, navigationUn, paragraphe); // Ajouter



