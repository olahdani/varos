mezo({
  vizszintes: 5,
  fuggoleges: 1,
  nev: ' Házikója',
  leiras: 'Kicsi házikó.',
 ralepeskor: function() {
    hany = kerdez("Hanyszor irjam le?");
    // Ciklus, haromszor hajtodik vegre
    for (szamlalo = 0; szamlalo < hany; szamlalo++) {
      kiir("Minden nap programozni fogok!")
    }
  }
  
});
