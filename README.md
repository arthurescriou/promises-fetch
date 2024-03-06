# Fetch and Promises

## Prérequis

- node.js

## Exercices

Dans le fichier `fetch.js` il y a des exemples d'utilisations de la fonction fetch.

Pour lancer les appels sur un serveur vous devez spécifier son adresse dans le fichier `url.js`. (Par exemple ce code fonctionne pour appeler le serveur de donnée distant fourni dans le TME 1.)
Remplacez la première ligne pas une adresse.

### Exercice 1

Lancez les différentes fonctions commentées pour afficher les différents résultats du fetch.

### Exercice 2

Maintenant on veut utiliser la fonction fetch avec des promesses.

Dans le fichier `promise.js` ajoutez et utilisez des fonctions en vous inspirant du fichier `fetch.js`.

Implémentez les fonctions suivantes :

- récupérer tous les produits (les mettres dans une variable `products`)
- récupérer uniquement le produit d'id `12`
- récupérer les produits ayant pour leur id dans `idToFetch` (On veut faire autant d'appels que d'`id`. A la fin de la fonction chacuns des résultats doit être dans un tableau avec le même ordre que `idToFetch`.)

_NB: Pour transformer un tableau de promesses en une promesse de tableau on peut utiliser `Promise.all()` : <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">documentation</a>`_

### Exercice 3

On veut maintenant gérer les erreurs. En effet lors d'un appel fetch, avant de récupérer le résultat avec les parer `r.text()` ou `r.json()`, on doit vérifier le `status` code http.

Ajoutez dans vos fonctions une condition qui vérifie la valeur de `status` et qui termine la fonction par une erreur si le `status` n'est pas correct. (<a href="https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP">liste des codes</a>)
