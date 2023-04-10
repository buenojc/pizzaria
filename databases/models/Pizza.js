module.exports = (sequelize, DataType) => {

    // Retornaremos o resultado da função sequelize.define
    // passando para ela 2 parâmetros

    // 1 - Nome da model
    // 2 - Objeto descrevendo as colunas da tabela que a model vai representar
    // 3 - Um objeto com algumas opções

   const Pizza = sequelize.define('Pizza', {
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: DataType.STRING,
        allowNull: false,
    },
    preco:{
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    },
    destaque:{
        type: DataType.BOOLEAN,
        defaultValue: false
    },
    img: {
        type: DataType.STRING,
        allowNull: false
    },
    score: {
        type: DataType.INTEGER,
        defaultValue: 0
    }
   }, {
    tableName: 'pizzas',
    timestamps: false
   }) 

   Pizza.associate = (models) => {
    Pizza.belongsToMany(models.Ingrediente, {
        as: 'ingredientes',
        through: 'pizza_ingredientes',
        foreignKey: 'pizza_id',
        otherKey: 'ingrediente_id',
        timestamps: false
    })
   }

   return Pizza
}