mezo({
  vizszintes: 2,
  fuggoleges: 8,
  nev: 'Dávid háza',
  leiras: 'Ez egy házikó',

ralepeskor: function() {

    kiir("Szia! Gellért házában vagy.");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Szia " + nev;

  
    kiir(udvozlet);

    szam = kerdez("Hány éves vagy?");

  
    if (szam >= 80) kiir("Nem lehetsz ilyen öreg!");
   
    else kiir("Köszi!");
}
});
