module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );
};
