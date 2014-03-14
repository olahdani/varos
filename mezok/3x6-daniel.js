mezo({
  vizszintes: 3,
  fuggoleges: 6,
  nev: 'Dani ház',
  leiras: 'Kicsi házikó.',
 ralepeskor: function() {

    kiir("Helló! Dani házában vagy!");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Helló " + nev;

  
    kiir(udvozlet);

    cim = kerdez("Hol laksz?");

  
    if (cim != "") kiir("Köszi, hogy beírtad!")
     
     
    else kiir("Mért nem írtad be?");
  }
});
