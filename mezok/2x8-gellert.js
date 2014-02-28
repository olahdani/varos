mezo({
  vizszintes: 2,
  fuggoleges: 8,
  nev: 'Gellért háza',
  leiras: 'Ez egy házikó'
ralepeskor: function() {

    // kerdez funkció feltesz egy kérdést a felhasználónak
    // A választ egy változóban mentjük el.
    nev = kerdez("Mi a neved?");

    // Ha hozzá szeretnénk tenni a változóhoz, egyszerűen hozzáadhatjuk.
    udvozlet = "Szia " + nev;

    // A kiir metódussal tudunk szöveget kiírni.
    kiir(udvozlet);

    szam = kerdez("Hány perc egy óra?");

    // if jelentése: ha
    if (szam == 60) kiir("Helyes !");
    // else jelentése: különben
    else kiir("Nem helyes!");
}
})
