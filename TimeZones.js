var continentName,con,placeName,place;
function selectedContinent(){
    continentName = document.getElementById("continent");
    con = continentName.options[continentName.selectedIndex].text;
 
    
}

function selectedPlace(){
     placeName = document.getElementById("place");
     place = placeName.options[placeName.selectedIndex].text;
}

var  getTimeZone = function (){
    var arg = con + '/' + place;
    try{
    document.getElementById("result").innerHTML = new Date().toLocaleString("en-IN", {timeZone:arg,timeStyle:'full',hourCycle:'h11'});
    }
    catch(err){
        document.getElementById("result").innerHTML = "Enter Correct TimeZones"
    }
    let t = setTimeout(function(){ getTimeZone() }, 1000);
   
}
// let a = [1,2,3]
// let x = a.join("|")
// console.log(x)
let x = new Boolean()
console.log(x)


getTimeZone()