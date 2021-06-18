//main save button fumction
function save_password() {

    var old = document.getElementById('old').value;
    var newPassVal = document.getElementById('new').value;
    document.getElementById('message').style.display='block';
    

    // Enter old and new password error show
    if(old == ""  || newPassVal =="" ){
        
        document.getElementById('message').style.display='block';
        document.getElementById('message').innerHTML='enter old and new passwords';
    }
    
    
    else if(old==localStorage.getItem("newPass")){
        
        
        
        localStorage.setItem("newPass", newPassVal);
        document.getElementById('message').innerHTML='password saved';
        document.getElementById('old').value='';
        document.getElementById('new').value='';
        document.getElementById('save').style.display='none';
        
        
    }
    else{
        
        document.getElementById('message').innerHTML='incorrect old password';
        
    }
  

}






document.getElementById('save').addEventListener('click',save_password);

