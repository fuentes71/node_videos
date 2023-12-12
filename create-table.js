import { sql } from "./db.js";
// sql`DROP TABLE videos`.then(()=>console.log('tabela deletada!'))
sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTERVAL
);

`.then(()=>{
    console.log('tabela criada!');
})