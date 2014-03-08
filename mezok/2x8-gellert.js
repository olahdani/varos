mezo({
  vizszintes: 2,
  fuggoleges: 8,
  nev: 'Gellért háza',
  leiras: 'Ez egy házikó',
  kep: 'haz-szgellert.png',
ralepeskor: function() {

    kiir("Szia! Gellért házában vagy.");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Szia " + nev;


  
    kiir(udvozlet);

    szam = kerdez("Hányszór ismételje a nevét?");

    for (szamlalo=o;szammlalo <szam;szamlalo++){
      kiir(nev)
    }
}
});
