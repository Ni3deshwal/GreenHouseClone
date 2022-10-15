document.querySelector("form").addEventListener("submit",fun);
function fun(event){
  event.preventDefault();
  var email=document.querySelector("#email").value;
  var firstname=document.querySelector("#firstname").value;
  var lastname=document.querySelector("#lastname").value;
  var batch=document.querySelector("#batch");

  if(email=="" || firstname== '' || lastname== ''|| team==''){
        alert("Check field something is missing");
    }
    else{
        alert("Successfully submited");
        window.location.href="index.html";
    }
    document.querySelector("#email").value="";
  document.querySelector("#firstname").value="";
 document.querySelector("#lastname").value="";
  document.querySelector("#batch").value="";
}