const {mongoose,Schema}= require('mongoose')

const DirSchema= mongoose.Schema({
    direccion:{
        type:String
    },
    barrio:{
        type:String,
    },
    ciudad:{
        type:String,
    },
    departamento:{
        type:String,
    },
    empleado: { type: Schema.Types.ObjectId, ref: 'Empleados' },
},{timestamps: true, versionKey:false})

module.exports = mongoose.model('Direcciones', DirSchema);