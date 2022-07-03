const inpName = document.getElementById('name');
const inpEmail = document.getElementById('email');
const inpNumber = document.getElementById('number');
const textArea = document.getElementById('textarea');
const slectCar = document.getElementById('slectcar');
const btn = document.getElementById('btn')
let vlideDom = document.getElementById('vlide')
let nD = document.getElementById('n')

inpName.addEventListener('blur', function(e){
    let value = e.target.value;

    if(vlidateName(value)){
        value = e.target.value;
        vlideDom.style.display = 'none'
    }else{
        vlideDom.style.display = 'block'
        e.target.value = ' ';
    }
})
inpEmail.addEventListener('blur', function(e){
    let value = e.target.value;

    if(vlidateEmail(value)){
        value = e.target.value;
        // vlideDom.style.display = 'none'
    }else{
        // vlideDom.style.display = 'block'
        alert('rong')
        e.target.value = ' ';
    }
})
inpNumber.addEventListener('blur', function(e){
    let value = e.target.value;

    if(vlidateNumber(value)){
        value = e.target.value;
        nD.style.display = 'none'
    }
    else{
        nD.style.display = 'block'
        e.target.value = ' ';
    }
})

const vlidateName = function(name){
    const regex = /[a-zA-Z]{2,14}/.test(name);
    return regex
}
const vlidateEmail = function(email){
    const regex = /^\w+@[a-zA-Z]+?\.[a-zA-Z]/.test(email);
    return regex
}
const vlidateNumber = function(number){
    const num = /^[0-9]{11}$/.test(number)
    return num
}

let btnDom = document.getElementById('btn')
let value = 1
btnDom.addEventListener('click', function(){
    btnDom.innerHTML = value++
    console.log('clicked')
})