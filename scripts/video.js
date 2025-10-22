// load categories
const loadCategories = () =>{
 fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
 .then(res=> res.json())
 .then((data) => displayCategories(data.categories))
 .then((error) => console.log(error))

};
// category
// : 
// "Music"
// category_id
// : 
// "1001"

//  display categories
const displayCategories= (categories) =>{
    const categoryContainer = document.getElementById("categroies");
    categories.forEach((item) =>{
        console.log(categories)
        // create btn
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;
        // add btn to categroy container
        categoryContainer.append(button);
    });
};
loadCategories()
