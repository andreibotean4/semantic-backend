import express from 'express';

import getById from './getById';
import getAll from './getAll';

import create from './create';

const router = express.Router();

router.use(getById);
router.use(getAll);
router.use(create);

export default router;
