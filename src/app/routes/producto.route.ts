import { Router } from 'express';
import ProductoController from '../controllers/producto.controller';

const routerProducto = Router();

routerProducto.get('/', ProductoController.getProductos);
routerProducto.get('/:id', ProductoController.getProductoById);
routerProducto.get('/imagen/:id', ProductoController.getImagenProducto);
routerProducto.put('/updateStock', ProductoController.updateProductoStock);

export default routerProducto;
