mezo({
  vizszintes: 2,
  fuggoleges: 3,
  nev: 'Attila Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {
    almak = kerdez("Hany almát szeretnél?");
    // Ciklus, haromszor hajtodik vegre
    for (szamlalo = 0; szamlalo < almak; szamlalo++) {
      kiir("Alma")
    }
  }
})

