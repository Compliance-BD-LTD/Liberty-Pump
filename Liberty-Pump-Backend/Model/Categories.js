const mongoose=require('mongoose')

const Schema=mongoose.Schema

const CategorySchema=Schema({

    name:String,
    subCategory:[String],
    imageUrl:[String],
    bannerImgUrl:[String],
    
    
},
{
    timestamps:true
}
)

const Categories=mongoose.model('categories',CategorySchema)

module.exports={
    Categories
}