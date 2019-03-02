/*
* @ use 首页schema
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indexSectionSchema = new Schema({

    title: { type: String, required: true },
    link: [{ type: String, required: true }],
    detail: [{ bigImg: String, itemFour: [{ title: String, intro: String, img: String }], itemContent: [{ type: String }] }],
});

export default mongoose.model('indexSection', indexSectionSchema);