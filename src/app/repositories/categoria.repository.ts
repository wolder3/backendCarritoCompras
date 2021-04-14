import MySQL2 from '../../config/mysql2';

const getCategorias = async () => {
  const query = `Select * from categoria`;

  const result = await MySQL2.ejecutarQuery(query);
  return result;
};

export default {
  getCategorias,
};
