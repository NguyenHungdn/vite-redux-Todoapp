import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/action';
import { v4 as uuIdv4 } from 'uuid';
import { useState } from 'react';
import { todoListSelector, todoRemainingSelector } from '../../redux/selectors';
export default function TodoList() {
   const [todoName, setTodoName] = useState('');
   const [priority, setPriority] = useState('Medium');
   // const todoList = useSelector((state) => state.todoList);
   // const todoList = useSelector(todoListSelector);
   const todoList = useSelector(todoRemainingSelector);
   const dispatch = useDispatch();
   const handleAddButtonClick = () => {
      dispatch(
         addTodo({
            id: uuIdv4(),
            name: todoName,
            priority: priority,
            completed: false,
         }),
      );
      setTodoName('');
      setPriority('Medium');
   };
   const handleInputChange = (e) => {
      setTodoName(e.target.value);
   };
   const handlePriorityChange = (value) => {
      setPriority(value);
   };
   return (
      <Row style={{ height: 'calc(100% - 40px)' }}>
         <Col
            span={24}
            style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
         >
            {todoList.map((todo) => {
               return (
                  <Todo
                     key={todo.id}
                     name={todo.name}
                     priority={todo.priority}
                     completed={todo.completed}
                     id={todo.id}
                  />
               );
            })}
         </Col>
         <Col span={24}>
            <Input.Group style={{ display: 'flex' }} compact>
               <Input
                  value={todoName}
                  placeholder="Input Todo Here"
                  onChange={handleInputChange}
               />
               <Select
                  defaultValue="Medium"
                  value={priority}
                  onChange={handlePriorityChange}
               >
                  <Select.Option value="High" label="High">
                     <Tag color="red">High</Tag>
                  </Select.Option>
                  <Select.Option value="Medium" label="Medium">
                     <Tag color="blue">Medium</Tag>
                  </Select.Option>
                  <Select.Option value="Low" label="Low">
                     <Tag color="gray">Low</Tag>
                  </Select.Option>
               </Select>
               <Button type="primary" onClick={handleAddButtonClick}>
                  Add
               </Button>
            </Input.Group>
         </Col>
      </Row>
   );
}
