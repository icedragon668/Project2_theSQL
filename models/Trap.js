module.exports = function(connection, Sequelize) {
    const Trap = connection.define("Trap", {
        trapName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        trapEffect: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Trap.associate = function(models) {
<<<<<<< HEAD
        Trap.belongsTo(models.Location);
=======
        Trap.belongsTo(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
>>>>>>> a5f600478f0e6a5a00a9feb65dbb86b43d6bb24d
    }

    return Trap;
};