let email_list = ['ciccio@gmail.com', 'franco@gmail.com', 
'pippo@gmail.com', 'giovanni@gmail.com'];

let btn_email = document.getElementById('send');

btn_email.addEventListener('click', function(){

    let email = document.getElementById('email').value;
    let message = document.getElementById('message');
    let flag = false;

    for(let i=0; i<email_list.length; i++){
        if(email == email_list[i]){
            flag = true;
        }
    }
    
    if(flag == true){
        document.getElementById('message').innerHTML = 'Email inserita correttamente. Ora puoi tirare i dadi!';
        
        let btn_dadi = document.getElementById('btn_dadi');

        btn_dadi.style.display = 'block';

        btn_dadi.addEventListener('click', function(){
            let giocatore = Math.round(Math.random()*5 + 1);
            let computer = Math.round(Math.random()*5 + 1);

            document.getElementById('player').innerHTML = 'Il tuo dado : ' + giocatore;
            document.getElementById('computer').innerHTML = 'Computer : ' + computer;

            if(giocatore > computer){
                document.getElementById('win').innerText = 'Complimenti! HAI VINTO!';
            }
            else if(giocatore == computer){
                document.getElementById('x').innerText = 'PAREGGIO! Riprova';
            }
            else{
                document.getElementById('defeat').innerText = 'Oh no...hai perso...prova a ribattere il computer!';
            }
            
        })
    }
    else{
        document.getElementById('message').innerHTML = 'Mi dispiace, l\'email che hai inserito non è corretta. Riprova...';
    }
})


