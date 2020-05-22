import Category from '../models/category';
import { NotFoundError } from '../error';

export const getCategoryById = (id) => {
    return Category.findById(id)
        .then((category) => {
            if (!category) return Promise.reject(new NotFoundError('Category not found.'));

            return category.toObject()
        })
}

export const getCategories = () => {
    return Category.find()
}

export const createCategory = (title) => {
    const category = new Category({
        title
    })
    return category
        .save()
        .catch((err) => Promise.reject(new InternalServerError(err)))
        .then((category) => category.toObject())
        
}