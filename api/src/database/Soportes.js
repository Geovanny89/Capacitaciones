const {mongoose,Schema}= require ('mongoose');

const SoportesSchema= mongoose.Schema({
    name:{
        type:String
    },
    tipo:{
        type:String
    },
    // tipo buffer para subir archivos pdf
    documento:{
        type:Buffer
    },
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' },
},{timestamps: true, versionKey:false})

module.exports = mongoose.model('Soportes', SoportesSchema)