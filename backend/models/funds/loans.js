import mongoose from 'mongoose';

const loansSchema = new mongoose.Schema({
    loanId: { 
        type: String, required: true 
    },
    memberId: 
    { type: String, required: true 

    },
    memberName: { 
        type: String, required: true 

    },
    loanAmount: { 
        type: Number, required: true 
    },
    interestRate: { 
        type: Number, required: true 
    },
    loanTerm: {
         type: Number, required: true 
        }, // in months
    startDate: {
         type: Date, default: Date.now
         },
    endDate: {
         type: Date, required: true 
        },
    status: {
        type: String,
        enum: ['Pending', 'Disbursed', 'Closed'],
        default: 'Pending'
    },
    })
    export default mongoose.model('Loans', loansSchema);