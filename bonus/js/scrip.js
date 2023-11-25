
let email_list = ['ciccio@gmail.com', 'franco@gmail.com', 
'pippo@gmail.com', 'giovanni@gmail.com'];

let button = document.getElementById('send');

button.addEventListener('click', function(){

    let email = document.getElementById('email').value;
    let message = document.getElementById('message');
    let flag = false;

    for(let i=0; i<email_list.length; i++){
        if(email == email_list[i]){
            flag = true;
        }
    }
    
    if(flag == true){
        document.getElementById('message').innerHTML = 'Email inserita correttamente. Ora puoi tirare i dadi!'
    }
    else{
        document.getElementById('message').innerHTML = 'Mi dispiace, l\'email che hai inserito non è corretta. Riprova...'
    }
})


