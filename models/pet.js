
const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
"use strict";

const mongoosePaginate = require('mongoose-paginate');

mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};

const PetSchema = new Schema({
    name            : { type: String, required: true }
  , species         : { type: String }
  , birthday        : { type: Date }
  , picUrl          : { type: String }
  , picUrlSq        : { type: String }
  , favoriteFood    : { type: String }
  , description     : { type: String }
},
{
  timestamps: true
});

PetSchema.plugin(mongoosePaginate);

// This line is the same as before
module.exports = mongoose.model('Pet', PetSchema);