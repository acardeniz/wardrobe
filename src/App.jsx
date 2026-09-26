import './App.css'
import { useState } from 'react'
import { INITIAL_SLOTS_STATE } from './features/outfit-builder/slotConfig'
import { WardrobeGrid } from './features/outfit-builder/components/WardrobeGrid/WardrobeGrid'


function App() {
  const [files, setFiles] = useState(INITIAL_SLOTS_STATE)

  function handleSelectFile(slotId, file){
    setFiles((current) => ({...current, [slotId]: file}))
  }

  function handleClearFile(slotId) {
    setFiles((current) => ({...current, [slotId]: null}))
  }
  return (
    <main className='app-shell'>
      <WardrobeGrid
      files={files}
      onSelectFile={handleSelectFile}
      onClearFile={handleClearFile}
      />
    </main>
  )


}

export default App;
