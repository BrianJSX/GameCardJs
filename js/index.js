time = 5;
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
    card.classList.toggle(this.dataset.type); 
    });
});
//cách 2:
// for (i=0;i<=len;i++){
//     cardList[i].addEventListener('click',function(){
//         this.classList.toggle(this.dataset.type);
//     });
// }



