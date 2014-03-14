mezo({
  vizszintes: 2,
  fuggoleges: 3,
  nev: 'Attila Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {


    var kezelAlmaValasz = function(valasz) {
      // Ciklus, haromszor hajtodik vegre
      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiir("Alma")
      }
    }

    kerdez("Hany almát szeretnél?", kezelAlmaValasz);
  }
})

