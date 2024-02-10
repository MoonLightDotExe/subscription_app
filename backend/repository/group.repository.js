const users = require('../models/users.models')
const groups = require('../models/groups.models')
const uniqid = require('uniqid')

const uniqueID = () => uniqid()

const addGroup = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { user_id, group_name } = body
      const unique_id = uniqueID()
      const group_new = await groups.create({
        group_name: group_name,
        group_code: unique_id,
        admin: user_id,
      })
      await group_new.save()

      try {
        const updatedUser = await users.findOneAndUpdate(
          { _id: user_id },
          { $push: { groups: group_new._id.toString() } },
          { new: true }
        )

        console.log('User updated successfully:', updatedUser)
      } catch (err) {
        console.error('Error updating user:', err)
      }
      resolve(group_new)
    } catch (err) {
      reject(err)
    }
  })
}

const joinGroup = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { user_id, group_code } = body

      const group_found = await groups.findOne({
        group_code: group_code,
      })

      let bool_check = false

      group_found.users.map((grp) => {
        if (grp.toString() === user_id) {
          bool_check = true
          reject('User already exists!')
        }
      })

      if (!bool_check) {
        const group_cont = await groups.findOneAndUpdate(
          { group_code: group_code },
          { $push: { users: user_id } },
          { new: true }
        )

        const user_found = await users.findOneAndUpdate(
          { _id: user_id },
          { $push: { groups: group_found._id.toString() } },
          { new: true }
        )

        await group_cont.save()
        await user_found.save()

        resolve(group_code)
      }
    } catch (err) {
      reject(err)
    }
  })
}

const addSplit = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { group_id, contributions } = body
      console.log(group_id.toString())

      const grp_found = await groups.findOne({ _id: group_id.toString() })
      const length = grp_found.splits.length

      for (const c of contributions) {
        try {
          console.log(c)
          const data = await groups.findOneAndUpdate(
            { _id: group_id.toString() },
            { $push: { splits: c } },
            { new: true }
          )
          console.log('DATA:')
          console.log(data)
        } catch (error) {
          console.error('Error updating group:', error)
        }
      }
      resolve(group_id)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  addGroup,
  joinGroup,
  addSplit,
}
