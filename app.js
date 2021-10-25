const checkbox=document.getElementById("checkbox");
const submitBtn=document.querySelector("button[type=submit]")
//disable checkbox
checkbox.disabled=true;
checkbox.checked=false;
submitBtn.disabled=true;
const elements =document.querySelectorAll(".element");
let selectColor=document.getElementById("SelectColor");
let arr=[]
elements.forEach(function(element){
    const color =getRandomColor();
    element.style.backgroundColor=color;
    arr.push(color);
    element.innerHTML=color;
});
selectColor.innerHTML=arr[Math.floor(Math.random()*arr.length)];

function getRandomColor (){
    const letter="0123456789ABCDEF";
    let color="#";
    for (let i = 0; i < 6; i++) {
        color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
}
// check if right color
elements.forEach(function(element){
    element.addEventListener('click',function(){
        if (element.innerHTML === selectColor.innerHTML) {
            checkbox.checked=true;
            alert("you are human");
            submitBtn.disabled=false;
            submitBtn.classList.remove("btn-light");
            submitBtn.classList.add("btn-success");
        } else {
            alert("please verify that you are human");
            location.reload(true);
        }
    })
})
