import { useState } from "react";
import AddNote from "../components/notes/addnote";
import useContextGetter from "../hooks/useContextGetter";
import ViewNote from "../components/notes/viewNotes";
import { Link } from "react-router-dom";

const UserNote = () => {
  console.log("In here");
  const {
    dispatch,
    state: { userData, notes },
  } = useContextGetter();

  const userNotes = notes
    ? notes && notes.filter((item) => item.userid === userData.id)
    : [];
  console.log(userNotes);

  const [alertMessage, setAlertMessage] = useState({
    message: "",
    variant: "",
  });
  const addNote = ({ topic, note, title }) => {
    setAlertMessage({ message: "sending request...", variant: "info" });
    let newnote = {
      topic: topic,
      title: title,
      note: note,
      userid: userData.id,
      useremail: userData.email,
    };

   fetch(`https://staging-express-api.herokuapp.com/notes`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newnote),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: "NEW_NOTE",
          payload: result.data,
        });
        setAlertMessage({ message: result.message, variant: "success" });
      })
      .catch((err) => {
        console.log("this error occurred", err);
        setAlertMessage({
          message: "An error occured, please try again",
          variant: "danger",
        });
      });
  };
  const edit = () => {};
  return (
    <main>
      <div>
          <Link className="btn btn-lg my-4" to="/notes" role="button">
           view Notes
          </Link>
        </div>
      <div className="notes-container">
        <AddNote addNote={addNote} alertMessage={alertMessage} />
        <div className="note-list">
          <div className="mb-5 pb-2">
            <ViewNote notes={userNotes} url="/notes" edit={edit} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default UserNote;
