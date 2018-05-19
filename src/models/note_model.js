import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  id: Number,
  title: String,
  position: { x: Number, y: Number },
  zIndex: Number,
  isEditing: Boolean,
  text: String,
});

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
