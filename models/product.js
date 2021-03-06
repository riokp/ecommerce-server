'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.User, {
        through: "Carts",
        foreignKey: "ProductId"
      })
      Product.belongsToMany(models.User, {
        through: 'Wishlists',
        foreignKey: "ProductId"
      })
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "name cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "name cannot be empty"
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "image url cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "image url cannot be empty"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "price cannot be empty"
        },
        min: {
          args: [0],
          msg: "price must be greater than 0"
        },
        isNumeric: {
          args: true,
          msg: "price must be a number"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "stock cannot be empty"
        },
        min: {
          args: [0],
          msg: "stock must be greater than 0"
        },
        isNumeric: {
          args: true,
          msg: "stock must be a number"
        }
      }
    },
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};