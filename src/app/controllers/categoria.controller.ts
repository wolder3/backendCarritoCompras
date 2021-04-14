import { Request, Response } from 'express';
import CategoriaService from '../services/categoria.service';

const getCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await CategoriaService.getCategorias();

    return res.status(200).json(categorias);
  } catch (error) {
    console.log(error);
    return res.status(500).json('No se pudo obtener las categorias');
  }
};

export default {
  getCategorias,
};
