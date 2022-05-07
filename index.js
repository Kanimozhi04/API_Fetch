var file="https://reqres.in/api/users";
async function getText(file) {
    let myObject = await fetch(file);
    const Api_data = await myObject.json();//storing the data in form of JSON
    //console.log(Api_data);
    displayData(Api_data.data);
   }
  getText(file);
  function displayData(Api_data){
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
       //closing the tab
       if (content.style.maxHeight)
       {
          content.style.maxHeight = null;
       }
       //opening the tab
       else 
       {
         for ( let j of tabs)
         {
            var otherContent = j.nextElementSibling;
            if (otherContent.style.maxHeight)
            {
               otherContent.style.maxHeight = null;
            }
         }
         content.style.maxHeight = content.scrollHeight + "px";
       } 
       i.classList.toggle("active");
   });
   }
  }
  
 
