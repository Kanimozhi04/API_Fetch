var file="https://reqres.in/api/users";
async function getText(file) {
    let myObject = await fetch(file);
    const Api_data = await myObject.json();//storing the data in form of JSON
    //console.log(Api_data);
    displayData(Api_data.data);
   }
  getText(file);
  function displayData(Api_data){
   //  var collapseTab=document.createElement("button");
   //  collapseTab.setAttribute("class","collapseTab");
   //  var myContent=document.createElement("div",);
   //   myContent.setAttribute("class","content");
   var All_tab="";
     for(let i=0;i<Api_data.length;i++){
        let collapseTab=
         `<button class="collapseTab">${Api_data[i].first_name}</button>
            <div class="content">
            <img class ="image" src="${Api_data[i].avatar}" alt="image_1"/>
            <div class="collapse_details">
               <h3>First Name : ${Api_data[i].first_name}</h3>
               <h3>Last Name  : ${Api_data[i].last_name}</h3>
               <h3>Email      : ${Api_data[i].email}</h3>
            </div>

            </div>`
        All_tab+=collapseTab;
     }
     document.querySelector(".result").innerHTML=All_tab;
     AddEvent();
  }
  function AddEvent(){
   const tabs = document.querySelectorAll(".collapseTab");
   for ( let i of tabs) {
   i.addEventListener("click", function() {
       var content = i.nextElementSibling;
       if (content.style.maxHeight)
       {
          content.style.maxHeight = null;
       }
       else 
       {
         content.style.maxHeight = content.scrollHeight + "px";
       } 
       i.classList.toggle("active");
   });
   }
  }
  
 