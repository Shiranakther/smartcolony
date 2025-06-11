import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({

    meetingID:{
        type:String,
        required:true,
        unique:true
    },
    meetingName:{
        type:String,
        required:true
    },
    meetingDate:{
        type:Date,
        required:true,
        default: Date.now
    },
    attendees:{
       type: [String], // Array of member IDs
       default: []
    }
    })
        export default mongoose.model('Meetings', meetingSchema);