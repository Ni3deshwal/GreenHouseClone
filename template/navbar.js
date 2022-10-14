document.querySelector(".nav-product").addEventListener("click",navproductdisplay)
function navproductdisplay()
{
    event.preventDefault();
    if(document.getElementById("nav-productdrop").style.visibility=="visible")
    {
        document.getElementById("nav-productdrop").style.visibility="hidden";
        document.querySelector(".nav-navbar").style.background="white";
        document.querySelector("#sign").style.background="white";
        document.querySelector("#sign").style.border="1px solid black";

    }
    else
    {
        document.getElementById("nav-productdrop").style.visibility="visible";
        document.querySelector(".nav-navbar").style.background="#15372c";
        document.querySelector("#sign").style.background="#15372c";
        document.querySelector("#sign").style.border="1px solid white";
    }
}
document.querySelector(".nav-resource").addEventListener("click",navresourcedisplay)
function navresourcedisplay()
{
    event.preventDefault();
    if(document.getElementById("nav-resourcedrop").style.visibility=="visible")
    {
        document.getElementById("nav-resourcedrop").style.visibility="hidden";
        document.querySelector(".nav-navbar").style.background="white";
        document.querySelector("#sign").style.background="white";
        document.querySelector("#sign").style.border="1px solid black";

    }
    else
    {
        document.getElementById("nav-resourcedrop").style.visibility="visible";
        document.querySelector(".nav-navbar").style.background="#15372c";
        document.querySelector("#sign").style.background="#15372c";
        document.querySelector("#sign").style.border="1px solid white";
    }
}    
document.querySelector(".nav-about").addEventListener("click",navaboutdisplay)
function navaboutdisplay()
{
    event.preventDefault();
    if(document.getElementById("nav-aboutdrop").style.visibility=="visible")
    {
        document.getElementById("nav-aboutdrop").style.visibility="hidden";
        document.querySelector(".nav-navbar").style.background="white";
        document.querySelector("#sign").style.background="white";
        document.querySelector("#sign").style.border="1px solid black";

    }
    else
    {
        document.getElementById("nav-aboutdrop").style.visibility="visible";
        document.querySelector(".nav-navbar").style.background="#15372c";
        document.querySelector("#sign").style.background="#15372c";
        document.querySelector("#sign").style.border="1px solid white";
    }
}
document.querySelector(".nav-community").addEventListener("click",navcommunitydisplay)
function navcommunitydisplay()
{
    event.preventDefault();
    if(document.getElementById("nav-communitydrop").style.visibility=="visible")
    {
        document.getElementById("nav-communitydrop").style.visibility="hidden";
        document.querySelector(".nav-navbar").style.background="white";
        document.querySelector("#sign").style.background="white";
        document.querySelector("#sign").style.border="1px solid black";

    }
    else
    {
        document.getElementById("nav-communitydrop").style.visibility="visible";
        document.querySelector(".nav-navbar").style.background="#15372c";
        document.querySelector("#sign").style.background="#15372c";
        document.querySelector("#sign").style.border="1px solid white";
    }
}
document.getElementsByClassName("toggle-button")[0].addEventListener("click",dropdown)
function dropdown()
{
    event.preventDefault();
    document.getElementsByClassName("nav-navbar")[0].classList.toggle('active');
    // document.getElementsByClassName("nav-navbar")[0].style.flexDirection = "column-reverse";
    // document.getElementsByClassName("nav-product")[0].style.display="block";
    // document.getElementsByClassName("nav-resource")[0].style.display="block";
    // document.getElementsByClassName("nav-about")[0].style.display="block";
    // document.getElementsByClassName("nav-community")[0].style.display="block";

}