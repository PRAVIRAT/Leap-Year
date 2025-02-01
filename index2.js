let year;

$("button").on("click", 

    function leapYear(year){

        year = $(".yeear").val().trim();

        if (!year || isNaN(year)) {
            alert("Please enter a valid YEAR");
            $(".yeear").val("");
            return;
        }
       
        if(Number.parseInt(year)){

        if(year%4 === 0 && year%100 !== 0){
            $("h2").text("This Year "+ year +" is a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();
            $(".yeear").val(" ");
        }
        
        else if(year%4 === 0 && year%100 === 0 && year%400 === 0){
            $("h2").text("This Year "+ year +" is a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();  
            $(".yeear").val(" "); 
        }
        
        else if(year%4 === 0 && year%100 === 0 && year%400 !== 0){
            $("h2").text("This Year "+ year +" is not a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();   
            $(".yeear").val(" ");
        }
        
        else if(year%4 !== 0){
            $("h2").text("This Year "+ year +" is not a leap year").animate({opacity:2.25}).slideToggle().fadeToggle();  
            $(".yeear").val(" "); 
        }
    }

    else{
        alert("Please enter the YEAR");
        $(".yeear").val(" ");
    }
    }
);






