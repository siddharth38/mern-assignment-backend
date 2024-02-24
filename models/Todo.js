const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	due_date: {
		type: String,
		required: false,
	},
	complete: {
		type: Boolean,
		default: false
	},
	timestamp: {
		type: String,
		default: Date.now()
	}
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;