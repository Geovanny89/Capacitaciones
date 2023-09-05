const {mongoose,Schema}= require('mongoose')

const EmpresaSchema= mongoose.Schema({
    name:{
        type:String
    },
    nit:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    
},{timestamps: true, versionKey:false})

module.exports = mongoose.model('Empresa', EmpresaSchema);