mezo({
  vizszintes: 3,
  fuggoleges: 6,
  nev: 'Dani Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {
      kiir("Üdvözöllek! Dani házában vagy!"); 
      nev = kerdez("Hogy hívnak?");
      udvozlet = "szia " + nev;
      kiir(udvozlet);
  }
});
