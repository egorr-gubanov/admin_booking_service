import React, { useState } from 'react';

const museums = [
    "МУЗЕЙ 'ДОМ И.А. МИЛЮТИНА'",
    "ХУДОЖЕСТВЕННЫЙ МУЗЕЙ",
    "ДОМ ПРИРОДЫ",
    "ВЫСТАВОЧНЫЙ ЗАЛ",
    "УСАДЬБА ГАЛЬСКИХ",
    "ДЕТСКИЙ МУЗЕЙ",
    "ЛИТЕРАТУРНЫЙ МУЗЕЙ",
    "МЕМОРИАЛЬНЫЙ ДОМ-МУЗЕЙ ВЕРЕЩАГИНЫХ",
    "МУЗЕЙ АРХЕОЛОГИИ",
    "РЕСУРСНЫЙ ЦЕНТР",
    "МУЗЕЙ АПТЕКИ",
    "МУЗЕЙ АЛЕКСАНДРА БАШЛАЧЁВА",
    "ЭКСПОЗИЦИЯ 'ПОЕЗД МИЛОСЕРДИЯ'",
    "ОТДЕЛ РЕДКОЙ КНИГИ"
];

const MuseumSelector = ({ onSelect, onClose }) => {
    const [selectedMuseum, setSelectedMuseum] = useState("");

    const handleSelect = () => {
        if (selectedMuseum) {
            onSelect(selectedMuseum);
            onClose();
        }
    };

    return (
        <div className="museum-selector">
            <div className="museum-selector-content">
                <button onClick={onClose} className="close-button">X</button>
                <ul>
                    {museums.map((museum, index) => (
                        <li
                            key={index}
                            className={selectedMuseum === museum ? "selected" : ""}
                            onClick={() => setSelectedMuseum(museum)}
                        >
                            {museum}
                        </li>
                    ))}
                </ul>
                <div className="museum-selector-buttons">
                    <button onClick={onClose}>Отменить</button>
                    <button onClick={handleSelect} disabled={!selectedMuseum}>Выбрать</button>
                </div>
            </div>
        </div>
    );
};

export default MuseumSelector;