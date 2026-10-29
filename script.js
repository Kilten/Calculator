let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', ()=>{

        if(button.innerText === '='){
            calculateResult();
        }
        else if(button.innerText === 'DEL'){
            deletenum();
        }
        else if(button.innerText === 'AC'){
            allClear();
        }
        else{
            input.value += button.innerText;
        }
        
    })
})

function calculateResult(){
    let result = eval(input.value);
    input.value = result;
    
}

function deletenum(){
    input.value = input.value.slice(0, -1);
}

function allClear(){
    input.value = '';
}