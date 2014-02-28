mezo({
  vizszintes: 4,
  fuggoleges: 4,
  nev: ' Betti Házikója',
  leiras: 'Kicsi házikó.',
  ralepeskor: function() {
    kiir("Bettina házában vagy!");
    
    nev = kerdez ("Mi a keresztneved?");
    udvozlet = "szia"+nev;
    kiir (udvozlet);
    
  }
  
});
  
