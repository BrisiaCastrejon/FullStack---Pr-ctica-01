// const hello = (req, res) => res.send('hello');
// este archivo permite interactuar con la base de datos
const employeeCrt = {};
const Employee = require('../models/Employee');

employeeCrt.getEmployees = async (req, res) => {
    // res.send('get employees') => se usó para probar REST CLIENT
    const employees = await Employee.find()
    res.json(employees);
};
employeeCrt.createEmployee = async (req, res) => {
    //validar como se recibe un dato la info esta en el POST del api.rest file 
    //console.log(req.body);
    // res.send('create employee') => se usó para probar REST CLIENT

    const newEmployee = new Employee(req.body)
    // console.log(newEmployee);
    await newEmployee.save();
    res.send({message : "Employee created"})
};
employeeCrt.getEmployee = async (req, res) => {
    console.log(req.params)
    
    // una manera de hacerlo => await Employee.findOne({_id: req.params.id});
    //Otra manera de hacerlo
    // await Employee.findById(req.params.id)

    const employee = await Employee.findById(req.params.id); 

    res.send(employee);
};
employeeCrt.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status : 'Employee Updated'});

};

employeeCrt.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status : 'Employee Deleted'});
};

module.exports =  employeeCrt;