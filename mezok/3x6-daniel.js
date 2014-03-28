mezo({
  vizszintes: 3,
  fuggoleges: 6,
  nev: 'Dani Háza',
  leiras: 'Kicsi házikó.',
  kep: 'haz3.png',
 ralepeskor: function() {

    kiir("Helló! Dani házában vagy!");
    
    nev = kerdez("Mi a neved?");

   
    udvozlet = "Helló " + nev;
    
    var udvozlesUtan = function() {
      kerdezuj("Hány narancsot kérsz?", kezelNarValasz);
    }

    var kezelNarValasz = function(valasz) {

      for (szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("Narancs")
      }
    }


  }
});
