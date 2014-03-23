mezo({
  vizszintes: 3,
  fuggoleges: 6,
  nev: 'Dani Háza',
  leiras: 'Kicsi házikó.',
  kep: 'haz3.png',
 ralepeskor: function() {

    kiir("Helló! Dani házában vagy!");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Helló " + nev;

  
    kiir(udvozlet);

    ev = kerdez("Hány éves vagy?");

  
    if (4 < ev < 80) kiir("Elhiszem.");
     
     
    else kiir("Na, ezt már nem hiszem el!");
  }
});
