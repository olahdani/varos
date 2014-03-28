mezo({
  vizszintes: 4,
  fuggoleges: 4,
  nev: 'Számkitaláló Házikó',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {
    kiir ("Gondolj egy számra! (1-től-10-ig)");
    for (var i = 10; i > 0; i--) {
      var valasz = kerdez ("Kisebb mint 10? (Ezeket írhatod: igen ; nem ;)");
      if (valasz != 'igen') {
        kiir("Te a " + i + " számra gondoltál!");
        return;
      }
    }
  }
})
