var applyObj= JSON.parse(localStorage.getItem("ghAppliedJobs"));
console.log(applyObj);
displayItems(applyObj);
function displayItems(applyObj){
  document.getElementById("main").innerHTML = null;
  applyObj.forEach((element, i) => {
    divmain = document.createElement("div");
    divmain.setAttribute("class", "divm");
    var div1 = document.createElement("div");
    div1.setAttribute("class", "data");
    var p1 = document.createElement("p");
    p1.setAttribute("class", "company");
    p1.innerText = "Company : " + element.company;
    var p2 = document.createElement("p");
    p2.setAttribute("class", "role");
    p2.innerText = "Role : " + element.role;
    var p3 = document.createElement("p");
    p3.setAttribute("class", "place");
    p3.innerText = "Place : " + element.place;
    var p4 = document.createElement("p");
    p4.setAttribute("class", "date");
    p4.innerText = "Date : " + element.date;
    var btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    btn1.innerText = "Applied";
    var hr = document.createElement("hr");
    hr.setAttribute("class", "hr");
    div1.append(p4, p2, p1, p3, hr);
    var div2 = document.createElement("div");
    div2.setAttribute("class", "result");
  
    var btn2 = document.createElement("button");
    btn2.classList.add("btn2");
    btn2.innerText = "Remove";
    btn2.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
      applyObj.splice(i, 1);
      localStorage.setItem("ghAppliedJobs", JSON.stringify(applyObj));
    });
    div2.append(btn2);
    divmain.append(div1, div2);
    document.getElementById("main").append(divmain);
  });
}


