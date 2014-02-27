Array.prototype.feldolgozas = function(iterator) {
  for (var i = 0, length = this.length; i < length; i++) {
    iterator.call(null, this[i], i, this);
  }
}

mezolista.feldolgozas(function(nev) {
  fajlnev = "/mezok/" + nev + '.js';
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = fajlnev;
  document.body.appendChild(js);
})

szereplo = szereploBetolt({vizszintes: 1, fuggoleges: 1});

alapKep = 'haz.png';
mezok = [];
function mezo(opciok) {
  var mezo = document.createElement("div");
  mezo.classList.add('mezo');
  mezo.style.backgroundImage = "url(/kepek/" + (opciok.kep || alapKep) + ")";
  mezo.style.left = (opciok.vizszintes * 64) + "px"
  mezo.style.top = (opciok.fuggoleges * 64) + "px"
  document.body.appendChild(mezo);
  mezok.push({mezo: mezo, vizszintes: vizszintes, fuggoleges: fuggoleges})
}

function szereploBetolt(opciok) {
  var sz = {};

  var mezo = document.createElement("div");
  mezo.classList.add('szereplo');
  mezo.style.backgroundImage = "url(/kepek/szereplo.png)";
  mezo.style.left = (opciok.vizszintes * 64) + "px"
  mezo.style.top = (opciok.fuggoleges * 64) + "px"
  document.body.appendChild(mezo);

  sz.mezo = mezo;

  return sz;
}

document.onkeydown = function (e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    fel(szereplo);
    lep(szereplo);
  } else if (e.keyCode == '39') {
    jobbra(szereplo);
    lep(szereplo);
  } else if (e.keyCode == '40') {
    le(szereplo);
    lep(szereplo);
  } else if (e.keyCode == '37') {
    balra(szereplo);
    lep(szereplo);
  }
}

function balra(szereplo) {
  szereplo.mezo.style.left = szereplo.mezo.offsetLeft - 64 + "px";
}
function jobbra(szereplo) {
  szereplo.mezo.style.left = szereplo.mezo.offsetLeft + 64 + "px";
}
function le(szereplo) {
  szereplo.mezo.style.top = szereplo.mezo.offsetTop + 64 + "px";
}
function fel(szereplo) {
  szereplo.mezo.style.top = szereplo.mezo.offsetTop - 64 + "px";
}


function lep(szereplo) {
  // Itt folytatjuk!
}

