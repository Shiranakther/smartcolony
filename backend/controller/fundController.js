import membersFunds from '../models/funds/membersFundsModel.js';

const getMembersFunds = async (req, res) =>
    {
        try {
            const { memberId } = req.params;
            const funds = await membersFunds.find({ memberId: memberId });
            if (!funds) {
                return res.status(404).json({ message: 'No funds found for this member' });
            }
            res.status(200).json(funds);
        } catch (error) {
            console.error('Error fetching member funds:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
;