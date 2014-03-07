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
  szam = kerdez("Mennyi 8x8?");
   if (szam ==64 ) kiir("Helyes !");
  else kiir("Nem helyes!"); 
   szam = kerdez("Mennyi 1+1+1x7+1?");
   if (szam ==10 ) kiir("Helyes !");
  else kiir("Nem helyes!"); 
    szam = kerdez("Mennyi 200$ ?");
   if (szam ==40000 ) kiir("Helyes !");
  else kiir("Nem helyes!"); 
       szam = kerdez("Mi a kedvenc számom ?");
   if (szam ==88 ) kiir("Helyes !");
  else kiir("Nem helyes!"); 
  
    }
   });
  
