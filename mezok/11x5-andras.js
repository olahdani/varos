mezo({
  vizszintes: 11,
  fuggoleges: 5,
  nev: 'andras',
  leiras: 'X',
kep: 'haz2.png',
ralepeskor: function() {

  var udvozlesUtan = function() {
    kerdezuj("Alszol nálam?", valaszKezelo);
  }

  var valaszKezelo = function(valasz) {
    if (valasz == "igen") {
      kiiruj ("Oké! ZzZzzZZ.");
    }
    else if (valasz == "nem") {
      kiiruj ("Jó, de én mentem aludni. ZzZzzZZ.");
    }
  }

  kiiruj("Itt vagy nálam", udvozlesUtan);
}})
