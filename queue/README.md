## *en kø implementeret med en enkelthægtet liste*

Du skal lave din egen Queue, implementeret med en (singly) linked list. Du skal ikke genbruge din SinglyLinkedList klasse og bygge oven på den, men lave en helt ny, selvstændig klasse. 

# Krav

Køen skal laves som én klasse `Queue`.

Klassen indeholder nodes - hver node er et objekt der linker til en anden node, og til et data-objekt. Du bestemmer selv om du også vil lave en klasse for den Node. 


Klassen skal indeholde mindst to properties

- `head` - som henviser til det forreste element i køen, eller null hvis den er tom
- `tail` - som henviser til det bageste element i køen, eller null hvis den er tom.

Derudover skal den som minimum indeholde disse metoder

- `enqueue( data )` - tilføjer en ny node, med reference til data-objektet, bagest i køen
- `dequeue()` - fjerner den node der ligger forrest i køen, og returnerer det referede data-objekt
- `peek()` - returnerer data-objektet der ligger forrest i køen, uden at fjerne det
- `size()` - fortæller hvor mange elementer der er i køen
- `get( index )` - finder og returnerer elementet på plads ‘index’, hvor 0 er det forreste, uden at fjerne noget

# Anbefalet procedure

Tag koden for din [datastruktur - Singly Linked List](https://www.notion.so/datastruktur-Singly-Linked-List-2921d7fec09781dc9ca8c39aed718cab?pvs=21) og se hvor meget du kan kopiere direkte - husk også at tilføje `tail`, og så burde du være meget hurtigt færdig.

# Aflevering

Koden skal afleveres som en del af din personlige datastruktur-portfolio - og portfolioen skal også indeholde et udfyldt datastruktur-skema - i pdf format.

## Hvordan

Lav en mappe til **`queue/`** og i den mappe laver du en `queue.js` fil der indeholder (og eksporterer) din klasse.

Hvis der er kode til at afprøve/teste, så læg det i sin egen fil i samme mappe.

Læg også det færdigudfyldte datastruktur-skema ind i mappen, med navnet `datastruktur-queue.pdf`

Aflevér et link direkte til `queue/` mappen på GitHub, som besvarelse på denne opgave.

## Hvornår

Så snart du har lavet den - du kommer jo til at bruge den i [Snake](https://www.notion.so/Snake-2921d7fec097810ab644e2f59ba769a2?pvs=21) afleveringen, så lav den bare helt færdig med det samme.

## Feedback

Der gives ikke umiddelbart feedback på denne aflevering - så kig ved hinanden, hvis I er i tvivl om kvaliteten.