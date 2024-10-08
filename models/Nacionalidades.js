import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Clientes from "./Clientes.js";

const Nacionalidades = db.define("mae_nacionalidades",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_nacionalidad: {
      type: Sequelize.STRING,
    },
    id_cliente: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mae_nacionalidades",
  }
);

Nacionalidades.belongsTo(Clientes, {foreignKey : "id_cliente"})


export default Nacionalidades