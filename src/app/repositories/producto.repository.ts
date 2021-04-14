import MySQL2 from '../../config/mysql2';

const getProductos = async () => {
  const query = `select * from producto`;

  const result = await MySQL2.ejecutarQuery(query);
  return result;
};

const getProductoById = async (id: number) => {
  const query = `select * from producto where producto_id = ${id}`;
  const result = await MySQL2.ejecutarQuery(query);
  return result;
};

const updateProductoStock = async (id: number, cantidad: number) => {
  const query = `update producto set stock = stock - ${cantidad}   where producto_id = ${id}`;
  const result = await MySQL2.ejecutarQuery(query);
  return result;
};
export default {
  getProductos,
  getProductoById,
  updateProductoStock,
};
