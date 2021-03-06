const mongoose = require('mongoose');

// we use Schema to set our own blueprint for each instance in this collection
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  // unless you have more than 1 property defined, you need to use: {type: String}
  // firstName: { type: String },
  title: String,
  description: String,
  // we want to reference authors inside the book model and for that we will use their ID's
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  rating: Number,
  image_url: String 
}, {
  // keep record on when created and updated
  timestamps: true
})

// we create Book class based on these previously defined rules
const Book = mongoose.model("Book", bookSchema);


// export Book class to make it available in other files
module.exports = Book;