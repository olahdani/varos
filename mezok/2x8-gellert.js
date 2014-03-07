mezo({
  vizszintes: 5,
  fuggoleges: 8,
  nev: 'Gellért háza',
  leiras: 'Ez egy házikó',
ralepeskor: function() {

    kiir("Szia! Gellért házában vagy.");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Szia " + nev;

  
    kiir(udvozlet);

    szam = kerdez("Hány perc egy óra?");

  
    if (szam == 60) kiir("Helyes !");
   
    else kiir("Nem helyes!");
}
});
