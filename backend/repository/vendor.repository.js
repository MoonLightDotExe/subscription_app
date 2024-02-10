const vendors = require('../models/vendors.models')

const vendorRegister = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { vendorName, phoneNumber } = body;
            const existingVendor = await vendors.findOne({ phoneNumber });
            if (existingVendor) {
                reject('Vendor with the provided phone number already exists');
                return;
            }
            const result = await vendors.create({ vendorName, phoneNumber });
            resolve(result._id);
        } catch (err) {
            reject(err);
        }
    });
};

const setVendorLocation = (body) => {
    return new Promise((resolve, reject) => {
        try {
            const vendor_id = body.vendor_id
            resolve(vendor_id)
        } catch (err) {
            reject(err)
        }
    })
}

const addItem = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { vendor_id, itemName, cost, costMetric } = body
            const updatedVendor = await vendors.findOneAndUpdate(
                { _id: vendor_id },
                { $push: { items: { itemName, cost, costMetric } } },
                { new: true } // To return the updated document
            );
            console.log(updatedVendor)
            resolve(vendor_id)
        } catch (err) {
            reject(err)
        }
    })
}

const updateItem = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { vendor_id, oldItemName, oldCost, oldCostMetric, newItemName, newCost, newCostMetric } = body
            const updatedVendor = await vendors.findOneAndUpdate(
                {
                    _id: vendor_id,
                    'items.itemName': oldItemName,
                    'items.cost': oldCost,
                    'items.costMetric': oldCostMetric
                },
                {
                    $set: {
                        'items.$.itemName': newItemName,
                        'items.$.cost': newCost,
                        'items.$.costMetric': newCostMetric
                    }
                },
                { new: true } // To return the updated document
            );
            resolve(vendor_id)
        } catch (err) {
            reject(err)
        }
    });
}


const deleteItem = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { vendor_id, itemName, cost, costMetric } = body
            const vendor = await vendors.findOne({ _id: vendor_id })
            if (!vendor) {
                reject('Vendor not found')
                return;
            }
            vendor.items = vendor.items.filter((item) => {
                item.itemName !== itemName ||
                    item.cost !== cost ||
                    item.costMetric !== costMetric
            });
            await vendor.save()
            resolve(vendor_id)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    vendorRegister,
    setVendorLocation,
    addItem,
    updateItem,
    deleteItem,
}
