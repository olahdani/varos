mezo({
  vizszintes: 2,
  fuggoleges: 8,
  nev: 'Gellért háza',
  leiras: 'Ez egy házikó',
  kep: 'haz-szgellert.png',
ralepeskor: function() {

    kiir("Szia! Gellért házában vagy.");
    
    
    var udvozlesUtan = function() {
      kerdezuj("Hany csokit kérsz?", kezelAlmaValasz);
    }

    var kezelAlmaValasz = function(valasz) {
      // Ciklus, haromszor hajtodik vegre
      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("csoki")
      }
    }
  //  kerdez("Hol dolgozol?");
  //  kiiruj("Hol dolgozól?", udvozlesUtan);
  
}
});
