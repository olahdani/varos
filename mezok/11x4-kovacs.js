mezo({
  vizszintes: 11,
  fuggoleges: 4,
  nev: 'andrask',
  leiras: 'k',
  kep: 'haz3.png',
ralepeskor: function() {
  v = 0;
  M = 30;
 kiir (M)("$-os van.");
 kiir ("Jónapot!");
  e = kerdez("Veszel egy vasrudat?");
    if (e == "igen"){
      kiir ("Köszönöm!");
        M = M - 5;
      kiir M("$-od maradt.");
    v = v + 1;
    }
    if (e == "nem") {
      kiir ("Rendben, remélem máskor veszel!");
    }
    kiir (v);
}
})
