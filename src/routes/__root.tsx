import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/header/header'
import { HeaderProvider } from '../context/header-context'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <HeaderProvider>
      <Header />
      <Outlet />
    </HeaderProvider>
  )
}
