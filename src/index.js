// 1
let totalTimeOne = 60;
let timeOne = totalTimeOne;
document.getElementById('firstTInput').textContent = `${totalTimeOne}`;
function halfTime(){
    timeOne --;
    if(timeOne === Math.floor(totalTimeOne/2)){
        console.log('halftime')
        document.getElementById('halfTime').textContent = `Половина часу вже пройшла!(Початковий час ${totalTimeOne})`;
    }
    if(timeOne === 0){
        clearInterval(halfTimeInterval);
        document.getElementById('halfTime').textContent = `Час вийшов!`;
    }
    console.log(timeOne);
    document.getElementById('firstTInput').textContent = `${String(timeOne).padStart(2, '0')}`;
}
const halfTimeInterval = setInterval(halfTime, 1000);
// 2


startBtn.classList.remove('animate');
startBtn.addEventListener('click', () =>{
    const startBtn = document.getElementById('startBtn');
    let totalSeconds = 30;
    let totalMs = totalSeconds * 1000;
    let countMs = totalMs;
    function timeEvents(){
        countMs -= 10;
        console.log(Math.floor(countMs/1000));
        document.getElementById('secondTInput').textContent = `${String(Math.floor(countMs/1000))}.${String(countMs % 1000).padStart(3, '0')}`;

        if(Math.floor(countMs/1000) === 10){
            startBtn.classList.add('animate');
        }
        if(countMs === 0){
            clearInterval(eventInterval);
            document.getElementById('secondTInput').textContent = `Час вийшов!`;
            startBtn.classList.remove('animate');
        }
    }
    const eventInterval = setInterval(timeEvents, 10);
});