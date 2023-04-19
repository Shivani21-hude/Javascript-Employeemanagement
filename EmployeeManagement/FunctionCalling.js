const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
//const NUM_OF_WORKING_DAYS=2;


function getWorkingHours(empCheck)
{
  switch(empCheck)
  {
   case IS_PART_TIME:
         return PART_TIME_HOURS;
   case IS_FULL_TIME:
         return FULL_TIME_HOURS;
    default:
          return 0;
  }
}

/*let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Hour : " + empHrs + " , EmpWage : " +empWage);
*/

//Calculate wages for a month 
/*
let totalEmpHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}


let empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("Hour: "+totalEmpHrs+" Emp Wage: "+empWage);
*/

//calculate wages till a condition of total working hours 160 and working days 20 is reach for a month

const Max_Hrs_In_Month=160;
let NUM_OF_WORKING_DAYS=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<Max_Hrs_In_Month && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
let empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5 - Total Days: "+ totalWorkingDays+ " Total Hrs: "+ totalEmpHrs+" Emp Wage: "+empWage);
