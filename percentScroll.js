var span=document.querySelector("#percent");

window.addEventListener("scroll", getscrollPercent);
window.addEventListener("resize",getscrollPercent)
getscrollPercent();



function getscrollPercent(){
    var totalHeight=document.body.clientHeight;
    var viewheight=window.innerHeight;
    var currentPos=window.scrollY;
    var totalviewPart=viewheight+currentPos;
    var percent =Math.ceil((totalviewPart/totalHeight)*100);
    span.innerHTML=percent;

}
