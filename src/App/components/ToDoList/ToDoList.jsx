/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from "react";
import { nanoid } from "nanoid"; //пакет
import toast from "react-hot-toast"; //пакет для уведомлений
// import FormLogin from "../FormLogin/FormLogin";
import ToDo from "../ToDo/ToDo";
import FormToDo from "../FormToDo/FormToDo";
// // import todo from "data/todo.json";
// import todo from "../../data/data.json";

/***************мой вариант************************ */

const ToDoList = () => {
  const [todoList, setTodoList] = useState("");
  // const [isDelete, setIsDelete] = useState(false);
  // const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    const localStorageTodo = localStorage.getItem("todo");
    if (localStorageTodo) {
      setTodoList(JSON.parse(localStorageTodo));
    }
  }, []);

  useEffect(() => {
    todoList && localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = (id) => {
    setTodoList((prevState) => {
      return prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = (id) => {
    setTodoList((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
    toast.error("To-do delete successfully!"); //выводим уведомление об успешном удалении

  };
  const addToDo = (value) => {
    setTodoList((prevState) => {
      return [
        ...prevState,
        {
          id: nanoid(),
          title: value,
          completed: false,
        },
      ];
    });
    toast.success("Create to-do successfully!"); //выводим уведомление об успешном создании

  };

  return (
    <>
      {/* popup */}
      {/* {isDelete && (
        <div className="alert alert-danger" role="alert">
          To-do delete successfully!
        </div>
      )}
      {isCreate && (
        <div className="alert alert-success" role="alert">
          Create to-do successfully!
        </div>
      )} */}
      
       {/* заменяем попап на toast  */}
      <FormToDo addToDo={addToDo} />
      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;

/****************************** */

// const ToDoList = () => {
//   //стате переписываем на хуки
//   const [todoList, setTodoList] = useState([]);
//   const [isDelete, setIsDelete] = useState(false);
//   const [isCreate, setIsCreate] = useState(false);

//   useEffect(() => {
//     const localStorageTodo = localStorage.getItem("todo");
//     if (localStorageTodo) {
//       setTodoList(JSON.parse(localStorageTodo));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todo", JSON.stringify(todoList));
//     if (isDelete) {
//       setTimeout(() => {
//         setIsDelete(false);
//       }, 1500);
//     }
//     if (isCreate) {
//       setTimeout(() => {
//         setIsCreate(false);
//       }, 1500);
//     }
//   }, [todoList, isDelete, isCreate]);

//   const handleCheckCompleted = (id) => {
//     setTodoList((prevState) => {
//       return prevState.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       );
//     });
//   };

//   const handleDelete = (id) => {
//     setTodoList((prevState) => {
//       return prevState.filter((todo) => todo.id !== id);
//     });
//     // setIsDelete(true);
//   };

//   const addToDo = (value) => {
//     setTodoList((prevState) => {
//       return [
//         ...prevState,
//         {
//           id: nanoid(),
//           title: value,
//           completed: false,
//         },
//       ];
//     });
//     // setIsCreate(true);
//   };

//   return (
//     <>
//       {/* popup */}
//       {isDelete && (
//         <div className="alert alert-danger" role="alert">
//           To-do delete successfully!
//         </div>
//       )}
//       {isCreate && (
//         <div className="alert alert-success" role="alert">
//           Create to-do successfully!
//         </div>
//       )}

//       <FormToDo addToDo={addToDo} />
//       {todoList && (
//         <ul className="list-group list-group-flush">
//           {todoList.map((todo) => (
//             <ToDo
//               key={todo.id}
//               todo={todo}
//               handleCheckCompleted={handleCheckCompleted}
//               handleDelete={handleDelete}
//             />
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default ToDoList;

// class ToDoList extends Component {
//   state = {
//     todoList: "",
//     isDelete: false,
//     isCreate: false,
//   };

//   componentDidMount() {
//     // localStorage.setItem('todo', JSON.stringify(todo))
//     if (localStorage.getItem("todo"))
//       this.setState({
//         todoList: JSON.parse(localStorage.getItem("todo")),
//       });
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.todoList.length > this.state.todoList.length) {
//       localStorage.setItem("todo", JSON.stringify(this.state.todoList));
//       this.setState({
//         isDelete: true,
//         // todo: localStorage.getItem('todo'),
//       });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 1500);
//     }
//     if (prevState.todoList.length < this.state.todoList.length) {
//       localStorage.setItem("todo", JSON.stringify(this.state.todoList));
//       this.setState({
//         isCreate: true,
//         // todo: localStorage.getItem('todo'),
//       });
//       setTimeout(() => {
//         this.setState({ isCreate: false });
//       }, 1500);
//     }
//   }

//   handleCheckCompleted = (id) => {
//     this.setState((prevState) => ({
//       todoList: prevState.todoList.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   handleDelete = (id) => {
//     this.setState((prev) => ({
//       todoList: prev.todoList.filter((todo) => todo.id !== id),
//     }));
//   };

//   addToDo = (value) => {
//     this.setState((prev) => {
//       return {
//         todoList: [
//           ...prev.todoList,
//           {
//             id: nanoid(),
//             title: value,
//             completed: false,
//           },
//         ],
//       };
//     });
//   };

//   render() {
//     return (
//       <>
//         {/* popup */}
//         {this.state.isDelete && (
//           <div className="alert alert-danger" role="alert">
//             To-do delete successfully!
//           </div>
//         )}
//         {this.state.isCreate && (
//           <div className="alert alert-success" role="alert">
//             Create to-do successfully!
//           </div>
//         )}

//         <FormToDo addToDo={this.addToDo} />
//         {this.state.todoList && (
//           <ul className="list-group list-group-flush">
//             {this.state.todoList.map((todo) => (
//               <ToDo
//                 key={todo.id}
//                 todo={todo}
//                 handleCheckCompleted={this.handleCheckCompleted}
//                 handleDelete={this.handleDelete}
//               />
//             ))}
//           </ul>
//         )}
//       </>
//     );
//   }
// }

// export default ToDoList;
