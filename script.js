let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // console.log(button.innerHTML);
        // console.log(button.innerText);

        if(e.target.innerHTML == '='){
            string = eval(string);
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
        }
        else if(e.target.innerHTML == 'DEL'){
             string = string.substring(0, string.length-1);
        }
        else{
            string = string + e.target.innerHTML;
        }
        input.value = string;
    })
})
