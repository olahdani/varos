mezo({
  vizszintes: 6,
  fuggoleges: 2,
  nev: 'Olivér Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz-oliver.png',
  ralepeskor: function() {
    kiir ("Oli Múzeumába vagy.");
    kiir("Szia! Dávidnál vagy!");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Szia " + nev;

  
    kiir(udvozlet);

   
    var udvozlesUtan = function() {
      kerdezuj("Hany banánt szeretnél?", kezelBananValasz);
    }

    var kezelBananValasz = function(valasz) {
      // Ciklus, haromszor hajtodik vegre
      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("banán")
      }
    }

    kiiruj("Szia latogato!", udvozlesUtan);
  }
})
      
  
