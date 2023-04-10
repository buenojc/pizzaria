module.exports = (sequelize, DataTypes) => {
 
    const Pedido = sequelize.define('Pedido', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        forma_pagamento_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        obs: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'pedidos',
        timestamps: false
    })

    Pedido.associate = models => {
        Pedido.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })

        Pedido.belongsToMany(models.Pizza, {
            as: 'pizzas',
            foreignKey: 'pedido_id',
            otherKey: 'pizza_id',
            through: 'pedido_pizza',
            timestamps: false

        })
    }

    return Pedido
}