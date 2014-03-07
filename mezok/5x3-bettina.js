mezo({
  vizszintes: 4,
  fuggoleges: 4,
  nev: ' Betti Házikója',
  leiras: 'Kicsi házikó.',
  ralepeskor: function() {
    kiir("Bettina házában vagy!");
    
    nev = kerdez ("Mi a keresztneved?");
    udvozlet = "szia "+nev;
    kiir (udvozlet);
    kerdez1 = ("Hány éves vagy?");
    kerdez2 = ("Hanyadik osztályos vagy?");
    kerdez3 = ("Mi a kedvenc színed?");
    kerdez4 = ("Szeretsz iskolába járni?");
    kiir (kerdez1)
    kiir (kerdez2)
    kiir (kerdez3)
    kiir (kerdez4)
  }
  
});
  
