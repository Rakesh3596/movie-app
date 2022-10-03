function login(e,p){    
    this.email=e;
    this.password=p;
}

let userData=JSON.parse(localStorage.getItem("userdata"))



function logindata(event){
    event.preventDefault();

    let form= document.querySelector("form");    
    let email= form.email.value;
    let password= form.pas.value;

    let nA= new login(email,password) 
    if(userData==null){
        alert("Please create an Account")
    }

    else if(userData.email!=nA.email && userData.password!=nA.password ){
        alert("invalid Credentials")
        
    }
        
    else if(nA.email===userData.email && nA.password===userData.password ){
            alert("login Succesfull")
            localStorage.setItem("logindata",JSON.stringify(userData));
            window.location.href="index.html"
        }    
    form.email.value = "";
    form.pas.value = "";
}
