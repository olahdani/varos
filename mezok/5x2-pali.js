mezo({
  vizszintes: 5,
  fuggoleges: 2,
  nev: 'Pali Házikó',
  leiras: 'kicsi házikó',
  ralepeskor: function() {
  kiir('Pali házára léptél és fájt neki');
  nev = kerdez("Mi a neved?");
  udvozlet = "Szia " + nev;
  szam = kerdez("Hányszor írja ki?");
  for (szamlalo = 0; szamlalo < szam; szamlalo++) {
      kiir("Minden nap programozni fogok");
    }
})
