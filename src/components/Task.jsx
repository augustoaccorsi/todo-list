import React from 'react';
import { FaRegTrashAlt, FaCheckCircle } from 'react-icons/fa';
import styles from './Task.module.css';
import { ImRadioUnchecked } from 'react-icons/im';

const Task = (props) => {
    return (
        <div className={styles.task}>
            <div>
                <div>
                    {props.status ? (
                        <FaCheckCircle
                            size={20}
                            className={styles.checked}
                            onClick={() => props.updateTask(props.id)}
                        />
                    ) : (
                        <ImRadioUnchecked
                            size={20}
                            className={styles.notChecked}
                            onClick={() => props.updateTask(props.id)}
                        />
                    )}
                </div>
                <p
                    className={
                        props.status
                            ? styles.textCompleted
                            : styles.textNotCompleted
                    }
                >
                    {props.name}
                </p>
            </div>
            <FaRegTrashAlt
                className={styles.delete}
                onClick={() => props.deleteTask(props.id)}
            />
        </div>
    );
};

export default Task;
