import ProductoRepository from '../repositories/producto.repository';
import fs from 'fs';
import path from 'path';

const getProductos = async () => {
  return await ProductoRepository.getProductos();
};

const getProductoById = async (id: number) => {
  return await ProductoRepository.getProductoById(id);
};

const updateProductoStock = async (id: number, cantidad: number) => {
  const productoUpdate = await ProductoRepository.updateProductoStock(
    id,
    cantidad
  );
  return {
    code: 201,
    resp: productoUpdate,
  };
};

const getImageProducto = async (nombre: string) => {
  const filePath = path.resolve(__dirname, '../../uploads/productos/', nombre);
  const fileDefault = path.resolve(
    __dirname,
    '../../uploads/productos/default.jpg'
  );
  const exists = fs.existsSync(filePath);

  if (!exists) {
    return fileDefault;
  } else {
    return filePath;
  }
};

export default {
  getProductos,
  getProductoById,
  updateProductoStock,
  getImageProducto,
};
