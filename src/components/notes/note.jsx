import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFirst50words, toTitleCase } from "../../utils/utils";
// import useContextGetter from "../../hooks/useContextGetter";
import userIcon from "../../assets/images/user-icon.png";
import { getSingelNote } from "../../utils/NotesFromDb";
import Spinner from "../spinner";

const Note = () => {
  let {noteId} = useParams();
  const [classNote, setClassNote] = useState(null);
  const history=useHistory();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const note = await getSingelNote(noteId);
      // console.log(note);
      setClassNote(note);
    }, 500);
    return () => clearTimeout(timer);
  }, [classNote, noteId]);
  return (
    <div className="container">
      {!classNote && (
        <Spinner />
      )}
      {classNote && (
        <div className="jumbotron note" key={classNote._id}>
          <h1 className="mt-5 note-title">{`${toTitleCase(
            classNote.title
          )}`}</h1>
          <p className="lead">{`${getFirst50words(classNote.note)} ...`}</p>
          <hr className="my-4" />
          <p>{classNote.note}</p>
          <div className="media">
            <img className="mr-3 note-avatar" src={userIcon} alt="Note owner" />
            <div className="media-body py-2">
              {classNote.hasOwnProperty("useremail") && (
                <h6 class="mt-0 font-weight-bold">
                  <em>{new Date(classNote.createdAt).toLocaleString()}</em>
                </h6>
              )}
              <small>{new Date(classNote.createdAt).toLocaleString()}</small>
            </div>
          </div>
          <button className="btn btn-sm btn-info my-4 px-3" onClick={()=>{history.goBack()}}>Back</button>
        </div>
      )}
    </div>
  );
};
export default Note;
