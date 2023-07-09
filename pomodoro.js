var display_time = document.getElementById("display_time");
var session_time = document.getElementById("session_time");
var session_minus = document.getElementById("session_minus");
var session_plus = document.getElementById("session_plus");
var break_time = document.getElementById("break_time");
var break_minus = document.getElementById("break_minus");
var break_plus = document.getElementById("break_plus");
var pause_btn = document.getElementById("pause_btn");
var reset_btn = document.getElementById("reset_btn");


var hh = document.getElementById("hh");
var mm = document.getElementById("mm");
var ss = document.getElementById("ss");



var sess_time = 0;
session_plus.addEventListener("click", function () {
    sess_time++;
    session_time.innerText = sess_time +" min";
});
session_minus.addEventListener("click", function () {
    if (sess_time > 0) {
    sess_time--;
    session_time.innerText = sess_time +" min";
    }
    
});


var bre_time = 0;
break_plus.addEventListener("click", function () {
    bre_time++;
    break_time.innerText = bre_time +" min";
});
break_minus.addEventListener("click", function () {
    if (bre_time > 0) {
    bre_time--;
    break_time.innerText = bre_time +" min";
    }
    
});



var isRunning = false;
var min = 0;
var sec = 0;
var clockId = 0;
var pause = false;
var curr_bre = bre_time;

pause_btn.addEventListener("click", function () {
    
    isRunning = !isRunning;
    if (isRunning)
    {   
        if (!pause)
        {
            if (sess_time)
            {
                sec = 60;   
                min = sess_time - 1;    
            }
        
          
        }
       
     
        clockId = setInterval(function () {
            
                sec--;
            
            
            if (sec == 0)
            {  
                if (min > 0)
                {
                    min--;
                    sec = 59;  
                }
                else
                {  
                    
                    if (curr_bre > 0)
                    {   
                        if (curr_bre > 1)
                        {
                            sec = 60;
                            min = curr_bre - 1;
                            curr_bre = 0;  
                        }
                        else
                        {
                            sec = 60;
                            min = 0;
                            curr_bre = 0; 
                        }
                        
                    }
                    else
                    {
                        clearInterval(clockId);
                        isRunning = false;
                        pause_btn.innerText = "Start"; 
                    }
                  
                    
                }
                
            }
          
            mm.innerText = min;
            ss.innerText = sec;
        }, 1000);

        pause_btn.innerText = "Pause";
    }
    else
    {   
  
            clearInterval(clockId);
            mm.innerText = min;
            ss.innerText = sec;
            pause = true;
            pause_btn.innerText = "Start"; 
            
        
        
    }


    
});

reset_btn.addEventListener("click", function () {
    clearInterval(clockId);
    isRunning = false;
    curr_bre = bre_time;
    min = 0;
    sec = 0;
    pause = false;
    mm.innerText = min;
    ss.innerText = sec;
    pause_btn.innerText = "Start";
});



