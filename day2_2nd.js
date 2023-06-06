const button_view =document.getElementById("view_pic");
const button_remove =document.getElementById("remove_pic");

button_view.addEventListener("click",()=>{
    const div=document.getElementById("show_pic");
    const image=document.createElement("img");
    image.src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg";
    image.style="width:700px;"
    image.style.marginLeft = "32px";
    div.append(image);
    image.style.width="450px"
});

button_remove.addEventListener("click",()=>{
    window.location.reload();
});


const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
const textarea = document.getElementById("content");
button1.addEventListener("click",()=>{
    textarea.innerText="This is my text";
});
button2.addEventListener("click",()=>{ textarea.innerText="";});

const table=document.querySelector("table");
button1.addEventListener("click",()=>{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText="1";
    const td2=document.createElement("td");
    td2.innerText="Ram";
    const td3=document.createElement("td");
    td3.innerText="Male";
    tr.append(td1,td2,td3);
    table.append(tr);
});
button2.addEventListener("click",()=>{
    window.location.reload();
})

