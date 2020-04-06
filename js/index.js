var time = 5;
function timeshow(){
    time--;
    ss = time % 60;
    mm = Math.floor(time/60);
    document.getElementById("timer").innerHTML= mm+':'+ ss;
    if(mm == 0&&ss== 0){
        alert("Hết giờ");
        stopTime();
    }
}
function startTime(){
     timeInterval = setInterval(this.timeshow,1000);
}
function stopTime(){
    clearInterval(timeInterval);
}


