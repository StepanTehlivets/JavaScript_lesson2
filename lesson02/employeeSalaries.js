var employeeSalaries={};
employeeSalaries.firstemployee = 500;
employeeSalaries.secondemployee = 351;
employeeSalaries.thirdemployee = 5456;
employeeSalaries.forthemployee = 1543;


var s = function sum(){
	var sum=0;
	for(var key in employeeSalaries){
		sum = sum + employeeSalaries[key];
		
	}
	
	return sum;
}
console.log(s());
