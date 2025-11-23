//Question 8
//using map
let nums = [10, 3, 7, 20, 13, 2];
let squareArray=nums.map((num)=>
    num=num*num
);
console.log(squareArray);
//using filter
let primeArray=nums.filter((num)=>{
    if(num%2!=0)
    {
        return num
    }
});
console.log(primeArray)
//using reduce
let sumArray=nums.reduce((num)=>num+num);
console.log(sumArray)


//using sort
let sortedArray=nums.sort((a,b)=>b-a);
console.log(sortedArray)


//Question 9---Callback function Question

function displayCar(){
    console.log("A car")
}
function displayTruck(){
    console.log("A Truck")
}
function displayBike(){
    console.log("A Bike")
}
function vehicleinfo(vehicleCategory,Callback)
{   
    Callback();

}
vehicleinfo("Car",displayCar);
vehicleinfo("Truck",displayTruck);
vehicleinfo("Bike",displayBike);
