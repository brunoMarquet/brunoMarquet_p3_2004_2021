
/*
'old variables et valeurs '
var listrestau=["La_palette_du_gout","Le_delice_des_sens","La_note_enchantee","A_la_francaise"]
var vtitre=["La palette du goût","Le délice des sens","La note enchantée","À la française"]
var pentree=[];
var pdessert=[];
var pplat=[];
nominal :
var Ptitre=[["La palette du goût","La_palette_du_gout","Ménilmontant","photo1.jpg","La palette du goût: photo de la table 12","1"],
["La note enchantée","La_note_enchantee","Charone","pict_La_note_enchantee.jpg","le restau , photo de Camille ...","1"],
["À la française","A_la_francaise","Cité Rouge","A_la_francaise33.jpg","À la française,coyright Sigma","0"],
["Le délice des sens","Le_delice_des_sens","Folie-Méricourt","delice4.jpg","Le_delice_des_sens- photo de promotion by Fred","0"]];


20 mai

//vtt += '<div class="foodbox"><div class="food">'+  menu[j][2][0]+'</div><span class="foodinfo">'+ menu[j][2][1]+'</span><span class="foodprice">'+ menu[j][2][2]+'</span></div>';
  

24 mai:
vtt += ' <div class="foodbox" onclick="mchoix('+j+','+i+')"><div class="food">'+  vfood+'</div><span class="foodinfo">'+ vfoodinfo+'</span><span class="foodprice">'+ vfoodprice +'</span><div class="caption-check-box"><i class="fas fa-check-circle"></i></div></div>\n';



*/

var Ptitre=[["La palette du goût","La_palette_du_gout","Ménilmontant","restau1.jpg","La palette du goût: photo de la table 12","1"],
["La note enchantée","La_note_enchantee","Charone","restau2.jpg","le restau ,La_note_enchante à Charone : photo de Camille ...","1"],
["À la française","A_la_francaise","Cité Rouge","restau3.jpg","À la française,coyright Sigma","0"],
["Le délice des sens","Le_delice_des_sens","Folie-Méricourt","restau4.jpg","Le_delice_des_sens- photo de promotion by Fred","0"]];


/*______________
   ____ data
   ___________________*/

  function mdata(){
    
 //case
 
 pentree=[]; pplat=[]; pdessert=[];
 truc=idrestau;
 
if (truc===0){
pentree=[["Fricassée d'escargot","Au piment d'Espelette","25€"],
["Foie gras de canard mi-cuit","Et ses copeaux de truffe noire","35€"],
["Oeuf au plat","Assaisonné à la truffe sur lit de caviar","20€"]]

pplat=[["Filet de boeuf aux herbes","Accompagné de sa ribambelle de légumes","40€"],
["Parmentier de queue de boeuf","À la truffe noire sur sa purée de panais","35€"],
["Filet de turbot","Aux agrumes","44€"]]

pdessert=[["Paris-Brest","Revisité","18€"],
["Macaron au chocolat d'exception ","Et glace à la vanille de Madagascar","22€"],
["Mousse au chocolat","Au piment d'Espelette et à la truffe noire","23€"]]
}
if (truc===1){
pentree=[["Tartare de thon","Assaisonné au yuzu","25€"],
["Bouchée de homard croustillant","Et sa farandole de petits légumes","35€"],
["Velouté de cèpes","Aux truffes","20€"]]

pplat=[["Poulet rôti aux herbes de Provence","Et sa crème de truffe","40€"],
["Langouste rôtie","Et ses légumes de saison","35€"],
["Côte de boeuf Angus","Et sa purée de panais","44€"]];

pdessert= [["Farandole de desserts","Du chef","18€"],["Crème brulée","Revisitée","22€"],["Tiramisu","À la noisette","23€"]];

  }

  if (truc===2){
    pentree=[["Ravioles de foie gras","Accompagnés de leur crème à la truffe","25€"],
["Caviar osciètre","Sur blini à la farine de blé noir","35€"],
["Homard et espuma de potiron","Mariné aux zestes d'orange","20€"],
["Foie gras de canard cuit entier","Confiture de figue et pain toasté","35€"]];

pplat=[["Noix de coquilles Saint-Jacques","Sur lit de purée de céleri-rave","40€"],
["Langoustine poêlée","Purée de patate douce","35€"],
["Mijoté de queue de boeuf","Et riz sauvage aux zestes de citron","44€"]];

pdessert=[["Macaron noisette et chocolat","Glace au caramel brun et sel de Guérande","18€"],
["Baba au rhum revisité","Avec son coulis de citron","22€"],
["Tarte au citron meringuée","Déstructurée","23€"]];


  }

  if (truc===3){

    pentree=[["Tartare de poulpe acidulé","Aux zestes d'orange","25€"],
["Velouté de légumes d'antan","Carotte, panais, topinambour","35€"],
["Soupe à l'oignon","Revisitée","20€"]];
pplat=[["Coquilles Saint-Jacques","Accompagnées d'une purée de panais","40€"],
["Magret de canard","Et parmentier de pommes de terre","35€"],
["Pigeonneau d’Ille-et-Vilaine","Sur son lit de gnocchis aux légumes","44€"]];

pdessert=[["Pétales de violettes glacés","Et purée de noisettes","18€"],
["Fondant au chocolat","Revisité","22€"],
["Millefeuille croustillant","Myrtilles et pâte d’amande","23€"]];

}
Pmenu.push(pentree);
Pmenu.push(pplat);
Pmenu.push(pdessert);

//return menu;
}
 
 /*------------
 ----fin data edito
 -----------  */
  
