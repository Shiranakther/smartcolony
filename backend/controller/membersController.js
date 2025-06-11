import Member from '../models/memberModel.js';

const viewMembers = async (req, res) => {
    try {
        const members = await Member.find(); // fetch all members from DB
        res.status(200).json(members); // success response
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch members', error: error.message });
    }
}

const addMember = async (req, res) => {
        try {
        const newMember = new Member(req.body); // use request body directly
        const savedMember = await newMember.save(); // save to DB

        res.status(201).json(savedMember); // success response
    } catch (error) {
        res.status(500).json({ message: 'Failed to create member', error: error.message });
    }
}



export { addMember,viewMembers };