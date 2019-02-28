module.exports = function(connection, Sequelize) {
    const Mob = connection.define("Mob", {
        mobName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        mobStats: {
            type: Sequelize.TEXT,
            allowNull: false,
            default: "{}",
            validate: {
                notEmpty: true
            }
        },
        lootTable: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });


    Mob.associate = function(models) {
        Mob.belongsTo(models.Location);
    };


    return Mob;
};