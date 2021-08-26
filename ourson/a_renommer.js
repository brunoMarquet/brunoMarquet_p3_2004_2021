function le_panier() {
  this.commandes = [];
  this.total = 0;
  this.ajout = function (id, nom, qte, color, prix, url, lacolor) {
    let la_cde = [id, nom, qte, color, prix / 100, url, lacolor];
    //vnum = tab_ours.indexOf(ourson);
    nbre = this.commandes.length;
    if (nbre > 0) {
      for (j = 0; j < nbre; j++) {
        if (this.commandes[j][0] == id) console.log("doublon: " + id);
      }
    }
    this.commandes.push(la_cde);

    console.log("color2: " + this.commandes[6]);
  };
  this.raz_ligne = function (une_lig) {
    //this.commandes.delete[parseInt(une_lig)];
    //fruits.splice(1, 1);
    this.commandes.splice([parseInt(une_lig)], 1);
    //console.log("taille modif: " + this.commandes.length);
  };

  this.edit_panier = function () {
    nbre = this.commandes.length;
    let somme = 0;
    vtt = "";
    if (nbre > 0) {
      for (j = 0; j < nbre; j++) {
        prix_lig = this.commandes[j][2] * this.commandes[j][4];
        somme = somme + prix_lig;

        // pp= ${this.commandes[j][2]}${this.commandes[j][4]}
        vtt += `
        
        <div class="ligne_c" id=lc${j}">
        <img  class="miniature" src="images/s_${this.commandes[j][5]}"><img>
        Nom : ${this.commandes[j][1]}
        
        
        n°${j} _ref : ${this.commandes[j][0]}
        
        , qté :  
        <span class="qte_lic_c" id="qte_lic_c_${j}">
        ${this.commandes[j][2]}</span>, 

        <br>PU (prix unitaire) :  ${this.commandes[j][4]}
        <span class="la_case_color" style="background-color:${this.commandes[j][6]}">${this.commandes[j][6]}</span>
        total ligne: <span class="prix_lic_c" id="prix_lic_c_${j}"> ${prix_lig} €</span>

        <span class="modif_lig" onclick="annuler_lig(${j})">Annuler</span>
        <span class="modif_lig" onclick="">-</span>
        <span class="modif_lig" onclick="">+</span>
        <span clas="modif_lig" onclick="ajouter(${j}, ${this.commandes[j][4]},${this.commandes[j][2]})">+</span>
        </div>`;

        // console.log(this.commandes[j][0]);
      }
      this.total = somme;
      vtt += `<div class="prix_lic_c" id="la_somme">total : ${somme} €.</div>
      <button onclick="gerer_cde()">Commander</button> `;
    }
    return vtt;
  };
}
function annuler_lig(une_lig) {
  console.log("annul: " + une_lig);
  obj_cdes.raz_ligne(une_lig);
  //delete obj_cdes.commandes[une_lig];
  edit_panier();
}

function ajouter(ligne, qte, prix) {
  //console.log()
}

function gerer_cde() {
  document.getElementById("section_prod").innerHTML = do_form(obj_cdes.total);
  // obj_cdes.total
}

