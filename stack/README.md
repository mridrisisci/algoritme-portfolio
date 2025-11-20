## *en stack implementeret med en enkelthægtet liste*

Du skal lave din egen Stack, implementeret med en (singly) linked list. Du skal ikke genbruge din SinglyLinkedList klasse og bygge oven på den, men lave en helt ny, selvstændig klasse. 

# Krav

Køen skal laves som én klasse `Stack`.

Klassen indeholder nodes - hver node er et objekt der linker til en anden node, og til et data-objekt. Du bestemmer selv om du også vil lave en klasse for den Node. 

Fordi stacken implementeres med en linked liste, kan den i princippet vokse uendeligt

<aside>
⛔

Du må ikke bruge hverken et JavaScript array med push, pop, shift, unshift eller et StaticArray med en stackpointer - det **skal** være en linked list!

</aside>

Klassen skal indeholde mindst en property

- `head` - som henviser til det øverste element i stacken, eller null hvis den er tom

Derudover skal den som minimum indeholde disse metoder

- `push( data )` - tilføjer en ny node, med reference til data-objektet, på toppen af stacken
- `pop()` - fjerner den node der ligger øverst på stacken, og returnerer det referede data-objekt
- `peek()` - returnerer data-objektet der ligger øverst på stacken, uden at fjerne det
- `size()` - fortæller hvor mange elementer der er i stacken
- `get( index )` - finder og returnerer elementet på plads ‘index’, hvor 0 er det øverste, uden at fjerne noget

# Anbefalet procedure

Det er en utrolig simpel datastruktur, så du kan sikkert implementere den uden at kigge på noget - men ellers, så tag udgangspunkt i din Queue, det er bemærkelsesværdigt tæt på.

Tip: Du kan måske endda “snyde” og bare tilføje push og pop til din Queue - men sørg alligevel for at have to forskellige klasser, mest for at vise hvor lidt kode der skal til.

# Aflevering

Koden skal afleveres som en del af din personlige datastruktur-portfolio - og portfolioen skal også indeholde et udfyldt datastruktur-skema - i **pdf** format.

## Hvordan

Lav en mappe til **`stack/`** og i den mappe laver du en `stack.js` fil der indeholder (og eksporterer) din klasse.

Hvis der er kode til at afprøve/teste, så læg det i sin egen fil i samme mappe.

Læg også det færdigudfyldte datastruktur-skema ind i mappen, med navnet `datastruktur-stack.pdf`

Aflevér et link direkte til `stack/` mappen på GitHub, som besvarelse på denne opgave.

## Hvornår

Så snart du har lavet den. 

## Feedback

Der gives ikke umiddelbart feedback på denne aflevering - så kig ved hinanden, hvis I er i tvivl om kvaliteten.