//  fetch("http://localhost:8181/myData",{
//     method: "GET",
// })
// .then((response)=>response.json())
// .then((data)=>renderData(data));

// function renderData(data) {
//     console.log(data);
//  }
// const show=document.getElementById("show_recipe");
// function renderData()

const typeEmail=document.getElementById("email");
const typePassword=document.getElementById("password");
function submitData(){
    if((typeEmail.value!="" ) && (typePassword.value!=""))
    {
        const obj={
            id: Date.now(),
            email:typeEmail.value,
            password:typePassword.value
        };
        
fetch("http://localhost:8181/myData",{
    method: "POST",
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(obj),
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        alert("Created account");
    })
    .catch((err)=>console.log(err));
    
}
else
alert("Fill in the fields");

}