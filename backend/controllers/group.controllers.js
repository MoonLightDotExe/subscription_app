const dotenv = require('dotenv').config()
const groups = require('../repository/group.repository')

const addGroup = async (req, res) => {
  try {
    const data = await groups.addGroup(req.body)
    console.log(data)
    res.json({
      success: true,
      data: data,
      message: 'Group Created Successfully!',
    })
  } catch (err) {
    res.json({
      success: false,
      data: err,
      message: 'Group Creation Failed!',
    })
  }
}

const joinGroup = async (req, res) => {
  try {
    const data = await groups.joinGroup(req.body)
    console.log(data)
    res.json({
      success: true,
      data: data,
      message: 'Group Joined Successfully!',
    })
  } catch (err) {
    res.json({
      success: false,
      data: err,
      message: 'Invalid Group Code!',
    })
  }
}

module.exports = {
  addGroup,
  joinGroup,
}
