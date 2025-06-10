import express from 'express';
import {addMember,viewMembers} from '../controller/membersController.js';

const router = express.Router();

router.post('/addMember', addMember);
router.get('/viewMembers',viewMembers);

export default router;