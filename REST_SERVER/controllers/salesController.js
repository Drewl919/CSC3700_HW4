const MonthSales = require("../models/currentMonthSales");
const CustomerSales = require("../models/customerSales");
const ItemSales = require("../models/itemSales");

exports.getTopSales = async (req, res, next) => {
    MonthSales.getMonthly()
        .then(( rows, fieldData ) => {
            res.status(200).json(rows[0]);
        })
}
exports.showSales = ( req, res, next) => {
    MonthSales.fetchAll()
        .then(( rows, fieldData ) => {
            res.status(200).json(rows[0]);
        })
}


exports.showCustomers = ( req, res, next) => {
    CustomerSales.fetchAll()
        .then(( rows, fieldData ) => {
            res.status(200).json(rows[0]);
        })
}
exports.postAddCustomer = ( req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    const customer = new CustomerSales(name, email);
    customer.save();
}
exports.deleteCustomer = ( req, res, next) => {
    let id = req.params.id;
    CustomerSales.delete(id);
}
exports.postUpdateCustomer = ( req, res, next) => {
    let id = req.body.id;
    let name = req.body.newName;
    let email = req.body.newEmail;
    const customer = new CustomerSales(name, email);
    customer.update(id);
}


exports.showItems = ( req, res, next) => {
    ItemSales.fetchAll()
        .then(( rows, fieldData ) => {
            res.status(200).json(rows[0]);
        })
}
exports.postAddItem = ( req, res, next) => {
    let name = req.body.name;
    let price = req.body.price;
    const item = new ItemSales(name, price);
    item.save();
}
exports.deleteItem = ( req, res, next) => {
    let id = req.params.id;
    ItemSales.delete(id);
}
exports.postUpdateItem = ( req, res, next) => {
    let id = req.body.id;
    let name = req.body.newName;
    let price = req.body.newPrice;
    const item = new ItemSales(name, price);
    item.update(id);
}