const { Router } = require('express')
const EmpleadosSchema = require('../../database/Empleados');
const EmpresaSchema = require('../../database/Empresa');
const { validatorRegister, validatorLogin } = require('../../validator/auth')
const { tokenSign, verifyToken } = require('../../utils/handleJwt')
const { encrypt, compare } = require('../../utils/handlePassword');

const router = Router();

router.get('/user', async (req, res) => {
    try {
        const user = await Empleados.find();
        if (!user) {
            res.status(404).send("No existe ningun empleado")
            return
        }
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor ")
    }
});

router.post('/register', validatorRegister, async (req, res) => {
    try {
        const password = await encrypt(req.body.contraseña);

        // Crear una instancia del modelo Empleados con los datos del cuerpo de la solicitud
        const newUser = new EmpleadosSchema({
            id: req.body.id,
            name: req.body.name,
            lastname: req.body.lastname,
            phone: req.body.phone,
            post: req.body.post,
            area: req.body.area,
            email: req.body.email,
            contraseña: password,
            empresa: req.body.empresaId, // Asignar la empresaId desde la solicitud
        });

        // Guardar el nuevo usuario en la base de datos
        await newUser.save();

        res.status(200).send(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de servidor");
    }

});


router.post("/login", validatorLogin, async (req, res) => {
    try {
        const user = await EmpleadosSchema.findOne({ email: req.body.email }).populate('empresa');
        console.log(req.body);
        if (!user) {
            res.status(404).send("Usuario no existe");
            return;
        }

        const hashPassword = user.contraseña;
        console.log(hashPassword);
        const check = await compare(req.body.contraseña, hashPassword);
        if (!check) {
            res.status(401).send("Credenciales incorrectas");
            return;
        }

        
        

        user.set('password', undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            user
        };
        console.log(user);

        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ "error": "Error de servidor" });
        console.log(error);
    }
});

router.get("/getSession", async (req, res) => {
    const token = JSON.parse(req.headers["x-user-session"]);
    try {
        if (token) {
            const session = await verifyToken(token)

            const user = await EmpleadosSchema.findById(session._id)
            res.status(200).json({ user })
        }
        else {
            res.status(401).json({ error: "Sesion no activa" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error al obtener la sesion" })
    }

})
router.put('/register/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        // Utiliza await para esperar la consulta a la base de datos
        const user = await EmpleadosSchema.findById(_id);

        if (!user) {
            res.status(404).send("No existe usuario con ese ID");
            return;
        }

        const { id, name, lastname, phone, post, area, email, contraseña, empresaId } = req.body;

        // Actualiza los campos del usuario
        user.id = id;
        user.name = name;
        user.lastname = lastname;
        user.phone = phone;
        user.post = post;
        user.area = area;
        user.email = email;

        if (contraseña) {
            // Solo actualiza la contraseña si se proporciona en la solicitud
            const newPassword = await encrypt(contraseña);
            user.contraseña = newPassword;
        }

        user.empresa = empresaId;

        // Guarda los cambios en la base de datos
        const updateUser = await user.save();

        res.status(200).send(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de servidor");
    }
});
router.delete('/userDelete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await Empleados.findById(id)
        if (!user) {
            res.status(404).send("No existe Usuario con ese ID")
            return
        }
        const deleteUser = await Empleados.findByIdAndDelete(id)
        res.status(200).send("Usuario eliminado ")
    } catch (error) {
        console.log(error)
        res.status(500).send("Error de servidor")
    }
})
module.exports = router;