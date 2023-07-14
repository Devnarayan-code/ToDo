import axios from "axios";

const baseUrl = "https://todo-backend-vnr2.onrender.com";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("getalltodo -->", data);
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      setText("");
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (toDoId, text, setText, setTodo, setisUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text: text })
    .then((data) => {
      console.log("data updated suuccessfully", data);
      setText("");
      getAllTodo(setTodo);
      setisUpdating(false);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then((data) => {
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
