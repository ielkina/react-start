/* eslint-disable no-unused-vars */
// import React, { Component } from "react";
import { nanoid } from "nanoid";

// import ToDo from "components/ToDo/ToDo";
import ToDo from "../ToDo/ToDo";
// import FormToDo from "components/FormToDo/FormToDo";
// import FormLogin from "../FormLogin/FormLogin";
import FormToDo from "../FormToDo/FormToDo";
// // import todo from "data/todo.json";
// import todo from "../../data/data.json";

//компонент ToDoList на классах

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

//переписываем на хуки

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ToDoList = () => {
  const [todoList, setTodoList] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("todo");
    if (storage) setTodoList(JSON.parse(storage));
  }, []);
  //JSON.parse() - метод, который преобразует строку в объект JavaScript
  //JSON.stringify() - метод, который преобразует объект JavaScript в строку

  useEffect(() => {
    todoList && localStorage.setItem("todo", JSON.stringify(todoList)); //  если todoList существует, то сохраняем его в localStorage
  }, [todoList]); // useEffect - хук, который позволяет выполнять побочные эффекты в функциональных компонентах React. Он принимает два аргумента: функцию и массив зависимостей. Функция будет выполнена после рендера компонента, а массив зависимостей определяет, когда функция должна быть вызвана повторно.

  // useEffect(() => {
  //   if (todoList.length > 0) {
  //     localStorage.setItem("todo", JSON.stringify(todoList));
  //     setIsCreate(true);
  //     setTimeout(() => {
  //       setIsCreate(false);
  //     }, 1500);
  //   }
  // }, [todoList]);
  //или
  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todoList));
  //   if (todoList.length > 0) {
  //     setIsCreate(true);
  //     const timer = setTimeout(() => setIsCreate(false), 1500);
  //     return () => clearTimeout(timer);
  //   }
  // }, [todoList]);

  const handleCheckCompleted = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //handleCheckCompleted - функция, которая принимает id задачи и обновляет состояние todoList, изменяя свойство completed у задачи с соответствующим id на противоположное значение (true/false). Она использует метод map для создания нового массива todoList, в котором только задача с переданным id будет изменена, а остальные останутся без изменений.

  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    toast.error("To-do delete successfully!");
    setIsDelete(true);
    setTimeout(() => {
      setIsDelete(false);
    }, 1500);
  };

  //handleDelete - функция, которая принимает id задачи и обновляет состояние todoList, удаляя задачу с соответствующим id. Она использует метод filter для создания нового массива todoList, в котором только задачи, не имеющие переданный id, останутся.

  const addToDo = (value) => {
    setTodoList((prev) => [
      ...prev, // распыляем массив prev
      {
        id: nanoid(),
        title: value,
        completed: false,
      },
    ]);
    toast.success("Create to-do successfully!");
    setIsCreate(true);
    setTimeout(() => {
      setIsCreate(false);
    }, 1500);
  };
  //addToDo - функция, которая принимает значение value и добавляет новую задачу в состояние todoList. Она использует метод spread operator (...) для создания нового массива todoList, в который добавляется новая задача с уникальным id, переданным значением title и свойством completed, установленным в false.

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
