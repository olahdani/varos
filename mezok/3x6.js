mezo({
  vizszintes: 3,
  fuggoleges: 6,
  nev: ' Házikója',
  leiras: 'Kicsi házikó.',
  ralepeskor: function() {
      kiir("Üdvözöllek! Dani házában vagy!"); 
      nev = kerdez("Hogy hívnak?");
      udvozlet = "szia " + nev;
      kiir(udvozlet);
  }
});
