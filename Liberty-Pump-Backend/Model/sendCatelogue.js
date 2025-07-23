const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SendCatelogueSchema = Schema({
    name:String,
    
    catelogueName:String,
    email:String,
    description:String,
  
},
    {
        timestamps: true
    }
)

const sendCatelogue = mongoose.model('sendCatelogue', SendCatelogueSchema)

module.exports = {
    sendCatelogue
}