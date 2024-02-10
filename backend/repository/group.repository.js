const users = require('../models/users.models')

const addGroup = (body) => {
  return new Promise((resolve, reject) => {
    try {
      const user_id = body.user_id
      resolve(user_id)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  addGroup,
}
