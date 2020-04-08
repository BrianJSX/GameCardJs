
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
        let openCard = document.querySelectorAll(".open");
        let len = openCard.length;
        if(len < 2){
            this.classList.add(card.dataset.type,"open");
            arr.push(card.classList[3]);
            if(arr[0] == arr[1]){
                console.log("true");
            }else{
                console.log("false"); 
            }
        }
        
    });
});




