class Patient {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.vaccinated = false;
  }
}

class VaccinatedPatient extends Patient {
  constructor(name, age, vaccine, doses){
    super(name, age)
    this.vaccinated = true;
    this.vaccine = vaccine;
    this.numberOfDoses = doses;
  }
}

const unvaccinatedPerson = new Patient("Karen", 45)

console.log(unvaccinatedPerson)

const vaccinatedPerson = new VaccinatedPatient("Steve", 28, "pfizer", 3)

console.log(vaccinatedPerson)
