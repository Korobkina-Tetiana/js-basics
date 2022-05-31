'use strict';

fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => practice(data))
      .catch(err => console.error(err));

/*function practice(response){
    const allTitle = response.map(item => item.title);

    console.log(allTitle);
}*/

/*function practice(response){
  const allTitle = response.map(({id, price, category}) => ({id, price, category}));

  console.log(allTitle);
}*/

function practice(response){
  const categoryElectronics = response.filter(item => item.category === 'electronics');

  console.log(categoryElectronics);
}

/*function practice(response){
  const priceMore = response.filter(item => item.price >= 100);

  console.log(priceMore);
}*/

/*function practice(response){
  const categoryWomensClothing = response.some(item => item.category === "women's clothing");
  //const WomensClothing = response.find(item => item.category === "women's clothing");
  const WomensClothing = response.filter(item => item.category === "women's clothing");

  console.log(categoryWomensClothing);
  console.log(WomensClothing);
}*/

/*function practice(response){
  const image = response.every(item => item.image);

  console.log(image);
}*/

/*function practice(response){
  const categoryAll = response.reduce((accum, item) => {
    console.log(accum);
    return accum.concat(item.category)
  }, []);

  console.log(categoryAll);
}*/

/*function practice(response){
  const category = response.reduce((accum, item) => accum.concat(item.category), []);

  const filterCategory = category.filter((item, i) => category.indexOf(item) === i)

  console.log(filterCategory);
}*/