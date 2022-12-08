// Car class

class Car {
  constructor(make, price) {
    this.make = make;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice
  }
}

const mini = new Car("mini", 20000)
const ferrari = new Car("ferrari", 200000)
const tesla = new Car("tesla", 60000)
// console.log(mini)
mini.changePrice(10000)
// console.log(mini)

//CarDealer class

class CarDealer {
  constructor(name) {
    this.name = name
    this.carList = []
  }

  add(car) {
    this.carList.push(car)
  }

  filterByPrice(budget) {
    // return this.carList[2].price
    let filterArr = []
    for(let i=0; i<this.carList.length; i++) {
      if (this.carList[i].price <= budget){
        filterArr.push(this.carList[i])
      }
    }
    console.log(filterArr)
  }

  catalog(){
    console.log(this.carList)
  }
}

const happyCarDealer = new CarDealer("Happy Car Dealer")
console.log(happyCarDealer)
happyCarDealer.add(mini)
console.log(happyCarDealer)
happyCarDealer.add(ferrari)
happyCarDealer.add(tesla)
console.log(happyCarDealer)

console.log(".........")

// happyCarDealer.filterByPrice(60000)

console.log(".........")
happyCarDealer.catalog()
