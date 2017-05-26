# PRG04 Week6 oefening1

## Buggy Clock

Je ziet in game.ts dat er een klok wordt aangemaakt, en meteen weer verwijderd:

```
private clock:Clock;
     
constructor() {
    this.clock = new Clock();
    this.clock = undefined;
}
```

Echter, in de html pagina blijft de klok gewoon staan en doortellen. In de console kan je ook zien dat de klok blijft tellen.

### Opdracht

- Voeg een counter variabele toe aan clock.ts
- Na elke seconde hoog je de counter op met 1
- Schrijf een remove functie in clock.ts 
- Na 10 seconden roep je de remove functie aan
- De remove functie stopt de setInterval - zie voorbeeldcode
- De remove functie verwijdert het dom element
- De remove functie roept de stopGame functie aan in game.ts
- In game.ts wordt de variabele this.clock op undefined gezet

### Voorbeeldcode Timer uitzetten

```
private timerid: number;

// aan zetten
this.timerid = setInterval(()=>this.doSomething()));
   
// uit zetten
clearInterval(this.timerid);
```