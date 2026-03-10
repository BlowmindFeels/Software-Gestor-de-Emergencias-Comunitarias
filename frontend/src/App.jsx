import React from 'react'
import MapView from './components/MapView'
import EmergencyList from './components/EmergencyList'

export default function App() {
  return (
    <div className="app">
      <h1>Plataforma de Gestión de Emergencias</h1>
      <main>
        <MapView />
        <EmergencyList />
      </main>
    </div>
  )
}
