module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
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

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Endereco, {
      foreignKey: "usuario_id",
      as: "enderecos",
    });

    Usuario.hasMany(models.Pedido, {
      as: "pedidos",
      foreignKey: "usuario_id",
    });
  };

  return Usuario;
};
