import { Link } from "react-router-dom";
import { getFirst50words,toTitleCase } from "../../utils/utils";
import userIcon from "../../assets/images/user-icon.png";

const ViewNote =({notes,url,edit})=>{
    return(
        <div>
          {!notes.length && (
            <p className="text-info lead">
              Notes will be available soon!!! You can also help by adding a
              lesson you learnt <Link to="/add/note">here</Link>
            </p>
          )}
          {notes.map((note) => {
            return (
              <div className="container note my-3 py-3 px-4" key={note._id}>
                <h2>{`${toTitleCase(note.title)}`}</h2>
                <p className="lead">{`${getFirst50words(note.note, 30)}...`}</p>
                <div className="media">
                  <img
                    className="mr-3 note-avatar"
                    src={userIcon}
                    alt="Note owner"
                  />
                  <div className="media-body">
                    {note.hasOwnProperty("useremail") && (
                      <h6 class="mt-0 font-weight-bold">
                      <em>{new Date(note.createdAt).toLocaleString()}</em>
                    </h6>
                    )}
                    <small className="mt-0">
                      {new Date(note.createdAt).toLocaleString()}
                    </small>
                  </div>
                </div>
                <Link
                  className="btn btn-info btn-lg my-4"
                  to={`${url}/${note._id}`}
                  role="button"
                >
                  See more
                </Link> &nbsp;
                {edit && (
                    <span
                    className="btn btn-info btn-lg my-4"
                    role="button"
                  >
                    Edit
                  </span>
                )}
                <hr className="my-4" />
              </div>
            );
          })}
        </div>
    );
}

export default ViewNote;