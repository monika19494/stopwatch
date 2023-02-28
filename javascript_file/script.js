let start_button = document.getElementById("start");
let pause_button = document.getElementById("pause");
let reset_button = document.getElementById("reset");
let cast_button = document.getElementById("cast");

let hr = 00;
let min = 00;
let sec = 00;
let milisec = 000;

start_button.addEventListener("click", function() {
    count_down = true;
    run();
});

pause_button.addEventListener("click", function() {
    count_down  = false;
});

reset_button.addEventListener("click", function() {
    count_down  = false;
    hr=0;
    min=0;
    sec=0;
    milisec=0;

    document.getElementById("hour").innerHTML= "00";
    document.getElementById("minutes").innerHTML= "00";
    document.getElementById("seconds").innerHTML= "00";
    document.getElementById("millisec").innerHTML= "000";
})


 
function run() {
    if(count_down ) {
        milisec++;

        if(milisec==1000) {
            sec++;
            milisec=0;
        }
        if(sec==60) {
            min++;
            sec=0;
        }
        if(min==60) {
            hr++;
            min=0;
            sec=0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let milisecString = milisec;
        if(hr<10){
            hrString = "0" + hrString;
        }
        if(min<10){
            minString = "0" + minString;
        }
        if(sec<10){
            secString = "0" + secString;
        }
        if(milisec<10){
            milisecString = "0" + milisecString;
        }
     document.getElementById("hour").innerHTML=hrString;
     document.getElementById("minutes").innerHTML=minString;
     document.getElementById("seconds").innerHTML=secString;
     document.getElementById("millisec").innerHTML=milisecString;

     setTimeout(run, 10);
    
    
    }
}
cast_button.addEventListener("click", function() {
    count_down  = false;
    
    document.getElementById("casting").innerHTML= "Cast1: "+ hrString + minString + secString + milisecString;
});
