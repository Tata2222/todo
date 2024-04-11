import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Modal from './components/Modal';


function App() {
  const [todos, setTodos] = useState([]);
  
  const fetchData = () => {
    try {
      axios.get("http://127.0.0.1:8000/api/todo/").then(res => 
      setTodos(res.data));
      // const status = await response.status
      // if(status != 200) {
      //   console.log('ERROR');
      // }
      // const res = await response.data;
      // return res;
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(todos);
  return (
    <>
      <div className='min-h-screen bg-indigo-100 px-8'>
        <h1 className='text-5xl text-center'>Hello</h1>
        <p>
          {`Today's Monday`}
        </p>
        <div role="tablist" className="tabs tabs-bordered tabs-lg w-full">
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tasks" />
          <div role="tabpanel" className="tab-content p-10">
            {todos.length && (<TodoList todos={todos} />)}
            <Modal>
              <TodoForm />
            </Modal>
          </div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Boards" />
          <div role="tabpanel" className="tab-content p-10">Tab content 2</div>
        </div>
      </div>
    </>
  )
}

export default App
