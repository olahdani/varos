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

    cim = kerdez("Hol laksz?");

  
    if (cim != "") kiir("Köszi, hogy beírtad!")
     
     
    else kiir("Mért nem írtad be?");
}
});
