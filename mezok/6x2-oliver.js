mezo({
  vizszintes: 6,
  fuggoleges: 2,
  nev: 'Olivér Házikója',
  leiras: 'Kicsi házikó.', 
  kep: 'haz-oliver.png',
  ralepeskor: function() {  
    kiir ("Szia Oli Múzeumába vagy.");
    
    var udvozlesUtan = function() {
      kerdezuj("Hanyszor irjam le hogy mindennap programozni fogok?", kezelMindennap programozni fogokValasz);
    }

    var kezelBananValasz = function(valasz) {
      // Ciklus, haromszor hajtodik vegre 
      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("mindennap programozni fogok")
      }
    }     

    kiiruj("Szia latogato!", udvozlesUtan);
  }
})
      
        
 
 
   
 
            
