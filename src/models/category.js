import mongoose from 'mongoose';

const Schema   = mongoose.Schema;

const CategorySchena = new Schema({
    
    title: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
    toObject: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;

        }
    }
});

const Category = mongoose.model('Category', CategorySchena);

export default Category;
