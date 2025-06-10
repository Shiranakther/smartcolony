import express from 'express';
import {addMember} from '../controller/membersController.js';

const router = express.Router();

router.post('/addMember', addMember);

export default router;