import React, { useState } from 'react';
import { useSharedNotes } from '../../shared/notesState';

function Header() {
    const [value, setValue] = useState('');
    const { addNote, clear } = useSharedNotes();

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const handleSendNote = () => {
        addNote(value);
        setValue("");
    };

    const handleClearNote = () => {
        clear();
    };

    return (
        <div className="header">
            <input value={value} onChange={(e) => onChangeHandler(e)} placeholder="Your note.." />
            <div className="buttons">
                <button onClick={handleSendNote}>Send Note</button>
                <button onClick={handleClearNote}>Clear </button>
            </div>
        </div>
    );
};
export default Header;