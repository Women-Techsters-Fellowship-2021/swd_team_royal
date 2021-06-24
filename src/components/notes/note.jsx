import { useParams } from "react-router-dom";
import notes from "../../assets/data/notes.json";
import { getFirst50words } from "../../utils/utils";

const Note = () => {
  let { noteId } = useParams();
  const classNote=notes.filter(
    item => item.id === noteId
)[0];
 
  return (
    <div className="container">
      <h1 className="mt-5">{classNote.title}</h1>
      <hr className="my-4" />
      <div className="jumbotron" key={classNote.id}>
        <p className="lead">{`${getFirst50words(classNote.note)} ...`}</p>
        <hr className="my-4" />
        <p>{classNote.note}</p>
      </div>
    </div>
  );
};
export default Note;
