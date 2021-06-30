import { Link } from "react-router-dom";
import { getFirst50words,toTitleCase } from "../../utils/utils";
import userIcon from "../../assets/images/user-icon.png";

const ViewNote =({notes,url,edit})=>{
    return(
        <div>
          {notes && !notes.length && (
            <p className="text-info lead">
              Notes will be available soon!!! You can also add
              lessons you have learnt <Link to="/add/note" className="add-note">here.</Link>
            </p>
          )}
          {notes && notes.map((note) => {
            return (
                <div className='d-flex p-2'>
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
                    {/* {note.hasOwnProperty("useremail") && (
                      <h6 class="mt-0 font-weight-bold">
                      <em>{new Date(note.createdAt).toLocaleString()}</em>
                    </h6>
                    )} */}
                    <h6 className="mt-0">
                      {new Date(note.createdAt).toLocaleString()}
                    </h6>
                  </div>
                </div>
                <Link
                  className="btn btn-lg my-4"
                  to={`${url}/${note._id}`}
                  role="button"
                >
                  See more
                </Link> &nbsp;
                {edit && (
                    <span
                    className="btn btn-lg my-4"
                    role="button"
                  >
                    Edit Note
                  </span>
                )}
                <hr className="my-4" />
                </div>
              </div>
            );
          })}
        </div>
    );
}

export default ViewNote;