let valor,
    conta,
    visor,
    history,
    finish = false;

function showDisplay(v){
    visor = document.querySelector("[data-display]");
    if(visor.textContent == "0" || finish == true){
        visor.innerHTML = v;
        finish = false;
    }else{
        visor.innerHTML += v;
    }
}
function clearDisplay(){
    visor = document.querySelector("[data-display]");
    visor.innerHTML = "0";
}
function clearHistory(){
    visor = document.querySelector("[data-history]");
    visor.innerHTML = "";
}
function showHisotry(v){
    history = document.querySelector("[data-history]");
    history.innerHTML += v;
}
function doAction(v){
    auxValor = document.querySelector('[data-display]').textContent;
    auxValor += v;
    showHisotry(auxValor);
    clearDisplay();
}
function doCalculate(){
    history = document.querySelector("[data-history]").textContent;
    visor = document.querySelector("[data-display]").textContent;
    conta = `${history}${visor}`;
    console.log(conta);
    clearDisplay();
    clearHistory();
    showDisplay(eval(conta));
    finish = true;
}

document.querySelectorAll("[data-value]").forEach(button=>{
    button.addEventListener('click', (e)=>{
        showDisplay(e.target.dataset.value);
    });
});
document.querySelectorAll("[data-action]").forEach(button=>{
    button.addEventListener('click', (e)=>{
        doAction(e.target.dataset.action);
    });
});

document.querySelector('[data-execute]').addEventListener('click', ()=> doCalculate());