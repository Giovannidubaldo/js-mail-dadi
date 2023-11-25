
let email_list = ['ciccio@gmail.com', 'franco@gmail.com', 
'pippo@gmail.com', 'giovanni@gmail.com'];

let button = document.getElementById('send')

button.addEventListener('click', function(){

    let email = document.getElementById('email').value;
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
})


