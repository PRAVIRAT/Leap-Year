function isLeap(year) {
    
    if(year%4===0 && year%100!==0){
        alert("Leap year.");
    }
    
    else if(year%4===0 && year%100===0 && year%400===0){
        alert("Leap year.");
    }
   else if(year%4!==0 || year%400!==0){
        alert("Not leap year.");
    }
}

isLeap(2192);