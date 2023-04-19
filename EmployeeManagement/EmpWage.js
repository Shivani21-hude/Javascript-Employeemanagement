let FullTime=1;
let PartTime=2;
let empHrs=0;
let WagePerHour=20;
let empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck)
{
case FullTime:
    empHrs=8;
    console.log("Employee is Full Time ")
    break;
    
case PartTime:
    empHrs=4;
    console.log("Employee is Part Time")
    break;

default:
    empHrs=0;
    break;
}
let Total_Wage=empHrs*WagePerHour;
console.log("Total employee wage is : "+Total_Wage);