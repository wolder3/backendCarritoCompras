import Server from './server/server';
import colors from 'colors/safe';
import variables from './config/dotenv';

const server = Server.init(Number(variables.port));

server.start(() => {
  console.log(colors.blue(`Servidor corriendo en el puerto ${variables.port}`));
  console.log(colors.green(`Servidor corriendo en modo ${variables.NODE_ENV}`));
  console.log(colors.green(`URL BD ${variables.dbUrl}`));
});
