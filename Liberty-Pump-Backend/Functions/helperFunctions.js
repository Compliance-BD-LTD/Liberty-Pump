
const { cloudinary } = require("../Cloudinary/cloudinary");
const { extractPublicId } = require("cloudinary-build-url");
 const deleteImage=async (imageUrl)=>{

    let publicKey=[]
    imageUrl.forEach(url => {
        const publicId=extractPublicId(url)
        publicKey.push(publicId)
    });
    
    await cloudinary.api.delete_resources(publicKey, (error, result) => {
        if (error) {
            return false
        } 
       
    }
    )
    return true

    

}

// deleteImage(['https://res.cloudinary.com/des05ruq7/image/upload/v1753275000/cle82wqj2vdxiw9kxaoq.jpg'])

module.exports={
    deleteImage}