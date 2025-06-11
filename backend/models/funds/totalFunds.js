import mongoose from 'mongoose';

const totalFundsSchema = new mongoose.Schema({
    totalFunds: {
        type: Number,
        default: 0
    },
    totalMembers: {
        type: Number,
        default: 0
    },
    totalLoanAmounts: {
        type: Number,
        default: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }

})
export default mongoose.model('TotalFunds', totalFundsSchema);