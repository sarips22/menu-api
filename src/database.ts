import { Pool } from "pg";
//import {config} from 'dotenv';
//config();


//si se desarrolla en entorno local activa este bloque de codigo

/*
export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password: 'davitzoL18',
    database: 'menusdb'
});
*/








//external url de render

export const pool = new Pool({
    user:'sarapinete',
    host:'dpg-cl6kohph9grs738n43a0-a.oregon-postgres.render.com',
    password: 'IujcewcpFqZuumGr3IsABqIk7wDdAIWt',
    database: 'firstapi',
    port: 5432,
    ssl:true
});


