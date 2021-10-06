const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Partie', {
        pseudo: {
            type: DataTypes.STRING,
            allownull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allownull: false
        },
        des: {
            type: DataTypes.JSON,
            allownull: true
        },
        compteur :{
            type: DataTypes.SMALLINT,
            allownull: false
        }
    })
}