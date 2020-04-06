var time = 121;
function startTime(){
    time--;
    ss = time % 60;
    mm = Math.floor(time/60);
    document.getElementById("timer").innerHTML= mm+':'+ ss;
}
function setIntervalTime(){
    setInterval(this.startTime,1000);
}


