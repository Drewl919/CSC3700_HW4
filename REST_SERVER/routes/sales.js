const express = require('express');
const router = express.Router();
const path = require('path');
const salesController = require("../controllers/salesController")

router.get( '/customers', salesController.showCustomers);
router.post( '/customers', salesController.postAddCustomer);
router.delete( '/customers/:id', salesController.deleteCustomer);
router.post( '/customers/:id', salesController.postUpdateCustomer);


router.get( '/items', salesController.showItems );
router.post( '/items', salesController.postAddItem);
router.delete( '/items/:id', salesController.deleteItem);
router.post( '/items/:id', salesController.postUpdateItem);


router.get( '/sales', salesController.showSales);
router.get( '/monthlysales', salesController.getTopSales);


exports.routes = router;