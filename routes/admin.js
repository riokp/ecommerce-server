const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/productController")
const authorization = require('../middlewares/authorization')
const {authenticate} = require('../middlewares/authenticate')

router.use(authenticate)
router.get(`/products`, ProductController.getAll)
router.get(`/products/:id`, ProductController.getById)
router.use(authorization);
router.post(`/products`, ProductController.add)
router.put(`/products/:id`, ProductController.update)
router.delete(`/products/:id`, ProductController.delete)

module.exports = router