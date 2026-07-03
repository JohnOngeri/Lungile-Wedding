import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/print-card.css'
import { EmeraldCard } from './EmeraldCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmeraldCard />
  </StrictMode>,
)
