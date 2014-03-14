mezo({
  vizszintes: 6,
  fuggoleges: 2,
  nev: 'Olivér Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz-oliver.png',
  ralepeskor: function() {
    kiir ("Oli Múzeumába vagy.");
    var udvozlesUtan = function() {
      kerdezuj("Hany banánt szeretnél?", kezelAlmaValasz);
    }

    var kezelAlmaValasz = function(valasz) {
      // Ciklus, haromszor hajtodik vegre
      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("Alma")
      }
    }

    kiiruj("Szia latogato!", udvozlesUtan);
  }
})

    }
      
  }
})
  
