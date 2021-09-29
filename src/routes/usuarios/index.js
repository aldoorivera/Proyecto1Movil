const { Router, json } = require('express');
const router = Router();
const controladorUsuarios = require('../../controllers/controladorusuario');
router.get('/', controladorUsuarios.listarUsuarios);
router.post('/', controladorUsuarios.Guardar);
router.delete('/', controladorUsuarios.EliminarParams);
router.delete('/', controladorUsuarios.EliminarQuery);
router.put('/',controladorUsuarios.ActualizarQuery);
module.exports = router;