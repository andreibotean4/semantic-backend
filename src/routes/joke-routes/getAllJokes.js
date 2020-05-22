import express from 'express';

import { getAllJokes } from '../../repositories/jokes.repository';

const router = express.Router();

router.get('/', (req, res, next) => {
    return getAllJokes()
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
