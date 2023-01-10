let products = require('./products');
products = products.products;

// --------------------- Lab ---------------------
const filter = num => {
  let filteredByPrice = [];
  for (obj of products) {
    obj.price == num ? filteredByPrice.push({...obj}) : null;
  }
  filteredByPrice.sort((a,b) => (a.name > b.name) ? 1 : -1) // not necessary, however, makes output cleaner
  console.log()
  return filteredByPrice;
}

// ------------------- Stretch -------------------
const filter2 = function() {
  this.filtered = [];

  this.newList = function() { // this generates a clone of all products under the name this.filtered
    for (obj of products) {
      this.filtered.push({...obj})
    }
    this.filtered.sort((a,b) => (a.name > b.name) ? 1 : -1) // not necessary, however, makes output cleaner by putting products in alphabetical order according to names
  }
  this.newList(); // calls the function once to generate the clone
  
  this.byName = function(str) {
      let i = 0;

      while (i < this.filtered.length) {
        this.filtered[i].name != str ? this.filtered.splice(i, 1) : i++;
        // if name is not equal to str then it will remove the object.
        // if name is equal to str it will add 1 to the index so the next iteration will check the following object
      }

    return this; // returning whole filter2 function so we can chain the calls together as you can see on line 84
  }

  this.byPriceRange = function(min, max) {
      let i = 0;

      while (i < this.filtered.length) {
        this.filtered[i].price < min || this.filtered[i].price > max ? this.filtered.splice(i,1) : i++;
        // if price is less than min or greater than max then it will remove the object.
        // if price is between min and max it will add 1 to the index so the next iteration will check the following object
      }

    return this; // returning whole filter2 function so we can chain the calls together as you can see on line 84
  }

  this.byTags = function() {
    // let filteredEmpty = !this.filtered[0];
    let args = []; // this array will have each of the functions arguments pushed into it

    for (arg of arguments) { // arguments is a reserved word in JS, a use for it could be when you don't know how many arguments a function might have
      args.push(arg)
    }

      let i = 0;
      while (i < this.filtered.length) {
        let containsTags = false;
        for (arg of args) {
            if (this.filtered[i].tags.includes(arg)) {
              containsTags = true;
              // if there's a single instance of any of a product's tags including any of the arguments then
              // containsTags will become true.
            } 
        }
        !containsTags ? this.filtered.splice(i, 1) : i++;
        // if !containsTags then remove object from this.filtered and increment index
      }

    return this; // returning whole filter2 function so we can chain the calls together as you can see on line 84
  }

  this.results = function(){ // this is only required so we can chain the calls together as you can see on line 84
    return this.filtered;
  }
} 

let myFilter = new filter2

console.log(filter(472.72))
console.log(myFilter.byPriceRange(400, 500).byTags('cillum', 'id').byName('Wheeler').results())
// console.log(products) // run this to check that the above script doesn't mutate the original.





// [Lab] Safe Filter

// You're in charge of a national supermarket's online shopping cart. You need 
// to implement a filter function that makes it easier for users to track down 
// items they need to buy.

// The stock of the entire supermarket is held in an Array with objects that 
// have properties `name`: string, `price`: number, `tags`: string[].
// Your filter must:
// - Not mutate the original stock
// - Filter based on price

// Stretches:
// - Filter via tags
// - Filter via name
// - Filter via price range
// - Allow multiple filters