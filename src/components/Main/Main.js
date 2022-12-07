import ReactMarkdown from 'react-markdown'
import style from './Main.module.scss'

export default function Main({activeNote, notes, setNotes}) {

  const onEditField = (field, value) => {
    updateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    })
  }

  const updateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedNotesArr)
  }

  if (!activeNote) return <div className={style.noActiveNote}>No Active Note</div>

  return (
    <div className={style.main}>
      <div className={style.noteEdit}>
        <input
          type='text'
          id='title'
          placeholder='Note title...'
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
        />
        <textarea
          id='body'
          placeholder='Write your note here...'
          value={activeNote.body}
          onChange={(e) => onEditField('body', e.target.value)}
        />
      </div>
      <ReactMarkdown className={style.preview}>
        {activeNote.body}
      </ReactMarkdown>
    </div>
  )
  
}