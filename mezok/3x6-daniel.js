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

kerdezuj("Hány játékot szeretnél?", kezelAlmaValasz);
    }

    var kezelAlmaValasz = function(valasz) {
      // Ciklus, haromszor hajtodik vegre
      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("Játék")
      }
    }

    kiiruj("Szia latogato!", udvozlesUtan);

    ev = kerdez("Hány éves vagy?");

  
    if (4 < ev < 80) kiir("Elhiszem.")
     
     
    else kiir("Na, ezt már nem hiszem el!");
  }
});
