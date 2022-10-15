var img_arr=["./resources/0.webp","./resources/1.webp","./resources/2.webp","./resources/3.webp","./resources/4.webp"];

var target = document.querySelectorAll(".txt321");

for(let i=0; i<img_arr.length; i++){

    target[i].addEventListener("click",function(){
        document.getElementById("changeimg").src = img_arr[i];
    })
}

// on click

 target.forEach((button) => {
  button.addEventListener("click", function () {

    target.forEach((button) => {
      button.classList.remove("clicked1");
      button.classList.remove("clicked2"); 
    });

    button.classList.add("clicked1");
    button.classList.add("clicked2");
  });
});






for(let i=0; i< target.length; i++){

    
// on hover

    target[i].addEventListener("mouseover", function(){
        mOver(target[i]);
    });
    target[i].addEventListener("mouseout", function(){
        mOut(target[i]);
    });
}

function mOver(x) {
//    x.setAttribute("style", "background-color:blue;")
   x.classList.add("hoverstyle");
   x.childNodes[1].classList.add("nofilt");
}

function mOut(x) {  
//    x.setAttribute("style", "background-color:green;")
   x.classList.remove("hoverstyle");
   x.childNodes[1].classList.remove("nofilt");
}
   