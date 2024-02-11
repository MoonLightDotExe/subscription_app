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

const addSplit = async (req, res) => {
  try {
    const data = await groups.addSplit(req.body)
    console.log(data)
    res.json({
      success: true,
      data,
      message: 'Split Added Successfully!',
    })
  } catch (err) {
    res.json({
      success: false,
      error: err,
      message: 'Error adding Split!',
    })
  }
}

const getGroupDetails = async (req, res) => {
  try {
    console.log(req.body)
    const data = await groups.getGroupDetails(req.body)
    console.log(data)
    res.status(200).json({
      success: true,
      data,
      message: 'Data Got Successfully!',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
      message: 'Unable to get Group Details!',
    })
  }
}

const getSubDetails = async (req, res) => {
  try {
    const data = await groups.getSubDetails(req.body)
    console.log(data)
    res.status(200).json({
      success: true,
      data,
      message: 'Data Got Successfully!',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
      message: 'Unable to get Group Details!',
    })
  }
}

module.exports = {
  addGroup,
  joinGroup,
  addSplit,
  getGroupDetails,
  getSubDetails,
}
