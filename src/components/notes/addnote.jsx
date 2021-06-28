import { useState, useRef } from "react";
import topics from "./../../assets/data/topics.json";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { countWords } from "../../utils/utils";
import { Alert } from "react-bootstrap";
import { useEffect } from "react";

const AddNote = ({ addNote, alertMessage, editNote, noteToEdit, cancel }) => {
  const editFormRef = useRef();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    getValues: getValues1,
    formState: { errors: errors1 },
  } = useForm({
    mode: "onTouched",
  });


  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleSelectChange = (e) => {
    setSelectedOption(e);
  };
  const isNUmberOfWordsValid = () => {
    if (countWords(getValues("note")) < 20) return false;

    return true;
  };

  const submit = ({ note, title }) => {
    if (selectedOption) {
      addNote({ topic: selectedOption.value, note: note, title: title });
      return true;
    }
  };

  const edit = ({ edit_note, edit_title }) => {
    editNote({ id: noteToEdit._id, note: edit_note, title: edit_title });
    return true;
  };

  useEffect(() => {
    if (noteToEdit) {
      editFormRef.current[0].value = noteToEdit.title;
      editFormRef.current[1].value = noteToEdit.note;
      return (editFormRef.current.style.display = "flex");
    }
    editFormRef.current.style.display = "none";
  }, [noteToEdit]);


  return (
    <div className="add-note-container">
      <h4 id="note-title">Would you like to share what you learnt? Add it!</h4>
      {alertMessage.message ? (
        <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>
      ) : (
        ""
      )}
      <form key={1} onSubmit={handleSubmit(submit)} id="createNote">
        <Select
          className="add-note-fields"
          name="topic"
          id="topic"

          placeholder="I want to talk about..."
          value={selectedOption}

          options={topics}
          onChange={handleSelectChange}
        />
        <p className="text-danger">
          {!selectedOption && <small>select a topic</small>}
        </p>
        <input
          className="add-note-fields"
          name="title"
          id="title"
          placeholder="Title"
          {...register("title", {
            minLength: 4,
          })}
        />
        <p className="text-danger">
          {errors.title && <small>Title must be 4 characters and above</small>}
        </p>
        <textarea
          id="note"
          name="note"
          placeholder="note"
          className="add-note-fields"
          {...register("note", {
            required: true,
            validate: isNUmberOfWordsValid,
          })}
        ></textarea>

        <p className="text-danger">

          {errors.note && <small>Your note cannot be less than 20 words</small>}
        </p>
        <button className=" btn add-note-btn" type="submit">

          Post Note
        </button>
      </form>
      <form
        key={2}
        id="editform"
        onSubmit={handleSubmit1(edit)}
        className="container"
        style={{
          display: "none",
          position: "fixed",
          background: "#ffffff",
          width: "100%",
          maxWidth: "600px",
          zIndex: 10,
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
        ref={editFormRef}
      >
        {alertMessage.message ? (
          <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>
        ) : (
          ""
        )}
        <input
          className="add-note-fields"
          name="edit_title"
          id="edit_title"
          defaultValue={
            editFormRef.current ? editFormRef.current[0].value : null
          }
          placeholder="Title"
          {...register1("edit_title", {
            minLength: 4,
          })}
        />
        <p className="text-danger">
          {errors1.edit_title && (
            <small>Title must be 4 characters above</small>
          )}
        </p>
        <textarea
          id="edit_note"
          name="edit_note"
          placeholder="note"
          className="add-note-fields"
          defaultValue={
            editFormRef.current ? editFormRef.current[1].value : null
          }
          {...register1("edit_note", {
            required: true,
            validate: () => {
              if (countWords(getValues1("edit_note")) < 20) return false;
              else return true;
            },
          })}
        ></textarea>
        <p className="text-danger">
          {errors1.edit_note && (
            <small>Your note must be more than 20 words</small>
          )}
        </p>
        <div className="d-flex flex-row justfy-content-between pb-3">
          <button className="add-note-btn" type="submit">
            Edit Note
          </button>
          <button className="add-note-btn" type="button" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNote;