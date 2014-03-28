mezo({
  vizszintes: 1,
  fuggoleges: 8,
  nev: 'Számkitaláló Házikó',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {
    kiir ("Gondolj egy számra! (1-től-10-ig)");
    for (var i = 10; i > 0; i--) {
      var valasz = kerdez ("Kisebb mint "+ i + "? (Ezeket írhatod: igen ; nem ;)");
      if (valasz != 'igen') {
        kiir("Te a " + i + " számra gondoltál!");
        return;
      }
    }
  }
})
