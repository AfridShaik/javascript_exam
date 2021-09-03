class employee{
	constructor(){
		var name;
		var PSNO;
		var state;
	}
	getstate(){
		return this.state;
	}
	setstate(state){
		this.state=state;
	}
	getname(){
		return this.name;
	}
	setname(name){
		this.name=name;
	}
	
	getPSNO(){
		return this.PSNO;
	}
	setPSNO(PSNO){
		this.PSNO=PSNO;
	}
}

var emp = new employee();
emp.setname("Afrid");
emp.setPSNO(12345);
emp.setstate("Andhra Pradesh");
console.log("Employee name is: "+emp.getname())
console.log("Empoyee PSNO is: "+emp.getPSNO())

console.log("EMployee State is: "+emp.getstate())
