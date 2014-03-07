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
    kerdez1 = kerdez ("Hány éves vagy?");
    kerdez2 = kerdez ("Hanyadik osztályos vagy?");
    kerdez3 = kerdez ("Mi a kedvenc színed?");
    kerdez4 = kerdez ("Szeretsz iskolába járni?");
    kiir (kerdez1)
    kiir (kerdez2)
    kiir (kerdez3)
    kiir (kerdez4)
  }
  
});
  
