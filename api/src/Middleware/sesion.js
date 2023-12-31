// const {verifyToken }= require('../utils/handleJwt')
// const UserSchema = require('../database/user')


// const authMiddleware = async (req,res,next) =>{
    
//     try {
//         if(!req.headers.authorization){
//             return res.status(401).send("No token")
//         }
//         const token = req.headers.authorization.split(' ').pop();
//         const dataToken = await verifyToken(token)
//         if(!dataToken._id){
//             return res.status(401).send("Error ID token")
//         }
//         const user = await UserSchema.findById(dataToken._id)
//         req.user = user
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(500).send("No sesion")         
//     }
// }
// module.exports = authMiddleware;
const { verifyToken } = require('../utils/handleJwt');
const EmpleadoSchema = require('../database/Empleados');

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers['x-user-session']) {
      return res.status(401).send("No token");
    }
    console.log(req.headers)
    const token = req.headers['x-user-session'];
    const dataToken = await verifyToken(token);
    console.log( 'Holaaaaaaaaaaaa ' + token)
    if (!dataToken._id) {
      return res.status(401).send("Error ID token");
    }
    const user = await EmpleadoSchema.findById(dataToken._id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("No sesion");
  }
};

module.exports = authMiddleware;
