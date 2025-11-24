## Endnu en sorteringsalgoritme i din portfolio

Du skal lave en implementation af Merge Sort og gemme i din [Algoritme-portfolio](https://www.notion.so/Algoritme-portfolio-2921d7fec097812c9dafeaf672b619f3?pvs=21) 

Det skal være en rekursiv implementation der tager udgangspunkt i din [merge](https://www.notion.so/merge-2921d7fec09781e18e27d12ab1856646?pvs=21) funktion fra den foregående øvelse.

Husk definitionen på mergesort:

<aside>
<img src="/icons/merge_gray.svg" alt="/icons/merge_gray.svg" width="40px" />

1. Hvis et array kun indeholder et enkelt element - eller er helt tomt - så er det allerede sorteret, og skal blot returneres uforandret.
2. Ellers skal arrayet deles i to - nogenlunde lige store - dele.
3. De to dele skal så hver især sorteres - rekursivt med mergeSort
4. De to sorterede dele skal så merges
5. og det samlede, mergede, array returneres
</aside>

Husk også at merge sort **ikke** er *in-place*, så det er vigtigt at modtage og bruge de returnerede arrays fra den rekursivt kaldte funktion.

# Krav

- Funktionen skal hedde `mergeSort` og modtage ét usorteret array.
- Den funktion skal eksporteres.
- Funktion skal anvende en ekstern `merge` funktion til at samle to (sorterede) arrays til ét.
- Den funktion behøver du ikke eksportere - men du må gerne have den i sin egen fil, hvis det giver mening for dig.
- Funktionerne skal tælle iterationer - både i antal kald til mergeSort, og i antal “loops” i merge.
- mergeSort skal returnere et objekt med mindst disse tre properties
    - `arr` - det nu sorterede array (ikke det samme som der blev modtaget)
    - `iterations` - antallet af iterationer (rekursioner OG loops)
    - `sorted` - en boolean der fortæller om arrayet er sorteret eller ej

# Anbefalet procedure

Vær sikker på at din merge funktion fungerer, før du går i gang med merge sort.

Som altid, brug et lille, hardcoded, usorteret array til alle tests.

Udskriv masser af console.log undervejs - fordi det er rekursivt vil du få stor glæde af console.group! 

Se eventuelt bort fra iterations-tælleren, før du får sorteringen til at virke - kan du ikke overskue at sende iterations frem og tilbage mellem rekursionerne, så brug en global variabel! Bare det virker én gang!

Brug for eksempel `.slice` til at halvere et array - i denne opgave går vi ud fra at den har en $O(1)$, også selv om det muligvis ikke forholder sig sådan i virkeligheden.