// Import des éléments nécessaires depuis React
import { Fragment, useState } from 'react'

// Import des logos et des styles
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import des composants
import Counteur from './compoments/Counteur'
import Filter from './compoments/Filter'
import NoteList from './compoments/NoteLisst' // Typo ici, devrait être NoteList
import AddNoteForm from './compoments/AddNoteForm'

// Définition du composant principal de l'application
export default function App() {
  // Initialisation de l'état des notes avec useState
  const [notes, setNote] = useState([
    { id: 1, text: "première note"},
    { id: 1, text: "deuxième note"},
    { id: 1, text: "troisème note"}
  ]);

  // Gestionnaire de suppression de note
  function onRemoveBtnHandler(noteToDelete) {
    console.log('click on remove', noteToDelete);
    // Filtrer les notes pour supprimer celle qui correspond à la note à supprimer
    const newNotes = notes.filter(note => note.id !== noteToDelete.id);
    // Mettre à jour l'état des notes avec les nouvelles notes filtrées
    setNote(newNotes);
  }

  // Rendu du composant principal
  return (
    <>
      <h1>Application Note</h1>
      {/* Composant Counteur */}
      <Counteur />
      {/* Composant AddNoteForm */}
      <AddNoteForm />
      {/* Composant Filter */}
      <Filter />
      {/* Composant NoteList avec les notes et la fonction de suppression passées en tant que props */}
      <NoteList notes={notes} onRemoveBtn={onRemoveBtnHandler} />
    </>
  )
}
