const {mongoose, Schema}= require ('mongoose');

const TrainingProgressSchema = new Schema({
    training: { type: Schema.Types.ObjectId, ref: 'Capacitaciones' }, // Referencia a la capacitación
    progress: Number, // Porcentaje de progreso del empleado en esta capacitación
});

const EmpleadosSchema= mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    lastname:{
        type:String
    },
    phone:{
        type:String
    },
    post:{
        type:String 
    },
    area:{
        type:String
    },
   email:{
        type:String
   },
   empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' },
   direcciones:{type:Schema.Types.ObjectId, ref: 'Direcciones'},
   trainingProgress: [TrainingProgressSchema], // Registro de progreso de capacitación
},{timestamps: true, versionKey:false})

module.exports = mongoose.model('Empleados', EmpleadosSchema)