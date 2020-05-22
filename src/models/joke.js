import mongoose from 'mongoose';

const Schema   = mongoose.Schema;

const JokeSchena = new Schema({
    description: {
        type: String
    },
    categoryId: {
        type: Schema.Types.ObjectId, ref: 'Category'
    },
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

const Joke = mongoose.model('Joke', JokeSchena);

export default Joke;
