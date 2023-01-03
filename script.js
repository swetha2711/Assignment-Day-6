//3
class Person{
  name;
  age;
  gender;
  constructor(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;

  }
}
var person=new Person("Swetha",25,"Female");
console.log(person);


//4
class Uber{
  distanceKm;
  price;
constructor(distanceKm){
  this.distanceKm=distanceKm;
}
getUberPrice(distanceKm){
  return(distanceKm*9);
}
}
var uber =new Uber(15);
console.log("Uber price for"+uber.distanceKm+"at Rs9/Km is"+uber.getUberPrice(uber.distanceKm));
