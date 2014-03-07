mezo({
  vizszintes: 2,
  fuggoleges: 3,
  nev: 'Attila Házikója',
  leiras: 'Kicsi házikó.',
  kep: 'haz2.png',
  ralepeskor: function() {

    // kerdez funkció feltesz egy kérdést a felhasználónak
    // A választ egy változóban mentjük el.
    nev = kerdez("Mi a neved?");

    // Ha hozzá szeretnénk tenni a változóhoz, egyszerűen hozzáadhatjuk.
    udvozlet = "Szia " + nev;

    // A kiir metódussal tudunk szöveget kiírni.
    kiir(udvozlet);

    szam = kerdez("Hány éves vagy?");

    // if jelentése: ha
    if (szam > 80) kiir("Nem lehetsz ilyen öreg!");
    // else jelentése: különben
    else kiir("Nem helyes!");
  }
})

