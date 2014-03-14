mezo({
  vizszintes: 10,
  fuggoleges: 5,
  nev: 'András',
  leiras: 'Cottage',
kep: 'figura.png',
ralepeskor: function() {
 kiir ("Üdv idegen!");
 nev = kerdez("Mi a neved?");
   kiir("Szia, ") +nev ("!");
   kiir ("Gondolj egy számra! (1-től-10-ig)");
   sz = kerdez ("Kisebb mint 10? (Ezeket írhatod: igen ; nem ;)");
    if (sz = igen) {
      sz = kerdez ("Kisebb mint 9?");
       if (sz = igen) {
         sz = kerdez ("Kisebb mint 8?");
          if (sz = igen) {
            sz = kerdez ("Kisebb mint 7?");
                      }
          else (sz = ("nem"))("Te a 8-es számra gondoltál!")
                      }          
       else (sz = ("nem"))("Te a 9-es számra gondoltál!")
                   }
    else (sz = ("nem"))("Te a 10-es számra gondoltál!")
}
})

