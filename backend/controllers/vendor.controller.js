const dotenv = require('dotenv').config()
const vendors = require('../repository/vendor.repository')

const vendorRegister = async (req, res) => {
    try {
        const data = await vendors.vendorRegister(req.body)
        console.log(data)
        res.json({
            success: true,
            data: data,
            message: 'Registration Successfully!',
        })
    } catch (err) {
        res.json({
            success: false,
            data: err,
            message: 'Registration Failed!',
        })
    }
}

const setVendorLocation = async (req, res) => {
    try {
        const data = await vendors.setVendorLocation(req.body)
        console.log(data)
        res.json({
            success: true,
            data: data,
            message: 'Set Location Successfully!',
        })
    } catch (err) {
        res.json({
            success: false,
            data: err,
            message: 'Set Location Failed!',
        })
    }
}

const addItem = async (req, res) => {
    try {
        const data = await vendors.addItem(req.body)
        console.log(data)
        res.json({
            success: true,
            data: data,
            message: 'Item Created Successfully!',
        })
    } catch (err) {
        res.json({
            success: false,
            data: err,
            message: 'Item Creation Failed!',
        })
    }
}
const updateItem = async (req, res) => {
    try {
        const data = await vendors.updateItem(req.body)
        console.log(data)
        res.json({
            success: true,
            data: data,
            message: 'Item Updated Successfully!',
        })
    } catch (err) {
        res.json({
            success: false,
            data: err,
            message: 'Item Updation Failed!',
        })
    }
}
const deleteItem = async (req, res) => {
    try {
        const data = await vendors.deleteItem(req.body)
        console.log(data)
        res.json({
            success: true,
            data: data,
            message: 'Item Deleted Successfully!',
        })
    } catch (err) {
        res.json({
            success: false,
            data: err,
            message: 'Item Deletion Failed!',
        })
    }
}

module.exports = {
    vendorRegister,
    setVendorLocation,
    addItem,
    updateItem,
    deleteItem
}
