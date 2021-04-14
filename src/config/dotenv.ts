import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(
    __dirname,
    '../environment/' + process.env.NODE_ENV + '.env'
  ),
});

console.log(
  path.resolve(__dirname, '../environment/' + process.env.NODE_ENV + '.env')
);

const variables = {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUrl: process.env.HOST_URL,
  dbPort: process.env.HOST_PORT,
  dbUser: process.env.HOST_USER,
  dbPassword: process.env.HOST_PASSWORD,
  dbDialect: process.env.HOST_DIALECT,
  dbName: process.env.HOST_DATABASE,
};

export default variables;
