mezo({
  vizszintes: 4,
  fuggoleges: 4,
  nev: ' Betti Házikója',
  leiras: 'Kicsi házikó.',
 // ralepeskor: function() {
   // kiir("Bettina házában vagy!");
    
    //nev = kerdez ("Mi a keresztneved?");
    //udvozlet = "szia "+nev;
   // kiir (udvozlet);
    //kerdez1 = kerdez ("Hány éves vagy?");
   // kerdez2 = kerdez ("Hanyadik osztályos vagy?");
    //kerdez3 = kerdez ("Mi a kedvenc színed?");
    //kerdez4 = kerdez ("Szeretsz iskolába járni?");
    
     ralepeskor: function() {

    var udvozlesUtan = function() {
      kerdezuj("Hányszor írjam ki hogy neumann clubban vagy ?", kezelAlmaValasz);
    }

    var kezelAlmaValasz = function(valasz) {
      // Ciklus, haromszor hajtodik vegre
      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("neumann clubban vagy")
      }
    }

    kiiruj("Szia behatoló!", udvozlesUtan);
    
    
    
    
  }
});
