exports.listarUsuarios = (req, res) =>{
    const usuario= {
        "id": 1,
        "Nombre": "Aldo Rivera",
        "Contrasena": "123456",
        "activo": true
    }
    res.json(usuario);
};

exports.Guardar = (req, res) => {
    const { id, Nombre, Contrasena, activo} = req.body;
    const usuario = {
        id,
        Nombre,
        Contrasena,
        activo
    }
    console.log(usuario);
    res.send("Registro Enviado")
};

exports.EliminarParams = (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    if(id==1)
    {
        res.send("Registro eliminado");
    }
    else{
        res.send("Registro no existente");
    }
};

exports.EliminarQuery = (req, res) => {
    const{ id } = req.query;
    if(id==1)
    {
        res.send("Registro eliminado");
    }
    else{
        res.send("Registro no existente");
    }
};

exports.ActualizarQuery = (req, res) => {
    const{id}=req.query;
    const {Nombre, Contrasena, activo}=req.body;
    console.log(req.query);
    console.log(req.body);
    const usuario= {
        "id": 1,
        "Nombre": "Aldo Rivera",
        "Contrasena": "123456",
        "activo": true
    }
    if(id==usuario.id)
    {
        usuario.Nombre=Nombre;
        res,json(usuario);
        res.send("Registro actualizado");
    }
    else{
        res.send("Registro no existente");
    }
    res.send('Datos enviados');
};