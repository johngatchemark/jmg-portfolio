import { createFileRoute } from '@tanstack/react-router'
import Publications from '../features/publications'

export const Route = createFileRoute('/publications')({
  component: Publications,
})