function le_choix(id, nom, image, prix, legende, couleurs) {
  this.langue = 1;
  this.param_local = [
    [
      "Quantité : ",
      "couleur choisie : ",
      "prix : ",
      "vous devez choisir une teinte svp",
      "valider la commande",
    ],
    [
      "Quantity : ",
      "color choice : ",
      "price : ",
      "can you choice a color please",
      "to order your command",
    ],
  ];
  this.id = id;
  this.nom = nom;
  this.image = "images/" + image;
  this.prix = prix / 100;
  this.legende = legende;
  this.couleurs = couleurs;
  this.choix_couleur = -1;
  this.qty = 1; // parametre

  //console.log("OURS :"+ this.nom+this.id);

  this.edit = function () {
    v1 = "";
    if (this.couleurs.length == 1) {
      //this.choix_couleur=0;
      v1 = this.couleurs[0];
      //[choix_couleur];
    }

    return `<article id="">
    <div class="cadrephoto">
    <img src="${this.image}" alt=${this.nom}"></div>
         <h3>${this.nom}</h3>
  <p> ${this.legende} </p>
          <p id="nbr_prod">quantité 
          <input type="number" id="quantity" name="quantity" min="0" max="5" 
          value="${this.qty}" /></p>

           <p id="c_color">couleur choisie : ${v1} </p>
        <p id="case_color_a"></p>
           <p id="c_price">prix : ${this.prix}€.</p>
          
          
         </article>
          <div id="commander" ">Commander</div>
    <div id="message_info"></div>
         `;
  };

  this.choix_color = function (koi) {
    this.choix_couleur = koi;
    document.getElementById("nbr_prod").innerHTML = this.couleurs[koi];
  };

  this.edit_color = function () {
    vtt = "";
    nbrc = this.couleurs.length;
    for (j = 0; j < nbrc; j++) {
      //zi_color = this.couleurs[j];
      // vtt +=` <div class="color_case2" id="zoneC`+j+`" onmouseover="l_ours.info_color(`+j+`)" ></div>\n`;

      vtt += ` <div class="color_case2" id="zoneC${j}" 
          onmouseover="l_ours.info_color(${j})" 
          onclick="l_ours.choix_color(${j})" ></div>\n`;

      //console.log(vtt);

      //<div class="color_name"></div>`+this.couleurs[j]+`
    }

    return vtt;
  };
  this.edit_qte = function (koi) {
    //alert(koi);
    this.qty = koi;
    document.getElementById("nbr_prod").innerHTML =
      this.param_local[this.langue][0] + this.qty;
    document.getElementById("c_price").innerHTML =
      this.param_local[this.langue][2] + this.prix * this.qty + " €.";
    //x = document.getElementById("quantity").value;
  };

  this.info_color = function (koi) {
    document.getElementById("info_col").innerHTML = this.couleurs[koi];

    //document.getElementById("c_price").innerHTML = this.couleurs[j];
  };
  this.choix_color = function (koi) {
    //alert(koi);
    this.choix_couleur = koi;
    document.getElementById("c_color").innerHTML =
      this.param_local[this.langue][1] + " " + this.couleurs[koi];

    message_alert("");

    document.getElementById("case_color_a").style.backgroundColor =
      this.couleurs[this.choix_couleur];
  };
  this.commander = function () {
    if (this.choix_couleur == -1) {
      message_alert(this.param_local[this.langue][3]);
    } else {
      this.valid_cde();
      //window.location='form.html?choix='+this.id+'&qty='+this.qty+'&color='+this.choix_couleur;
    }
  };
  this.valid_cde = function () {
    window.location = `form.html?choix@${this.id}@${this.qty}@${this.choix_couleur}`;
  };
}

function init_header() {
  const vvt = `<h2>Bienvenue sur Orinoco Site de commerce en ligne</h2>
 <h1>P5 : _ Nos ours _</h1>
 <nav id="nav"><span class="choix_menu" onclick="editpage()">Accueil</span>   __ panier </nav><hr>`;

  return vvt;
}

function init_footer() {
  vt = `<div class="">
        <section>
            <h6>A PROPOS</h6>
            <ul>
            <li>Conditions générales de vente</li>
            <li>Conditions générales d'utilisation</li>
            <li>Données personnelles</li>
            <li>Mentions</li>
            </ul>
        </section>
        <section>
            <h6>SERVICES</h6>
            <ul>
            <li>SAV</li>
            <li>Besoin d'aide ?</li>
            <li>Contactez-nous</li>
            </ul>
        </section>
        <section>
            <h6>LE GROUPE ORINOCO</h6>
            <ul>
            <li>A propos d'Orinours</li>
            <li>Recrutement</li>
            <li>Groupe Orinoco</li>
            </ul>
        </section>
            
            <section>
                <h6>PAIMENTS</h6>
                <ul>
                    <li class="fab fa-cc-paypal"></li>
                    <li class="fab fa-cc-visa"></li>
                    <li class="fab fa-cc-mastercard"></li>
                    </ul> 
            </section>
        </div>
`;

  return vt;
}

function do_form(total) {
  vtt = `<form action="" method="post">
        
  votre facture s'élève à ${total} euros.<br>
  <input type="hidden" value="345" id="temps" />
        <label for="lastName" class="">
          Nom :
          <input
            type="text"
            id="lastName"
            class="form-control"
            value="abc"
            required
          />
        </label>
        <label for="firstName">
          Prénom :
          <input
            type="text"
            id="firstName"
            class="form-control"
            value="abc"
            required
          />
        </label>
        <label for="email">
          Adresse Mail :
          <input
            type="email"
            id="email"
            class="form-control"
            value="@gmail.com"
            required
          />
        </label>
        <label for="adress">
          Adresse :
          <input
            type="text"
            id="address"
            class="form-control"
            value="Paris"
            required
          />
        </label>
        <label for="city">
          Code Postal :
          <input
            type="text"
            id="city"
            class="form-control"
            value="75000"
            required
          />
        </label>
        <button
          type="submit"
          class="-"
          id="submit"
        >
          Valider la commande
        </button>
      </form>`;

  return vtt;
}
