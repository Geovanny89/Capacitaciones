const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgresoSchema = new Schema({
    employee: { type: Schema.Types.ObjectId, ref: 'Empleados' }, // Referencia al empleado
    capacitacion: { type: Schema.Types.ObjectId, ref: 'Capacitaciones' }, // Referencia a la capacitación
    progress: Number, // Porcentaje de progreso del empleado en esta capacitación
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Progress', ProgresoSchema);
