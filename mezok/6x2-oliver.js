mezo({
  vizszintes: 6,
  fuggoleges: 2,
  nev: ' Házikója',
  leiras: 'Kicsi házikó.',
  ralepeskor: function() {
    kiir("Oli házában vagy!");
  nev = kerdez("Mi a neved?");
  udvozlet = "Szia " + nev;
  kiir(udvozlet);
   szam = kerdez("Hány óra egy nap?");
   if (szam == 24) kiir("Helyes !");
   else kiir("Nem helyes!");
   
   }
   });
  
