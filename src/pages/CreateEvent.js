import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [times, setTimes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика для создания мероприятия
    };

    return (
        <div>
            <h1>Создать мероприятие</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Название мероприятия</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Начальная дата</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div>
                    <label>Конечная дата</label>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>
                <div>
                    <label>Время</label>
                    <input type="text" value={times.join(', ')} onChange={(e) => setTimes(e.target.value.split(', '))} />
                </div>
                <button type="submit">Создать</button>
            </form>
        </div>
    );
};

export default CreateEvent;