mezo({
  vizszintes: 3,
  fuggoleges: 6,
  nev: 'Dani Háza',
  leiras: 'Kicsi házikó.',
 ralepeskor: function() {

    kiir("Helló! Dani házában vagy!");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Helló " + nev;

  
    kiir(udvozlet);

    cim = kerdez("Hány éves vagy?");

  
    if (cim != "") kiir("Elhiszem.")
     
     
    else kiir("Nem hiszem hogy 0 éves vagy!");
  }
});
