var houseKeeper1 = {
    yearsOfExp : 12,
    name : "Jane",
    cleaningReport : ["bathroom","lobby","bedroom"]

};

function HouseKeeper(yearsOfExp,name,cleaningReport)
{
    this.yearsOfExp = yearsOfExp;
    this.name  = name;
    this.cleaningReport = cleaningReport;
}

function BellBoy(name , age, hasWorkPermit, languages)
{
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitCase = function()
    {
        alert("May I take your suitcase?");
        pickUpSuitCase();
        moveBy();
    }
    this. clean = function()
    {
        alert*('I am cleaning');
    }
}