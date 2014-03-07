mezo({
  vizszintes: 3,
  fuggoleges: 6,
  nev: 'Dani Házikója',
  leiras: 'Kicsi házikó.',
 ralepeskor: function() {

    kiir("Szia! Dávidnál vagy!");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Szia " + nev;

  
    kiir(udvozlet);

    cim = kerdez("Hol laksz?");

  
    if (cim != "") kiir("Köszi, hogy beírtad!")
     
     
    else kiir("Mért nem írtad be?");
}
 
  }
});
