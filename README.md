![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)

## Zadanie 2 - ES6
Podczas wykonywania tego zadania **nie używaj biblioteki React**.

Cel zadania to poprawne stworzenie klas i obiektów.

Stwórz klasę abstrakcyjną ```RPGCharacter```. Niech konstruktor tej klasy przyjmuje następujący parametr:
- ```name``` - imię

Dodatkowo niech konstruktor tworzy następujące właściwości dla każdego obiektu:
- ```power``` - siła,
- ```intelligence``` - inteligencja
- ```luck``` - szczęście

Na podstawie tej klasy stwórz 3 klasy dziedziczące: ```Dwarf```, ```Orc``` i ```Elf``` (czyli odpowiednio: Krasonolud, Ork oraz Elf).

Konstruktory tych klas powinny nadpisać konstruktor klasy abstrakcyjnej:
- wykorzystaj konstruktor klasy abstrakcyjnej aby ustawiać każdemu obiektowi imię (```name```),
- niech każda postać posiada określoną siłę (```power```) w zależności od rasy (wylosuj liczbę z odpowiedniego zakresu):
    * Krasnoludy - siła w zakresie od 40 - 100
    * Orki - siła w zakresie od 50 - 100
    * Elfy - siła w zakresie od 30 - 80   
- niech każda postać posiada określoną inteligencję (```intelligence```) w zależności od rasy (wylosuj liczbę z odpowiedniego zakresu):
     * Krasnoludy - mądrość w zakresie od 40 - 80
     * Orki - mądrość w zakresie od 5 - 20
     * Elfy - mądrość w zakresie od 60 - 100
- niech każda postać posiada określone szczęście (```luck```) w zależności od rasy (wylosuj liczbę z odpowiedniego zakresu):
     * Krasnoludy - szczęście w zakresie od 40 - 100
     * Orki - szczęście w zakresie od 1 - 100
     * Elfy - szczęście w zakresie od 20 - 100
- dodatkowo niech każda klasa odpowiednio ustawia piątą właściwość - rasę (```race```) na odpowiednią wartość (```Dwarf```, ```Orc``` lub ```Elf```) w zależności od klasy.

Następnie stwórz 3 obiekty na bazie klas dziedziczących i przekaż im następujące imiona: ```Durin Kamienny Topór``` (__krasnolud__), ```Urk'har Niszczyciel``` (__ork__), ```Naylee z Nieśmiertelnego Lasu``` (__elf__).

Na końcu dodaj do klasy abstrakcyjnej 3 metody:
- ```fight``` - metoda przyjmuje jako parametr obiekt stworzony na podstawie innej klasy. Zadaniem metody jest sprawdzenie, która z naszych postaci wygra w walce wręcz (porównujemy wartości właściwości ```power```). Metoda zwraca imię zwycięzcy. W przypadku remisu (każdy z zawodników nie ma siły walczyć) zwróć ciąg znaków ```Remis!```. 
- ```playChess``` - metoda przyjmuje jako parametr obiekt stworzony na podstawie innej klasy. Zadaniem metody jest sprawdzenie, która z naszych postaci wygra w grze w szachy (porównujemy wartości właściwości ```intelligence```). Metoda zwraca imię zwycięzcy. W przypadku remisu (partia szachów niemożliwa do skończenia) zwróć ciąg znaków ```Remis!```. 
- ```tossCoin``` - metoda przyjmuje jako parametr obiekt stworzony na podstawie innej klasy. Zadaniem metody jest sprawdzenie, która z naszych postaci wygra w rzucie monetą (porównujemy wartości właściwości ```luck```). Metoda zwraca imię zwycięzcy. W przypadku remisu (moneta spadła na krawędź) zwróć ciąg znaków ```Remis!```. 

Przykład:

```javascript
const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");

orc.fight(elf); // "Urk'har Niszczyciel" - gdyż akurat ten ork jest silniejszy do elfa
elf.playChess(dwarf) // "Naylee z Nieśmiertelnego Lasu" - gdyż akurat ten elf jest mądrzejszy od krasnoluda
dwarf.tossCoin(elf) // "Naylee z Nieśmiertelnego Lasu" - gdyż akurat ten elf ma więcej szczęścia niż krasnolud 
```