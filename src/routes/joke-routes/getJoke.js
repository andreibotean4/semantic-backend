import express from 'express';

import { getJokeById } from '../../repositories/jokes.repository';

const router = express.Router();

router.get('/:id', (req, res, next) => {
    return getJokeById(req.params.id)
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
