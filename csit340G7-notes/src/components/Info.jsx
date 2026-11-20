import { useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function Info({ name }) {
  const { largeText, setLargeText } = useContext(SettingsContext)
  return (
    <footer className="p-4 border-t mt-4 text-[#111]">
      <button
        type="button"
        onClick={() => setLargeText(!largeText)}
        className="mb-1 cursor-pointer underline hover:text-[#b83f45]"
      >
        {largeText ? 'Normal text' : 'Large text'}
      </button>
      <p>Created by {name}</p>
    </footer>
  )
}

export default Info