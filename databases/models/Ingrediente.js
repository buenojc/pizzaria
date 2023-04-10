module.exports = (sequelize, DataTypes) => {
    const Ingrediente = sequelize.define('Ingrediente', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'ingredientes',
        timestamps: false
    })

    Ingrediente.associate = (models) => {
        Ingrediente.belongsToMany(models.Pizza, {
            foreignKey: 'ingrediente_id', // nome da coluna que é o id do model atual na tabela intermediária
            otherKey: 'pizza_id', // nome da coluna que é o id do model relacionado na tabela intermediária
            as: 'pizzas', 
            through: 'pizza_ingredientes', // tabela intermediária atraves da qual a associação acontece
            timestamps: false
        })
    }

    return Ingrediente
}