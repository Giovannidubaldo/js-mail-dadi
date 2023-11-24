// Punto 1
const email = prompt('Inserisci la tua email');

// Punto 2
let email_list = ['ciccio@gmail.com', 'franco@libero.it', 
'pippo@hotmail.it', 'giovanni@gmail.com'];

// Punto 3.1
let flag = false;

for(let i=0; i<email_list.length; i++){
    if(email == email_list[i]){
        flag = true;
    }
}

if(flag == true){
    console.log('La mail è presente');
}
else{
    console.log('La mail inserita non è presente');
}