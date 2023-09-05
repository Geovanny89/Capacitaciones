const {mongoose,Schema}= require ('mongoose');

const CapacitacionesSchema= mongoose.Schema({
    name:{
        type:String
    },
    tipo:{
        type:String
    },
    // tipo buffer para subir archivos pdf
    archivo:{
        type:Buffer
    },
    description:{
        type:String
    },
    employeesCompleted: [{ type: Schema.Types.ObjectId, ref: 'Empleados' }], // Empleados que han completado esta capacitación
},{timestamps: true, versionKey:false})

module.exports = mongoose.model('Capacitaciones', CapacitacionesSchema)