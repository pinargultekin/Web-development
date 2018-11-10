//E. Pinar Gultekin
//Demonstrate Typescript Library transpiling to Different ECMA Script versions
var OscarWinners;
(function (OscarWinners) {
    OscarWinners[OscarWinners["JavierBardem"] = 0] = "JavierBardem";
    OscarWinners[OscarWinners["FrancesMcDormand"] = 1] = "FrancesMcDormand";
    OscarWinners[OscarWinners["EmmaStone"] = 2] = "EmmaStone";
})(OscarWinners || (OscarWinners = {}));
var pFullName = 'Javier Bardem', oscarYear = 2008, mName = 'No Country for Old Man';
var pFullName = 'Frances McDormand', oscarYear = 2018, mName = 'Three Billboards Outside Ebbing Missouri';
var pFullName = 'Emma Stone', oscarYear = 2017, mName = 'La La Land';
var WinnersOf2017 = /** @class */ (function () {
    function WinnersOf2017(pFullName, oscarYear, mName) {
        this.pFullName = pFullName;
        this.oscarYear = oscarYear;
        this.mName = mName;
        this.Performer = +pFullName + " was awarded at the " + oscarYear + " Oscars for performance in " + mName + ".";
    }
    return WinnersOf2017;
}());
function winner(performer) {
    return performer.pFullName + " was awarded at the " + performer.oscarYear + " Oscars for performance in " + performer.mName + ".";
}
var perf = new WinnersOf2017("Emma Stone", 2017, "La La Land");
document.body.innerHTML = winner(perf);
