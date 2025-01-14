let year;

$("button").on("click", 

    function leapYear(year){

        year = $(".yeear").val();
       
        if(year){

        if(year%4 === 0 && year%100 !== 0){
            $("h2").text("This Year "+ year +" is a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();
        }
        
        else if(year%4 === 0 && year%100 === 0 && year%400 === 0){
            $("h2").text("This Year "+ year +" is a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();   
        }
        
        else if(year%4 === 0 && year%100 === 0 && year%400 !== 0){
            $("h2").text("This Year "+ year +" is not a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();   
        }
        
        else if(year%4 !== 0){
            $("h2").text("This Year "+ year +" is not a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();   
        }
    }

    else{
        alert("Please enter the YEAR");
    }
    }
);






