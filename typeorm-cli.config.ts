import { DataSource } from 'typeorm';
import { CoffeeRefactor1732891562700 } from './src/migrations/1732891562700-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entiny';
import { SchemaSync1732893731444 } from './src/migrations/1732893731444-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1732891562700, SchemaSync1732893731444],
});
