import { createFileRoute } from '@tanstack/react-router'
import Arcade from '../features/arcade'

export const Route = createFileRoute('/arcade')({
  component: Arcade,
})