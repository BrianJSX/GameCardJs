
time = 5;
arr = [];
var cardList = document.querySelectorAll('.card');
var len = cardList.length;
console.log(cardList);
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
    time=5;
}
//cách 1:
cardList.forEach(function(card){
    card.addEventListener('click', function(){
        this.classList.add("open");
        var cardOpen = document.querySelectorAll('.open');
        const len = cardOpen.length;
        if(len == 1){
            this.classList.add(this.dataset.type);
        }else if(len >  1 && len <=2){
            this.classList.add(this.dataset.type);
            if(cardOpen[0].className == this.className){
                console.log(cardOpen);
            }else{
                
            }
        }
        console.log(cardOpen);
    });
});




