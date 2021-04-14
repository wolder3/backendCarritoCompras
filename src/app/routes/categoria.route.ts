import { Router } from 'express';
import CategoriaController from '../controllers/categoria.controller';

const routerCategoria = Router();

routerCategoria.get('/', CategoriaController.getCategorias);

export default routerCategoria;
