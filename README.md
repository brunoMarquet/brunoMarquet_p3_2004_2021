# dimanche
site de restauration

validation refusée......

__________________________
Validators Donation Program logo	The W3C validators rely on community support for hosting and development.


Document soumis	a
HTTP resource not retrievable. The HTTP status from the remote server was: 404.	a
Erreurs2 Avertissements22 a Ce document n'a pas réussi le test : W3C Validateur CSS (Niveau 3) Lien direct
a Erreurs (2)
Fichier : https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css	a
5		.fa, .fab, .fad, .fal, .far, .fas	La propriété “text-rendering” n'existe pas : auto	a
Fichier : file://localhost/P3_style.css	a
Erreur inconnue java.lang.Exception: import file://localhost/P3_style.css: Operation not permitted	a
a Avertissements (22)
Fichier : file://localhost/index.html	a
9			Vous devriez ajouter un attribut 'type' ayant pour valeur 'text/css' à l'élément 'link'	a
15			Vous devriez ajouter un attribut 'type' ayant pour valeur 'text/css' à l'élément 'link'	a
17			Vous devriez ajouter un attribut 'type' ayant pour valeur 'text/css' à l'élément 'link'	a
Fichier : https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css	a
5			La propriété “-moz-osx-font-smoothing” est une extension propriétaire inconnue	a
5			La propriété “-webkit-font-smoothing” est une extension propriétaire inconnue	a
5			La propriété “-webkit-animation” est une extension propriétaire inconnue	a
5			La propriété “-webkit-animation” est une extension propriétaire inconnue	a
5			La règle-arobase “@-webkit-keyframes” n'est pas reconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-webkit-filter” est une extension propriétaire inconnue	a
Informations1 a Résultats pour le test : Feed Validator Lien direct
a Informations (1)
Document soumis	a
It looks like this is a web page, not a feed.
I looked for a feed associated with this page, but couldn't find one. Please enter the address of your feed to validate.

_______________
CSS:
Remarque :
Erreur
 Ce document n'a pas réussi le test : W3C Validateur CSS (Niveau 3) Lien direct
