import CategoriaRepository from '../repositories/categoria.repository';

const getCategorias = async () => {
  return await CategoriaRepository.getCategorias();
};

export default {
  getCategorias,
};
