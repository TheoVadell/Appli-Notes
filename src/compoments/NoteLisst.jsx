export default function NoteList({ notes, onRemoveBtn }) {
    const listNotes = notes.map((note, index) => (
        <li key={index}>
            {note.text}
            &nbsp;
            <button onClick={(event) => onRemoveBtn(note)}>Supprimer</button>
        </li>
    ));

    return (
        <>  
            <p>A NOTE LIST</p>
            <ul>{listNotes}</ul>    
        </>
    );
}
