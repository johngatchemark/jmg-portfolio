import { createFileRoute } from '@tanstack/react-router'
import Accomplishments from '../features/accomplishments'

export const Route = createFileRoute('/accomplishments')({
  component: Accomplishments,
})
