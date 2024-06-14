import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import './EventSettings.css'; // Подключаем файл стилей
import MuseumSelector from './MuseumSelector';

// Регистрация русской локали для календаря
registerLocale('ru', ru);

const EventSettings = ({ event, onClose }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [times, setTimes] = useState({});
    const [seats, setSeats] = useState(0);
    const [selectedMuseum, setSelectedMuseum] = useState("");
    const [showMuseumSelector, setShowMuseumSelector] = useState(false);
    const [timeTable, setTimeTable] = useState([]);

    const handleTimeChange = (day, type, value) => {
        setTimes((prevTimes) => ({
            ...prevTimes,
            [day]: {
                ...prevTimes[day],
                [type]: value,
            },
        }));
    };

    const generateTimeTable = () => {
        const table = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const day = currentDate.getDay();
            if (times[day]) {
                table.push({
                    date: new Date(currentDate),
                    times: Object.values(times[day]),
                    seats,
                });
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        setTimeTable(table);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generateTimeTable();
    };

    return (
        <div className="event-settings">
            <div className="event-settings-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Место проведения:</label>
                        <input
                            type="text"
                            value={selectedMuseum}
                            readOnly
                            onClick={() => setShowMuseumSelector(true)}
                        />
                    </div>
                    <div>
                        <label>Даты проведения:</label>
                        <div className="date-range">
                            <div>
                                <label>Начало</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    locale="ru"
                                    dateFormat="dd.MM.yyyy"
                                    placeholderText="Начало"
                                />
                            </div>
                            <div>
                                <label>Конец</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    locale="ru"
                                    dateFormat="dd.MM.yyyy"
                                    placeholderText="Конец"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Время проведения:</label>
                        {['1', '2', '3', '4', '5', '6', '0'].map((day) => (
                            <div key={day}>
                                <label>{['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][day]}</label>
                                <div className="time-range">
                                    <select
                                        value={times[day]?.start || ""}
                                        onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                                    >
                                        <option value="">Начало</option>
                                        <option value="9:00">9:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="12:00">12:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                    </select>
                                    <select
                                        value={times[day]?.end || ""}
                                        onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                                    >
                                        <option value="">Конец</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="12:00">12:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                        <option value="18:00">18:00</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <label>Количество мест:</label>
                        <input
                            type="number"
                            value={seats}
                            onChange={(e) => setSeats(e.target.value)}
                            placeholder="Введите количество билетов"
                        />
                    </div>
                    <button type="submit">Сохранить</button>
                </form>
                {showMuseumSelector && (
                    <MuseumSelector
                        onSelect={(museum) => {
                            setSelectedMuseum(museum);
                            setShowMuseumSelector(false);
                        }}
                        onClose={() => setShowMuseumSelector(false)}
                    />
                )}
                {timeTable.length > 0 && (
                    <table className="event-table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Дата</th>
                            <th>Время</th>
                            <th>Места</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {timeTable.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.date.toLocaleDateString('ru-RU')}</td>
                                <td>
                                    {entry.times.map((time, i) => (
                                        <span key={i} className="time-badge">{time}</span>
                                    ))}
                                </td>
                                <td>{entry.seats}</td>
                                <td className="actions">
                                    <button className="edit">✏️</button>
                                    <button className="delete">🗑️</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default EventSettings;