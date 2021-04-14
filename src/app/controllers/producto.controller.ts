import { Request, Response } from 'express';
import ProductoService from '../services/producto.service';
import { ProductoStockDTO } from '../models/producto.dto';

const getProductos = async (req: Request, res: Response) => {
  try {
    const productos = await ProductoService.getProductos();

    return res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    return res.status(500).json('No se pudo obtener los productos');
  }
};

const getProductoById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const moneda = await ProductoService.getProductoById(id);

    return res.status(200).json(moneda);
  } catch (error) {
    console.log(error);
    return res.status(500).json('No se pudo obtener el producto');
  }
};

const updateProductoStock = async (req: Request, res: Response) => {
  try {
    const listProductoStock = req.body as ProductoStockDTO[];

    listProductoStock.forEach((productoStock: ProductoStockDTO) => {
      const result = ProductoService.updateProductoStock(
        productoStock.producto_id,
        productoStock.cantidad
      );
    });
    return res.status(200);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json('No se pudo actualizar el stock de los productos');
  }
};

const getImagenProducto = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const filepath = await ProductoService.getImageProducto(id);

    res.sendFile(filepath);
  } catch (error) {
    console.log(error);
    return res.status(500).json('No se pudo obtener la imagen');
  }
};

export default {
  getProductos,
  getProductoById,
  updateProductoStock,
  getImagenProducto,
};
