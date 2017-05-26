/**
 * Clock
 */
class Clock {
    
    private div: HTMLElement;
    
    constructor() {

        this.div = document.createElement("clock");
        document.body.appendChild(this.div);
        
        this.showTime();
        setInterval(()=>this.showTime(), 1000);
    }
    
    private showTime() : void {
        var today = new Date();
        var h:number = today.getHours();
        var m:number = today.getMinutes();
        var s:number = today.getSeconds();
        // een 0 plaatsen voor getallen kleiner dan 10
        this.div.innerHTML = this.addZero(h) + ":" + this.addZero(m) + ":" + this.addZero(s);
        
        console.log("Seconden " + this.addZero(s));

        //
        // NA 10 SECONDEN ROEP JE DE STOP FUNCTIE AAN
        // - stop de timer
        // - verwijder het dom element
        // - roep de stopGame functie aan in game.ts
        // - in game.ts wordt de variabele this.clock op undefined gezet
        // 
    }
    
    private addZero(i:number):string {
        return (i < 10) ? "0" + i : i.toString();
    }

}