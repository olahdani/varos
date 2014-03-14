Array.prototype.feldolgozas = function(iterator) {
  for (var i = 0, length = this.length; i < length; i++) {
    iterator.call(null, this[i], i, this);
  }
}

Array.prototype.keres = function(iterator) {
  for (var i = 0, length = this.length; i < length; i++) {
    if (iterator.call(null, this[i], i, this) === true) return this[i];
  }
}

mezolista.feldolgozas(function(nev) {
  fajlnev = "/mezok/" + nev + '.js';
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = fajlnev;
  document.body.appendChild(js);
})

// Ez az eljaras allitja be a jatekos alapertelmezett tulajdonsagait
function szereploBetolt(sz) {
  var mezo = document.createElement("div");
  mezo.classList.add('szereplo');
  mezo.style.backgroundImage = "url(/kepek/figura.png)";
  mezo.style.left = (sz.vizszintes * 64) + "px"
  mezo.style.top = (sz.fuggoleges * 64) + "px"
  document.body.appendChild(mezo);

  sz.mezo = mezo;

  return sz;
}

// Itt hivjuk meg a jatekos betolteset, es az 1x1 mezore helyezzuk.
szereplo = szereploBetolt({vizszintes: 1, fuggoleges: 1});


// Ez tolti be a mezo tulajdonsagait. Minden mezofajl meghivja ezt az eljarast.
alapKep = 'haz.png';
mezok = [];
function mezo(mezo) {
  var mezoDiv = document.createElement("div");
  mezoDiv.classList.add('mezo');
  mezoDiv.style.backgroundImage = "url(/kepek/" + (mezo.kep || alapKep) + ")";
  mezoDiv.style.left = (mezo.vizszintes * 64) + "px"
  mezoDiv.style.top = (mezo.fuggoleges * 64) + "px"
  document.body.appendChild(mezoDiv);
  mezo.div = mezoDiv;

  mezok.push(mezo)
}


// ***************************************************************************/
// JATEKOS IRANYITAS

// Figyeljuk a negy irany billentyut
document.onkeydown = function (e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    fel();
    lep();
  } else if (e.keyCode == '39') {
    jobbra();
    lep();
  } else if (e.keyCode == '40') {
    le();
    lep();
  } else if (e.keyCode == '37') {
    balra();
    lep();
  }
}

// Jatekos mozgasok
function balra() {
  szereplo.vizszintes -= 1;
  szereplo.mezo.style.left = szereplo.mezo.offsetLeft - 64 + "px";
}
function jobbra() {
  szereplo.vizszintes += 1;
  szereplo.mezo.style.left = szereplo.mezo.offsetLeft + 64 + "px";
}
function le() {
  szereplo.fuggoleges += 1;
  szereplo.mezo.style.top = szereplo.mezo.offsetTop + 64 + "px";
}
function fel() {
  szereplo.fuggoleges -= 1;
  szereplo.mezo.style.top = szereplo.mezo.offsetTop - 64 + "px";
}

// Uj mezore lepes eseten ez hivodik meg.
function lep() {
  var mezo = mezok.keres(function(m) {
    if (m.vizszintes == szereplo.vizszintes && m.fuggoleges == szereplo.fuggoleges) {
      return true
    }
  })
  if (mezo && typeof mezo.ralepeskor == 'function') {
    mezo.ralepeskor();
  }
}


function kerdez(kerdes, valaszKezelo) {
  vex.dialog.prompt({message: kerdes, callback: valaszKezelo})
}

function kiir(kiiras) {
  vex.dialog.alert(kiiras)
}

