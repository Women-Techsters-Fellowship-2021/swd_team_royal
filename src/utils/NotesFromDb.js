export default function NotesFromDb() {
  return fetch(`https://staging-express-api.herokuapp.com/notes`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);
      return [];
    });
}

export function getSingelNote(id) {
  return fetch(`https://staging-express-api.herokuapp.com/notes/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export function getUserNote(id) {
  return fetch(`https://staging-express-api.herokuapp.com/notes/user/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);
      return null;
    });
}
