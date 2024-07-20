import React, { useState } from 'react';
import styles from './Todo.module.css';
import { TbCirclePlus } from 'react-icons/tb';
import noData from '../assets/noDataIcon.svg';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';

const generateTask = (name) => {
    return {
        id: uuidv4(),
        name: name,
        status: false, // false => not completed | true => complted
    };
};

const getCompletedMessage = (tasks) => {
    const completed = tasks.filter((task) => task.status).length;
    return `${completed} of ${tasks.length}`;
};

const Todo = () => {
    const [tasks, setTasks] = useState([
        generateTask(
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        ),
    ]);
    const [currTask, setCurrTask] = useState('');
    const completed = getCompletedMessage(tasks);

    const handleCreateTask = () => {
        if (currTask.length === 0) {
            return;
        }
        const newTask = generateTask(currTask);
        setTasks([...tasks, newTask]);
        setCurrTask('');
    };

    const updateTask = (updatedId) => {
        setTasks(
            tasks.map((task) =>
                task.id === updatedId ? { ...task, status: !task.status } : task
            )
        );
    };

    const deleteTask = (deletedId) => {
        setTasks(tasks.filter((task) => task.id !== deletedId));
    };

    return (
        <div className={styles.all}>
            <div className={styles.todo}>
                <div className={styles.create}>
                    <input
                        value={currTask}
                        onChange={(event) => setCurrTask(event.target.value)}
                        className={styles.input}
                        placeholder="Add a new task"
                    />
                    <button
                        className={styles.button}
                        onClick={handleCreateTask}
                    >
                        Create
                        <TbCirclePlus size={20} />
                    </button>
                </div>

                <div>
                    <div className={styles.displayHeader}>
                        <div>
                            <span className={styles.createdTasks}>
                                Created Tasks
                            </span>
                            <div className={styles.badge}>{tasks.length}</div>
                        </div>
                        <div>
                            <span className={styles.completedTasks}>
                                Completed
                            </span>
                            <div className={styles.badge}>{completed}</div>
                        </div>
                    </div>
                </div>
            </div>

            {tasks.length > 0 ? (
                <div>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            name={task.name}
                            status={task.status}
                            id={task.id}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.noData}>
                    <img src={noData} alt="no data" />
                    <p>You don't have tasks registered yet</p>
                    <p>Create tasks and organize your to-do items</p>
                </div>
            )}
        </div>
    );
};

export default Todo;
