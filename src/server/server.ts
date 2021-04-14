import express from 'express';
import path from 'path';
import cors from 'cors';

//routings
import routerCategoria from '../app/routes/categoria.route';
import routerProducto from '../app/routes/producto.route';

export default class Server {
  public app: express.Application;
  public port: number;

  constructor(puerto: number) {
    this.port = puerto;
    this.app = express();
  }

  static init(port: number) {
    return new Server(port);
  }

  private publicFolder() {
    const publicPath = path.resolve(__dirname, '../public');
    this.app.use(express.static(publicPath));
  }

  private additionalSettings() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routers() {
    this.app.use('/categoria', routerCategoria);
    this.app.use('/producto', routerProducto);
  }

  start(callback: any) {
    this.additionalSettings();

    this.routers();

    this.app.listen(this.port, callback);

    this.publicFolder();
  }
}
