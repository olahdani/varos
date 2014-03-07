mezo({
  vizszintes: 2,
  fuggoleges: 3,
  nev: 'Attila Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {
    // Ciklus, haromszor hajtodik vegre
    for (szamlalo = 0; szamlalo < 3; szamlalo++) {
      
      szam = kerdez("Hány éves vagy?");
  
      // if jelentése: ha
      if (szam > 80) {
        kiir("Nem lehetsz ilyen öreg!");
        kiir("Fiatalabb vagy!");
      }
      // else jelentése: különben
      else {
        kiir("Fiatal vagy!");
      }
    }
  }
})

