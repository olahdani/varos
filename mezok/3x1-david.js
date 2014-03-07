mezo({
  vizszintes: 3,
  fuggoleges: 1,
  nev: 'Dávid háza',
  leiras: 'Ez egy házikó',

ralepeskor: function() {

    kiir("Szia! Dávidnál vagy!");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Szia " + nev;

  
    kiir(udvozlet);

    szam = kerdez("Hányszor ismétejem a neved?");
    
    for (szamlalo=0; szamlalo <szam; szamlalo++) {
      
      kiir(nev)
    }
  

}
});
