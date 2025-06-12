import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    itemCode:{
        type: String,
        required: true,
        unique: true
    },
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    pricePerItem: {
        type: Number,
        default: 0
    },
    totalValue: {
        type: Number,
        default: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model("Inventory", inventorySchema);