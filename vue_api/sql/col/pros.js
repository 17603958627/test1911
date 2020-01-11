const mongoose = require('./../db');
const Schema = mongoose.Schema;

const schema = new Schema({
    proid: { type: String },
    type: { type: String },
    proname: { type: String },
    price: { type: Number },
    detail: { type: String },
    stock: { type: Number },
    sales: { type: Number },
    proimg: { type: String },
    activity: { type: Number },
    select: { type: Number },
    freeship: { type: Number },
    newgoods: { type: Number },
    zj: { type: String }
})

module.exports = mongoose.model('Pro', schema)