const show = document.getElementById("show");

fetch("http://localhost:8181/food", {
    method: "GET"
})

    .then((res) => res.json())
    .then((data) => getData(data));
function getData(data) {
    data.map((el) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
         img.src = el.image;
        const item = document.createElement("h1");
        item.innerText = el.item;
        const updatebutton = document.createElement("button");
        updatebutton.innerText = "Update";
        updatebutton.addEventListener("click", () => {
            const updatedTitle = prompt("");
            const newObj = {
                item: updatedTitle,
                description: el.description, 
                image: el.image,
                Drice: el.price,
            };
            fetch(`http://localhost:8181/recipe/$(el.id)`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newObj),
            })
                .then((res) => {
                    alert("Updated Title Successfully");
                })
                .catch((err) => {
                    alert("Error occured while updating" + err);
                });
        });
        const deletebutton = document.createElement("button");
        deletebutton.innerText = "Delete";
        deletebutton.addEventListener("click", () => {
            fetch(`http://localhost:8080/recipe/$(el.id)`, {
                method: "DELETE",
            })
                .then((res) =>{
                    alert("Deleted the item");
    })
        .catch((err) => {
            alert("Error occured while deleting");
        });
});
div.append(img, item, updatebutton, deletebutton);
show.append(div);
});
}