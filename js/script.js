let url = "http://localhost:3000/recipies";
let ol = document.querySelector("ol");
let template = document.querySelector("template");

fetch(url)
.then((data)=> {
    return data.json();
})
.then((recipies)=>{
    updateUI(recipies);
})
.catch((error)=>{

})

function updateUI(recipies) {
    recipies.forEach((recipie) => {
        let clone = template.content.cloneNode(true);

        let image = clone.querySelector("img");
        let h3 = clone.querySelector("h3");
        let p = clone.querySelector("p");
        let h5 = clone.querySelector("h5");


        image.src = recipie.imageUrl;
        h3.textContent = recipie.title;
        p.textContent = recipie.cookingTime;
        h5.textContent = recipie.ingredients;
        // <h5>masalihlari: ${recipie.ingredients} </h5>

        ol.appendChild(clone);
    });
}