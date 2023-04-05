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
            foreignKey: 'ingrediente_id',
            otherKey: 'pizza_id',
            as: 'pizzas',
            through: 'pizza_ingredientes',
            timestamps: false
        })
    }

    return Ingrediente
}