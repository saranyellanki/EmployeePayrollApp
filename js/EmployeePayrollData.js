class EmployeePayrollData {

    getName() { 
        return this._name; 
    }
    setName(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)) 
            this._name = name;
        else throw "Name is Incorrect";
    }

    getId() {
        return this._id;
    }
    setId(id){
        if(id>0) this._id = id;
        else throw "ID is not valid"
    }

    getSalary() {
        return this._salary;
    }
    setSalary(salary){
        if(salary>0) this._salary = salary;
        else throw "Salary is not valid"
    }

    getGender() {
        return this._gender;
    }
    setGender(gender){
        if(gender=="M"||gender=="F") this._gender = gender;
        else throw "Invalid gender"
    }

    getStartDate() {
        return this._startDate;
    }
    setStartDate(startDate){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = startDate == undefined ? 'undefined' :
                        startDate.toLocaleDateString('en-US', options);
        if((new Date(empDate)<=new Date()))
            this._startDate = empDate;
        else throw "Invalid Date"
    }

    toString(){
        return "id : "+this.getId()+", Name : "+this.getName()+", Salary : "+this.getSalary()+", gender : "+this.getGender()+
        ", Date : "+this.getStartDate();
    }
}