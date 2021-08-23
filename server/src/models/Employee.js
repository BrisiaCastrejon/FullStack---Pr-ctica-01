// Se requiere el Schema para => la información que se guarda en mongodb y el modelo para => consultar y/o modificar la db
const  {Schema, model} =  require('mongoose');

const employeeSchema = new Schema ({
    name : {type: String, require: true},
    position : {type: String, require: true},
    office : {type: String, require: true},
    salary : {type: Number, require: true},
},
{
    timestamps : true, 
    versionKey: false
});

module.exports = model('Employee', employeeSchema);
