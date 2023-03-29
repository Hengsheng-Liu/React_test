import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
const Old_App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
    }, [])
    console.log('render', notes.length, 'notes')
    //this function handle input change
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    const addNote = event => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
        }

        axios
            .post('http://localhost:3001/notes', noteObject)
            .then(response => {
                console.log(response)
                setNotes(notes.concat(response.data))
                setNewNote('')
            })
    }
    const toggleImportanceOf = id => {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}

        axios.put(url, changedNote).then(response => {
            setNotes(notes.map(n => n.id !== id ? n : response.data))
        })
    }
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note}
                          toggleImportance={() => toggleImportanceOf(note.id)}/>
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}
/**
 * const baseUrl = 'http://localhost:3001/notes'
 *
 * const getAll = () => {
 *   const request = axios.get(baseUrl)
 *   return request.then(response => response.data)
 * }
 *
 * const create = newObject => {
 *   const request = axios.post(baseUrl, newObject)
 *   return request.then(response => response.data)
 * }
 *
 * const update = (id, newObject) => {
 *   const request = axios.put(`${baseUrl}/${id}`, newObject)
 *   return request.then(response => response.data)
 * }
 *
 * export default {
 *   getAll: getAll,
 *   create: create,
 *   update: update
 * }
 * axios
 *   .get('http://example.com/probably_will_fail')
 *   .then(response => {
 *     console.log('success!')
 *   })
 *   .catch(error => {
 *     console.log('fail')
 *   })
 */
/
export default Old_App;
