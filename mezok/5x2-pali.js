mezo({
  vizszintes: 5,
  fuggoleges: 2,
  nev: 'Pali Házikó',
  leiras: 'kicsi házikó'
  ralepeskor: function() {
  kiir('Pali házára léptél és fájt neki');
  nev = kerdez("Mi a neved?");
  udvozlet = "Szia " + nev;
  kiir(udvozlet);
  szam = kerdez("Hány éves vagy");
  if (szam > 80) kiir("Nem lehetsz ilyen idős!");
  else kiir("nem helyes!");
  }
  
})
