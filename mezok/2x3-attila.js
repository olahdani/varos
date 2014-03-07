mezo({
  vizszintes: 2,
  fuggoleges: 3,
  nev: 'Attila Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {
    // Ciklus, haromszor hajtodik vegre
    for (szamlalo = 0; szamlalo < 3; szamlalo++) {
      
      kiir("Hanyadik futas: " + szamlalo)
    }
  }
})

