
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
        let classCard = card.classList[0]
        let cardfirst = document.querySelectorAll('.'+classCard);
        var cardOpen = document.querySelectorAll('.open');
        let len = cardOpen.length;
        if(len == 1){
            this.classList.add(this.dataset.type);
        }else if(len >  1 && len <=2){
            this.classList.add(this.dataset.type);
                if(cardOpen[0].className == cardOpen[1].className){
                    console.log('ok');
                }else{
                    console.log("false");
                }
              

        }
        
    });
});




