import React from 'react';
import { useSharedNotes } from '../../shared/notesState';

export default function Content() {
    const { notes } = useSharedNotes();
    let li = notes.map((note, index) => {
        return <li key={index}>{note}</li>
    })

    return (
        <div className="content">
            <ul>
                {li}
            </ul>
        </div>
    );

};

