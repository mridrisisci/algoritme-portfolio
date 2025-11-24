## Den første *sorterings*algoritme i din portfolio

Du skal lave en implementation af Insertion Sort og gemme i din [Algoritme-portfolio](https://www.notion.so/Algoritme-portfolio-2921d7fec097812c9dafeaf672b619f3?pvs=21) 

Insertion Sort kan implementeres på to forskellige måder: med **shift** eller **swap** - altså hvor de “forkert placerede” værdier enten trækkes ud, hvorefter alle korrekte værdier skubbes frem, og den “forkert placerede” værdi sættes ind på sin rette plads - eller hvor de “forkert placerede” værdier bytter plads med den foregående, indtil de har fundet den rette plads.

De to forskellige pseudokode beskrivelser på https://en.wikipedia.org/wiki/Insertion_sort viser forskellen - den første bruger en swap funktion, den anden shifter (og trækker “den forkerte værdi” ud i en midlertidig variabel.

Du vælger selv hvilken implementation du vil lave - vær opmærksom på præcis hvilken udgave, og skriv en kommentar i koden om hvilken du har lavet!

# Krav

- Funktionen skal hedde **`insertionSort( arr )`**og modtage et enkelt array.
- Funktionen skal eksporteres så den kan bruges af anden kode.
- Den skal sortere det modtagne array *in-place*, og også returnere det efter sortering.
- Funktionen skal tælle antal iterationer, altså hver gang en løkke udføres, skal der tælles en ekstra variabel én op.
- Den skal returnere et objekt med disse tre properties
    - `arr` - det nu sorterede array
    - `iterations` - antallet af iterationer
    - `sorted` - en boolean der fortæller om arrayet er sorteret eller ej

# Anbefalet procedure

Start med at hardcode et simpelt test-array med omkring ti værdier:

```jsx
const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
```

og brug det gennem hele din udvikling.

Følg pseudokoden vi udviklede i undervisningen - og start med at lave et loop der kører igennem alle elementer i arrayet. Det er det ydre loop - der tjekker om en værdi er korrekt sorteret, og hvis ikke, starter det indre loop.

Brug nogle gode variabelnavne - ofte bruger man `key` eller `x` til den værdi man kigger på (altså ikke indexet, men værdien) og `i` til det ydre loops index og `j` til det indre, men du er velkommen til at finde på nogle mere sigende navne.

<aside>
💡

Brug masser af `console.log` linjer gennem hele programmet - eventuelt også `console.group` for at vise om du er i det ydre eller indre loop.

Husk at hvis du skal klikke på det lille▸symbol for at se indholdet i arrayet, så viser det indholdet som det er **nu**, og ikke da det blev console.logget!

</aside>