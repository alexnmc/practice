
 var employees = []

 function Employee(name, jobtitle, salary, status = 'Full Time'){
     this.Name = name;
     this.Job_Title = jobtitle;
     this.Salary =  salary;
     this.Status = status;
     this.printEmployeeForm = function(){
          console.log(this.Name+''+this.Job_Title+''+this.Salary+''+this.Status)
    }
 }  

    var dennis = new Employee('Dennis ', 'doctor ', '50k')
    dennis.printEmployeeForm()

    var Alex = new Employee('Alex ',  'engineer ', '100k ', 'Part Time ')
    Alex.printEmployeeForm()

    var Mario = new Employee("Mario ", 'singer ', "30k ")
    Mario.printEmployeeForm()

    
    function addToEmployee(person){
    employees.push(person)}
    
    addToEmployee(dennis)
    addToEmployee(Alex)
    addToEmployee(Mario)
    console.log(employees)