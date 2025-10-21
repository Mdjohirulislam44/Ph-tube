// load categories
const loadCategories = () =>{
 fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
 .then(res=> res.json())
 .then((data) => displayCategories(data.categories))
 .then((error) => console.log(error))

};

//  display categories
const displayCategories= () =>{
    console.log(data);
};
loadCategories()
