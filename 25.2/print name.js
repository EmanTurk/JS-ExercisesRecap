const Names ={
    name: "Tali",

    printNAME: function(){
        console.log(this.name);
        }
};
Names.printNameAfterASecond = function() {
    setTimeout(this.printNAME.bind(this),3000);
};
Names.printNAME(); 
Names.printNameAfterASecond(); 

