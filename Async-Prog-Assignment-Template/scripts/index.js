let  logi= JSON.parse(localStorage.getItem('logindata'));
    let user=document.querySelector("#me");
    let out=document.querySelector("#out");

    if(logi != null){
        user.innerText =logi.name;
        out.innerText= "Log Out"
           
    }


let i=0;
let id;
function start(){
    let arr=[
        {img : "https://images.unsplash.com/photo-1635805737707-575885ab0820?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500"},
        { img : "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
        { img : "https://images.unsplash.com/photo-1596727147705-61a532a659bd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
        {img : "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"}
    ]

    

    let container =document.getElementById('slideshow')
    if(i==0){
    let im=document.createElement("img");
    im.src=arr[0].img;
    container.append(im);
    i++;
    }


    id=setInterval(function(){
        if(i==arr.length){
            i=0;
        }

        container.innerHTML=null;


       
        let image= arr[i].img;

        let im=document.createElement("img");
        im.src=image;
        container.append(im);
        i++;

    },3000)

  }  

    function pause(){      

        clearInterval(id)
    }

    let moviData=[
        {
            name: "Jumanji",
            img : "https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            date: "28-may-22",
            rate: 4
        },
        {
            name: "Black Spidy",
            img : "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
            date: "28-may-22",
            rate: 3
        },
        {
            name: "Capten America",
            img : "https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
            date: "28-may-22",
            rate: 5
        },
        {
            name: "Iron man",
            img : "https://images.unsplash.com/photo-1569002848204-08cf7f5f7e02?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
            date: "28-may-22",
            rate: 6
        },
        {
            name: "Jumanji",
            img : "https://media.istockphoto.com/photos/cruel-brutal-heated-kidnapper-torturing-a-hostage-picture-id656838890?k=20&m=656838890&s=170667a&w=0&h=X88BnjYQ1TsKLGXdYt4dKp7EenpAlqsTybDYprhmGJ8=",
            date: "28-may-22",
            rate: 6.5
        },
        {
            name: "Jumanji",
            img : "https://images.unsplash.com/photo-1548103550-603e712c899a?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
            date: "28-may-22",
            rate: 8.1
        },
        {
            name: "Jumanji",
            img : "https://images.unsplash.com/photo-1537913454156-7c2b060a76e8?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
            date: "28-may-22",
            rate: 8
        },
        {
            name: "Jumanji",
            img : "https://images.unsplash.com/photo-1535648451240-482a0bbd6e02?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
            date: "28-may-22",
            rate: 9
        },
        {
            name: "Jumanji",
            img : "https://images.unsplash.com/photo-1613276017067-ef618366152a?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
            date: "28-may-22",
            rate: 9
        }
    ]

    localStorage.setItem("movies", JSON.stringify(moviData))

    let movie=document.querySelector("#movies")


    function displayData(data){
        movie.innerHTML=null;

        data.forEach(function(elem) {
            let card= document.createElement("div");
            card.setAttribute("id", "card")

            let img= document.createElement("img");
            img.src=elem.img

            let name= document.createElement("h2");
            name.textContent=elem.name;

            let date= document.createElement("p");
            date.textContent=elem.date;

            let rate= document.createElement("h3");
            rate.textContent=elem.rate;          
            

            let star= document.createElement("div");
            let st1=document.createElement("span")
            st1.innerText="★";
            st1.style.color="gold"
            

            let st2=document.createElement("span")
            st2.innerText="★";
            st2.style.color="gold"

            let st3=document.createElement("span")
            st3.innerText="★";
            st3.style.color="gold"
            let st4=document.createElement("span")
            st4.innerText="★";
            st4.style.color="gold"
            let st5=document.createElement("span")
            st5.innerText="★";
            st5.style.color="black"
            star.append(st1,st2,st3,st4,st5)          


            card.append(img,name,date,rate,star);
            movie.append(card);            
        });

    }

    displayData(moviData);

    function rateSort(){
        var selected= document.querySelector('#ratefilter').value;
        if(selected=="none") {
            displayData(moviData);
              
          }
        else if(selected=="lth"){
            moviData.sort(function(a, b){
          return a.rate-b.rate;               
        });
        displayData(moviData);
      }
  
        else if(selected=="htl"){
            moviData.sort(function(a, b){
          return b.rate-a.rate;                
        });
        displayData(moviData);
      }

      
      }














