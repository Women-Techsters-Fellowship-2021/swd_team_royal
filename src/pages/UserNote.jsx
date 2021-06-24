import { useState } from "react";
import AddNote from "../components/notes/addnote";
import useContextGetter from "../hooks/useContextGetter";



const UserNote = () => {
  const { dispatch,
    state: { userData },
  } = useContextGetter();
  const [alertMessage, setAlertMessage]=useState({
    message: "",
    variant: "",
  });
  const addNote = ({ topic, note, title }) => {

    setAlertMessage({message: "sending request...", variant:"info"});
    let newnote = {
      topic: topic,
      title: title,
      note:note,
      userid: "10", 
    };
    
    console.log(newnote);
    fetch(`https://staging-express-api.herokuapp.com/notes`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newnote),
    })
      .then((res) => res.json())
      .then((result) => { 
        dispatch({
          type: "NEW_NOTE",
          payload: result.data
        });
        setAlertMessage({message: result.message, variant:"success"});
      })
      .catch((err) => {
        console.log("this error occurred", err);
        setAlertMessage({message: "An error occured, please try again", variant:"danger"});
      });
  };

  return (
    <main>
      <div className="notes-container">
        <AddNote addNote={addNote} alertMessage={alertMessage}/>
        <div className="note-list">
          <div className="note">
            <h5>Note 1</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus obcaecati sequi fugiat voluptates voluptatibus.
              Eveniet labore officia animi ipsam ducimus. Inventore alias cumque
              temporibus, magni incidunt quasi perspiciatis nesciunt at rerum
              voluptate, dolorum nobis? Fugit sit odit minus? Voluptatibus,
              tempora alias in veniam itaque labore, eius officia quam, aliquid
              voluptas incidunt error iste illum. Magni reiciendis, itaque
              corrupti, at fugit eum voluptates quam, fuga sed quibusdam
              deserunt! Amet aperiam consequuntur omnis voluptate ad accusamus
              assumenda? Ratione fugit expedita aut obcaecati fuga neque,
              beatae, ad itaque veniam enim ea ex nisi dolorem possimus adipisci
              repellendus. Molestiae, dolores exercitationem necessitatibus
              error vitae fugiat dignissimos, totam quod enim unde iusto
              voluptas odit animi ipsum vel rerum quam culpa! Dignissimos dolor
              quasi deleniti ad nemo, voluptates molestias eligendi tenetur,
              aliquam veniam minima obcaecati iusto inventore sunt. Soluta magni
              ratione, fuga voluptatem nisi, distinctio alias eius quibusdam
              nihil rerum assumenda quasi est adipisci! Autem optio sint unde,
              at illum deleniti nulla tempora totam labore molestias dignissimos
              quidem exercitationem temporibus modi illo nostrum impedit! Beatae
              iusto consequuntur, alias doloribus earum cumque, officiis
              incidunt fugiat autem quibusdam ullam repellat quae quaerat
              quisquam eos. Beatae vel inventore aspernatur quasi quidem
              molestiae veritatis, praesentium repudiandae deserunt recusandae
              quia quod.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default UserNote;
