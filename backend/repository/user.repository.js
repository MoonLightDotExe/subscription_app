const dotenv = require('dotenv').config()
const user = require('../models/users.models')
const group = require('../models/groups.models')
const vendor = require('../models/vendors.models')

module.exports = {
  subscribeToService: async (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const {
          user_id,
          service_type,
          service_name,
          location,
          price,
          isLocal,
        } = body
        if (body.type == 0) {
          const user_update = await user.findOneAndUpdate(
            { _id: user_id.toString() },
            {
              $push: {
                subscriptions: { service_name, service_type, location, price },
              },
            },
            { new: true }
          )
          resolve(user_update)
        } else {
          const group2 = await group.findOneAndUpdate(
            { _id: body.group_id },
            {
              $push: {
                subscriptions: { service_name, service_type, location, price },
              },
            },
            { new: true }
          )
          resolve(group2)
        }
        if (isLocal) {
          const vendor2 = await vendor.findOne({
            vendorName: body.vendor_name,
            'items.itemName': service_name,
          })
          let bool_check = false

          if (body.type == 0) {
            vendor2.items[0].subscribers.map((s) => {
              console.log(s.user_id)
              if (s.user_id.toString() == user_id) {
                bool_check = true
              }
            })
          }

          if (
            vendor2.items[0].totalSubs < vendor2.items[0].sub_limit &&
            !bool_check
          ) {
            const vendor_update = await vendor.findOneAndUpdate(
              {
                vendorName: body.vendor_name,
                'items.itemName': service_name,
              },
              {
                $push: {
                  'items.$.subscribers': { user_id: user_id.toString() },
                },
                $inc: { 'items.$.totalSubs': 1 },
              },
              {
                new: true,
              }
            )
          } else {
            console.log('Condition not met or vendor not found')
          }
        }
      } catch (err) {
        reject(err)
      }
    })
  },
}
