import Joke from '../models/joke';
import { NotFoundError, InternalServerError } from '../error';

export const getJokeById = (id) => {
    return Joke.findById(id)
        .then((joke) => {
            if (!joke) return Promise.reject(new NotFoundError('Joke not found.'));

            return joke.toObject()
        })
}

export const getAllJokes = () => {
    return Joke.find()
}

export const getJokesByCategoryId = (categoryId) => {
    return Joke.find({ categoryId })
}
export const createJoke = (description, title, categoryId ) => {
    const joke = new Joke({
        categoryId,
        description,
        title
    })
    return joke
        .save()
        .catch((err) => Promise.reject(new InternalServerError(err)))
        .then((joke) => joke.toObject())
        
}

export const deleteJokeById = (id) => {
    return Joke.deleteOne({ _id: id })
}