import {v4 as uuidv4} from 'uuid'
import style from './Sidebar.module.scss'

export default function Sidebar({notes, setNotes, activeNote, setActiveNote}) {

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: 'Note title...',
      body: '',
      lastModified: Date.now(),
    }
    setNotes([newNote, ...notes])
    setActiveNote(newNote.id)
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId))
  }

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

  return (
    <div className={style.sadebar}>
      <div className={style.header}>
        <h1 className={style.title}>Notes</h1>
        <button className={style.addNote} 
          onClick={addNote}>
          Add Note
        </button>
      </div>
      <div>
        <ul className={style.notes}>
          {sortedNotes.map(({id, title, lastModified}, i) => (
            <li className={`${style.note} ${id === activeNote && `${style.note_active}`}`}
              onClick={() => setActiveNote(id)}>
              <div className={style.info}>
                <h2 className={style.titleNote}>{title}</h2>
                <p className={style.lastModified}>
                  Last Modified{' '}
                  {new Date(lastModified).toLocaleDateString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <button className={style.deleteNote}
                onClick={() => deleteNote(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
  
}