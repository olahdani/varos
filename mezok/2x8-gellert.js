mezo({
  vizszintes: 2,
  fuggoleges: 8,
  nev: 'Gellért háza',
  leiras: 'Ez egy házikó',
ralepeskor: function() {

    kiir("Szia! Gellért házában vagy.");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Szia " + nev;


  
    kiir(udvozlet);

    szam = kerdez("Ki az édesapád?");

  
    if (szam >= 80) kiir("Mi a kedvenc szined?");
   
    else kiir("Szeretsz Minecaftólni? ");
}
});
