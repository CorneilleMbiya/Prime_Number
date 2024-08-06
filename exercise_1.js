
let click_me = document.getElementById(`Find`);
let show_me = document.getElementById(`Next`);

click_me.onclick = function(){
    let number = document.getElementById(`prime`).value;
    number = Number(number);
    number = number + 1;
    while (number > 2) {
        if (number % 2 === 0){
            number++;
        }
        else if (number % 3 === 0){
            number++;
        }
        else if (number % 5 === 0){
            number++;
        }
        else if (number % 7 === 0){
            number++;
        }else {
            show_me.textContent = number;
            break
        }
    }
}










