module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "enderecos",
      timestamps: false,
    }
  );

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
    });
  };

  return Endereco
};
