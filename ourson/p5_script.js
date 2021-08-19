function edit_ourson() {
  document.getElementById("produit").innerHTML = l_ours.edit();
  cde_edit();
}

function ours(id, nom, image, prix, legende, couleurs) {
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

    return (
      `<article id="">
  <div class="cadrephoto">
  <img src="` +
      this.image +
      `" alt="` +
      this.nom +
      `"></div>
       <h3>` +
      this.nom +
      `</h3>
        <p>` +
      this.legende +
      `</p>
        
        <p id="nbr_prod">` +
      this.param_local[this.langue][0] +
      this.qty +
      `</p>
         <p id="c_color">` +
      this.param_local[this.langue][1] +
      v1 +
      `</p>
         <p id="case_color_a"></p>
         
         <p id="c_price">` +
      this.param_local[this.langue][2] +
      this.prix +
      ` €.</p>
       </article>`
    );
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

      vtt +=
        ` <div class="color_case2" id="zoneC` +
        j +
        `" onmouseover="l_ours.info_color(` +
        j +
        `)" onclick="l_ours.choix_color(` +
        j +
        `)" ></div>\n`;
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
      //window.location='form.html?choix='+this.id+'&qty='+this.qty+'&color='+this.choix_couleur;
      window.location =
        "form.html?choix@" +
        this.id +
        "@" +
        this.qty +
        "@" +
        this.choix_couleur;
    }
  };
}
