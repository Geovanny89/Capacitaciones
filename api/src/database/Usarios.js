const {mongoose}= require('mongoose')

const UserSchema= mongoose.Schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    user:{
        type:String
    },
    email:{
        type:String
    },
    rol:{
        type:["user","admin"],
        default:"user"
    },

   
},{timestamps: true, versionKey:false})

module.exports = mongoose.model('usuarios', UserSchema);