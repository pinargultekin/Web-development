//E. Pinar Gultekin
//Demonstrate Typescript Library transpiling to Different ECMA Script versions

enum OscarWinners{
    JavierBardem,//2008, No Country for Old Man
    FrancesMcDormand,//2018, Three Billboards Outside Ebbing Missouri
    EmmaStone,//2017, La La Land
    }
    
    interface performer{
        pFullName: string;
        oscarYear: number;
        mName: string;
    }
    
    var pFullName: string = 'Javier Bardem',
        oscarYear: number = 2008,          
        mName: string = 'No Country for Old Man';
    
    var pFullName: string =  'Frances McDormand',
        oscarYear: number = 2018,
        mName: string = 'Three Billboards Outside Ebbing Missouri';
    
    var pFullName: string =  'Emma Stone',
        oscarYear: number = 2017,
        mName: string = 'La La Land';   
    
    
    
    class WinnersOf2017{
        Performer:any
        constructor(public pFullName: string, public oscarYear: number, public mName: string) 
        {
         this.Performer = + pFullName + " was awarded at the " + oscarYear + " Oscars for performance in " + mName + ".";
        }
    }
    
    function winner(performer:any) {
       return  performer.pFullName + " was awarded at the " + performer.oscarYear + " Oscars for performance in " + performer.mName +".";
    }
    
    let perf = new WinnersOf2017("Emma Stone", 2017, "La La Land");
    
    document.body.innerHTML = winner(performer);
    
