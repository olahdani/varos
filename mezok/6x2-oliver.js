mezo({
  vizszintes: 6,
  fuggoleges: 2,
  nev: 'Oli   Házikója'
  leiras: 'Kicsi házikó'
  ralepeskor: function() {
  nev = kerdes ("Mi a neved?" );
  udvozlet = "Szia " + nev;
  kiir(udvozlet)
  szam = kerdez("Hány óra egy nap?");
  if (szam == 60)kiir(Helyes !");
  else kiir("Nem helyes !");
  }  
})
