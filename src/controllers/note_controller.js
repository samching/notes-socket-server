import Note from '../models/note_model';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.remove({ id }).then((note) => {
  });
};

export const createNote = (fields) => {
  const note = new Note();
  note.id = fields.id;
  note.title = fields.title;
  note.position = fields.position;
  note.text = fields.text;
  note.zIndex = fields.zIndex;
  note.isEditing = fields.isEditing;
  return note.save();
};

export const updateNote = (id, fields) => {
  return Note.findOne({ id })
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
