import {useEffect, useState} from 'react'
import './App.scss'

import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

export default function App() {
  
  const [notes, setNotes]           = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [activeNote, setActiveNote] = useState(false)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const getActiveNote = () => {
    return notes.find(({id}) => id === activeNote)
  }

  return (
    <div className='App'>  
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main 
        notes={notes}
        setNotes={setNotes}
        activeNote={getActiveNote()}
      />
    </div>
  )
  
}