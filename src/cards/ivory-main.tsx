import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/print-card.css'
import { IvoryCard } from './IvoryCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IvoryCard />
  </StrictMode>,
)
