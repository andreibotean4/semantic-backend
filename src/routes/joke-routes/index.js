import express from 'express';

import getJoke from './getJoke';
import getAllJokes from './getAllJokes';
import getAllJokesByCategory from './getJokesByCategory';
import createJoke from './createJoke';
import deleteJoke from './deleteJoke';

const router = express.Router();

router.use(getJoke);
router.use(getAllJokes);
router.use(getAllJokesByCategory);
router.use(createJoke);
router.use(deleteJoke);

export default router;
