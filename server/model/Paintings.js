const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const paintingSchema = new Schema(
    {
        title: String,
        artist: String,
        yearOfDate:Number,
        gallery: String,
        image: String
    })

    const PaintingModel = mongoose.model("paintings", paintingSchema)

    module.exports =PaintingModel