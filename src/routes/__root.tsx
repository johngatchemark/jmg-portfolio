import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/header/header'
import { useHeader } from '../context/header-context'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { headerHeight } = useHeader();
  const paddingTop = headerHeight ? `${headerHeight}px` : "72px";

  return (
    <>
      <Header />
      <div style={{ paddingTop }}>
        <Outlet />
      </div>
    </>
  )
}
