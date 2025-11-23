//Question1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined=[...arr1,...arr2];
console.log(combined)

//Question2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile={...person,...extra};
console.log(profile);


// Question 3
 function sumAll(...numbers)
{ let total=0;
    total+=numbers;
    return total;
}
console.log(sumAll(1,2,3,4));


//Question4

let numbers=[10,20,30,40,50];
let a=numbers[0];
let remaining=[...numbers];
console.log(a)
console.log(remaining)

//Question 5

let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {address:{city:cityname,geo:{lat:latname,lng:lngname}}}=user;
console.log(`Extracted City,lat,lng
    ${cityname} ,${latname},${lngname}`);

    //Question 6
const multiply=(a,b)=>a*b;
console.log(multiply(1,2));


//Question7
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

console.log(emp?.details?.profile?.role);
