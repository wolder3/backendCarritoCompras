import colors from 'colors/safe';
import mysql from 'mysql2/promise';
import variables from './dotenv';

export default class MySQL2 {
  private static _instance: MySQL2;

  connection: mysql.Pool;
  connected: boolean = false;

  constructor() {
    console.log(colors.yellow('Inicializando instancia de base de datos...'));

    this.connection = mysql.createPool({
      host: variables.dbUrl,
      user: variables.dbUser,
      password: variables.dbPassword,
      database: variables.dbName,
    });
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  static async ejecutarQuery(query: string) {
    const [rows, fields] = await this.instance.connection.query(query);

    return rows;
  }

  static async ejecutarQueryParams(query: string, params: any[]) {
    let [rows] = await this.instance.connection.query(query, params);

    rows = rows as [];
    rows.pop();

    return rows[0];
  }
}
