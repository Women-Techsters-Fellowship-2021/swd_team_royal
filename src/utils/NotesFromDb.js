export default function NotesFromDb() {
  return fetch(`http://localhost:8001/posts`, {
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
  return fetch(`http://localhost:8001/posts${id}`, {
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
  return fetch(`http://localhost:8001/posts${id}`, {
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
