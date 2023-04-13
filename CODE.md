Logique de jeu:

Chaque carte contient un nombre  

Comparer le nombre de la carte cliquee avec celui de celle qui est deja retournee

Creer un tableau de 1 a 6 pour representer l'ensemble des valeurs affichees sur les cartes
  => Math.floor(Math.random() * 6)

Creer une fonction pour melanger les cartes:
 => algo 
 
    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
}


Chaque nombre doit etre attribue a deux cartes differentes

Comment faire pour attribuer un nombre du tableau a deux cartes seulement ?
  valeur carte 1 et 2 => deck[0]
  valeur carte 3 et 4 => deck[1]
Pb: Melanger l'affichage des cartes pour ne pas que les nombres se suivent