var vrubrique=["ENTREES","PLATS","DESSERTS"];

var pedit_html=false;

var idrestau=-1;
var Pmenu=[];

//__________methodes

function minit(){
  vm=Ptitre.length;
  listrestau=[];
for (i=0;i<vm;i++){listrestau.push(Ptitre[i][1]);}


 var resto = (document.URL).split("choix=")[1];
 vnum=listrestau.indexOf(resto);
if(vnum==-1) { malert(resto);}
else {
  idrestau = vnum ;
  monresto();

}
}

function monresto(){
  truc= idrestau;
    vtt="";
vimage="images/rest"+truc+".jpg";
vimage="images/restau1.jpg" ; //provisoire

vtt1=Ptitre[idrestau][0];

document.title=vtt1;

mdata(); //"nourrir la carte fonction du restau"

//vtt='<img src ='"+vimage+ '"/>;
vtt += '<h2>'+vtt1+'<i class="far fa-heart coeur1"></i><i class="far fa-heart coeur2"></i></h2>';


// alert ("/images/"+Ptitre[idrestau][3]);
  document.images[1].src="../images/"+Ptitre[idrestau][3];
   document.images[1].alt=Ptitre[idrestau][4];
   console.log(document.images[1].alt);

for (j=0;j<3;j++){
vtt =  vtt +'\n<div="rubriq">'+vrubrique[j]+'</div><div class="tiret"></div>\n';

vm=Pmenu[j].length;

//vm=vtab.length;
//debug !


 

var vplat=[];
for (i=0 ; i<vm ; i++){
  
  vfood=Pmenu[j][i][0];
  vfoodinfo=Pmenu[j][i][1];
  vfoodprice=Pmenu[j][i][2];
  

vtt += ' <article class="le_plat" onclick="mchoix('+j+','+i+')"><div class="food">'+  vfood+'</div><span class="foodinfo">'+ vfoodinfo+'</span><span class="foodprice">'+ vfoodprice +'</span><div class="caption-check-box"><i class="fas fa-check-circle"></i></div></article>\n';


}


}
//alert (vtt);
document.getElementById("lemenu").innerHTML=vtt;
//document.getElementById("exporter").innerHTML=vtt;
}

function minitchoixResto(){
  vm=Ptitre.length;
  vtt="";
  for (i=0 ; i<vm ; i++){
    vtt+= Ptitre[i][3]+ ";"+Ptitre[i][4];
    
    /*
    vtt+= "<div class='restobox'><img src='images/' + Ptitre[i][3]+ ''  alt='+Ptitre[i][4]+'/>'";
    
    
  <div class="news">Nouveau</div>
  <span>Le délice des sens</span>
  <a  href="restau.html?choix=Le_delice_des_sens"><i class="far fa-heart"></i></a>
   <span>mettttt</span>
  </div>";
   */
   
  }
 // alert(vtt);
}

function malert(truc){
alert("votre choix de restaurant "+truc+" n'est pas valable !");
window.location="index_dyn.html";

}

function mchoix(v1,V2){
  // v1= 2 donc dessert...
  console.log(v1 +': '+ V2);
  
}
   