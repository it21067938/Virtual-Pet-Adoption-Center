import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    species : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    personality : {
        type : String,
        required : true
    },
    mood : {
        type : String,
        default : "Happy"
    },
    adopted : {
        type : Boolean,
        default : false
    },
    adoption_date : {
        type : Date
    }
}, { timestamps: true })

export default mongoose.model("Pet", petSchema);