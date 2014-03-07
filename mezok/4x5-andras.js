mezo({
  vizszintes: 4,
  fuggoleges: 5,
  nev: 'andras',
  leiras: 'Cottage',
kep: 'terep.jpg',
ralepeskor: function() {
 kiir ("András házában vagy!");
 nev = kerdez("Szluka András vagyok! Mi a neved?");
udvozlet = "Szervusz " + nev;
 kiir(udvozlet);
   sz = kerdez("Hányszor írjam ki a neved?");
   for (szamlalo = 0; szamlalo < sz; szamlalo++) {
      kiir (nev);
    }
}
})

