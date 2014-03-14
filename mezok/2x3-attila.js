mezo({
  vizszintes: 2,
  fuggoleges: 3,
  nev: 'Attila Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {

    var udvozlesUtan = function() {
      kerdezuj("Hany almát szeretnél?", kezelAlmaValasz);
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

