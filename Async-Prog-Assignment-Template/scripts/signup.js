function user(n,c,e,p){
    this.name=n;
    this.contact=c;
    this.email=e;
    this.password=p
}

let arr=JSON.parse(localStorage.getItem("userdata")) || [];



function userdata(event){
    event.preventDefault();

    let form= document.querySelector("form");
    let name = form.name.value;
    let con= form.nu.value;
    let email= form.email.value;
    let password= form.pas.value;

    let nA= new user(name,con,email,password)

    // arr.push(nA);

    localStorage.setItem("userdata", JSON.stringify(nA))
    console.log(arr)    


    form.name.value="";
    form.nu.value= "";
    form.email.value = "";
    form.pas.value = "";

    window.location.href= "login.html"





}