var BookmarkNameInput = document.getElementById("BookmarkName");
var WebsiteURLInput = document.getElementById("WebsiteURL");
var addbtn = document.getElementById("addbtn");



var sitelist=[];



(function(){


  if(JSON.parse(localStorage.getItem("alltext") !== null)){

    sitelist = JSON.parse(localStorage.getItem("alltext"));

   displayTyp(sitelist);
  
  }
  
  
}

)();
// =============================
function addText(){

  if(validateForm(BookmarkNameInput)&& validateForm(WebsiteURLInput)){
    var site={
      name: BookmarkNameInput.value,
      url: WebsiteURLInput.value,
   } 
   sitelist.push(site);
   clearForm();

   localStorage.setItem("alltext",JSON.stringify(sitelist));

   displayTyp(sitelist);

  }
  else{
    document.getElementById("book").classList.replace("d-none","d-block");
  }

  

   
}
// =================
function clos(){
  document.getElementById("book").classList.replace( "d-block","d-none");
}
// =================
function clearForm(){
  BookmarkNameInput.value ="";
  WebsiteURLInput.value ="";
  BookmarkNameInput.classList.remove("is-valid");
  WebsiteURLInput
  
  
  
  
  
  
  
  
  .classList.remove("is-valid");


}

// =========================
function displayTyp(list){
  var blackBOX ="";

  for( var i=0 ; i<sitelist.length ; i++){
    console.log(sitelist[i].name);

    blackBOX +=`<tr>
                <th scope="row">${i +1}</th>
                <td>${list[i].name}</td>
                <td>
              <a href="${list[i].url}" target="_blank" class="btn btn-success"><i class="fa-solid fa-eye "></i>Visit
              
              </a>
                    </td>
    
                    <td>
                  <button class="btn btn-danger" onclick="delet(${i})"><i class="fa-solid fa-trash "></i>Delete</button>
                  
                    </td>
              </tr>
              `;

  }
  document .getElementById("web").innerHTML = blackBOX;
}
// ========================
function delet(deletIndex){

  
  // sitelist.splice(deletIndex,1);
  // displayTyp(sitelist);
  // localStorage.setItem("alltext", JSON.stringify(sitelist));


  // Swal.fire({
  //   title: "Good job!",
  //   text: "You delete the index!",
  //   icon: "error",
  // });

  

  

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      sitelist.splice(deletIndex,1);
  displayTyp(sitelist);
   localStorage.setItem("alltext", JSON.stringify(sitelist));


      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
 
}
// =====================
function validateForm(input){


  var regex={
    BookmarkName: /^\w{3,}(\s+\w+)*$/ ,
    WebsiteURL:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
  };

  var isvalid = regex [input.id].test(input.value);


  if (isvalid){
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

  }
  else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
  
  return isvalid;

}














































