const mongoose = require('../db.js');
const Schema = mongoose.Schema;
const addressSchema = new Schema({ // 地址集合
  addressid: {type: String },
  userid: { type: String },
  name: { type: String },
  tel: { type: String },
  province: { type: String },
  county: { type: String },
  city: { type: String },
  postalCode: { type: String },
  areaCode: { type: String },
  addressDetail: { type: String },
  flag: { type: Number } // 是不是默认地址 1 表示默认地址 0 不是默认地址
})
module.exports = mongoose.model('Address', addressSchema);
