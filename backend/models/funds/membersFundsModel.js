import mongoose from 'mongoose';

const membersFundsSchema = new mongoose.Schema({
    memberId: {
        type: String,
        required: true},
    memberName: {
        type: String,
        required: true  
    },
    depositedAmount: {
        type: Number,
        default: 0},
    depositedReason: {
        type: String,
        default: 'Initial Deposit'},
    deductedAmount: {
        type: Number,
        default: 0},
    deductedReason: {
        type: String,
        default: 'Initial Deduction'},

    lastDepositDate: {
        type: Date,
        default: Date.now},
    lastDeductedDate: {
        type: Date,
        default: Date.now}
     })
    
        export default mongoose.model('MembersFunds', membersFundsSchema);