a Erreurs (13)
Fichier : file://localhost/P3_style.css	a
38		.fa-spinner	Propriété erronée : top (nullvisuren.html#propdef-top) Erreur lors de l'analyse grammaticale. )) / 2)	a
39		.fa-spinner	Propriété erronée : left (nullvisuren.html#propdef-left) Erreur lors de l'analyse grammaticale. )) / 2)	a
MA REPONSE: 
 top: calc((100% - var(--taille_1)) / 2);
  left: calc((100% - var(--taille_1)) / 2);
  

46		.num2	Propriété erronée : top (nullvisuren.html#propdef-top) Erreur lors de l'analyse grammaticale. )) / 2)	a
47		.num2	Propriété erronée : left (nullvisuren.html#propdef-left) Erreur lors de l'analyse grammaticale. )) / 2)	a

IDEM
 top: calc((100% - var(--taille_2)) / 2);
  left: calc((100% - var(--taille_2)) / 2);
  

350		.bt_iconique	Propriété erronée : background (nullcolors.html#propdef-background) Il n'y a pas assez de valeurs pour la propriété “linear-gradient” )	a
ligne: 
background: linear-gradient(170deg, var(--rose2), var(--rose1));
Contre exemple : la class coeur avec les meme couleurs ne pose pas problème
.les_coeurs .fas {
  background: linear-gradient(#9356dc, #ff79da);

 Dans l'absolu à reécrire : 
 .les_coeurs .fas {
  background: linear-gradient( var(--rose2), var(--rose1));
  ...


372		.rubriq h3	Propriété erronée : margin-left (nullbox.html#propdef-margin-left) Erreur lors de l'analyse grammaticale. )) / 2)	a
??
   margin-left: calc((8px + 100% - var(--largeur_plat)) / 2);

453		.le_plat	Propriété erronée : margin-left (nullbox.html#propdef-margin-left) Erreur lors de l'analyse grammaticale. )) / 2)	a

margin-left: calc((8px + 100% - var(--largeur_plat)) / 2);


469		.le_plat:nth-of-type(3)	“calc(2)” n'est pas une valeur de “animation-delay” : calc(2)	a
 c'est une multiplication qui n'est pas indispenssable : c'est 0.2*2=0.4 !
 animation-delay: calc(2 * var(--delais));

535		.plat_prix	Propriété erronée : padding-top (nullbox.html#propdef-padding-top) Erreur lors de l'analyse grammaticale. ))	a
IDEM:
  padding-top: calc(var(--hauteur_plat) - (6px + 1.1rem));

544		.plat_legende	Propriété erronée : width (nullvisudet.html#propdef-width) Erreur lors de l'analyse grammaticale. 20px)	a
IDEM:
 width: calc(var(--largeur_plat) - 20px);

554		.plat_checked	Propriété erronée : padding-top (nullbox.html#propdef-padding-top) Erreur lors de l'analyse grammaticale. 2 - 0.65rem)	a
IDEM centrage vertical: 
 padding-top: calc(var(--hauteur_plat) / 2 - 0.65rem);

562		.tiret	Propriété erronée : margin-left (nullbox.html#propdef-margin-left) Erreur lors de l'analyse grammaticale. )) / 2)	a
IDEM : avec par ex. "10px" par rapport à "8px" qui décalle le tiret de 2 à droite : choix ou bug ?
 margin-left: calc((10px + 100% - var(--largeur_plat)) / 2);

581		.haut_page h2	Propriété erronée : margin-left (nullbox.html#propdef-margin-left) Erreur lors de l'analyse grammaticale. )) / 2)

IDEM avec 8px  au lieu de 10:
 margin-left: calc((8px + 100% - var(--largeur_plat)) / 2);
___________________
 Avertissements (14)
Fichier : file://localhost/P3_style.css	a
2			La propriété “--rose1” est une extension propriétaire inconnue	a
3			La propriété “--rose2” est une extension propriétaire inconnue	a
4			La propriété “--largeur_max” est une extension propriétaire inconnue	a
5			La propriété “--largeur_plat” est une extension propriétaire inconnue	a
6			La propriété “--hauteur_plat” est une extension propriétaire inconnue	a
7			La propriété “--footer_color” est une extension propriétaire inconnue	a
8			La propriété “--delais” est une extension propriétaire inconnue	a
9			La propriété “--taille_1” est une extension propriétaire inconnue	a
10			La propriété “--taille_2” est une extension propriétaire inconnue	a

634			La propriété “--largeur_plat” est une extension propriétaire inconnue	a
639			La propriété “--largeur_plat” est une extension propriétaire inconnue

"j'ai fait le choix d'utiliser des variables!"

161			Le pseudo-élément “::-webkit-input-placeholder” est une extension propriétaire inconnue	a
521			La propriété “-webkit-background-clip” est une extension propriétaire inconnue	a
522			La propriété “-webkit-text-fill-color” est une extension propriétaire inconnue	a



page d'un restaurantt parmi les 4...
 Ce document n'a pas réussi le test : Nu Html Checker Lien direct
a Informations (1)
Document soumis	a
HTTP resource not retrievable. The HTTP status from the remote server was: 404.	a
Erreurs2 Avertissements22 a Ce document n'a pas réussi le test : W3C Validateur CSS (Niveau 3) Lien direct
a Erreurs (2)
Fichier : file://localhost/../P3_style.css	a
Erreur inconnue java.lang.Exception: import file://localhost/../P3_style.css: Operation not permitted	a
Fichier : https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css	a
5		.fa, .fab, .fad, .fal, .far, .fas	La propriété “text-rendering” n'existe pas : auto	a
a Avertissements (22)
Fichier : file://localhost/A_la_francaise.html	a
6			Vous devriez ajouter un attribut 'type' ayant pour valeur 'text/css' à l'élément 'link'	a
11			Vous devriez ajouter un attribut 'type' ayant pour valeur 'text/css' à l'élément 'link'	a
17			Vous devriez ajouter un attribut 'type' ayant pour valeur 'text/css' à l'élément 'link'	a
modifié

Fichier : https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css	a
5			La propriété “-moz-osx-font-smoothing” est une extension propriétaire inconnue	a
5			La propriété “-webkit-font-smoothing” est une extension propriétaire inconnue	a
5			La propriété “-webkit-animation” est une extension propriétaire inconnue	a
5			La propriété “-webkit-animation” est une extension propriétaire inconnue	a
5			La règle-arobase “@-webkit-keyframes” n'est pas reconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-ms-filter” est une extension propriétaire inconnue	a
5			La propriété “-webkit-transform” est une extension propriétaire inconnue	a
5			La propriété “-webkit-filter” est une extension propriétaire inconnue

