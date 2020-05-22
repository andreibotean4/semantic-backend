import express from 'express';

import { getJokesByCategoryId } from '../../repositories/jokes.repository';

const router = express.Router();

router.get('/category/:id', (req, res, next) => {
    return getJokesByCategoryId(req.params.id)
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
