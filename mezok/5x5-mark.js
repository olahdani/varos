mezo({
  vizszintes: 3,
  fuggoleges: 8,
  nev: ' Márk Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz4.png',
  ralepeskor: function() {
    
   var udvozlesUtan = function() {
  kerdezuj("Hany almát szeretnél", kezelAlmaValasz);
   }
  
  var kezelAlmaValasz = function(valasz) {
    // Ciklus, haromszor hajtodik vegre
    for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
       kiiruj("Alma")
    }
  }

    kiiruj("Szia latogato!", udvozlesUtan);
  }

});



    
    
