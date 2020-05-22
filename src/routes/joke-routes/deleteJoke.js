import express from 'express';

import { deleteJokeById } from '../../repositories/jokes.repository';

const router = express.Router();

router.delete('/:id', (req, res, next) => {
    return deleteJokeById(req.params.id)
        .then((response) => {
            res.json(response);
        })
        .catch(next);
});

export default router;
