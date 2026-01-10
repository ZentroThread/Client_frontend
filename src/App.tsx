import { BrowserRouter, useRoutes } from "react-router-dom"
import { routes } from "./routes/route"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const queryClient = new QueryClient()

  function AppRoutes(){
    const element = useRoutes(routes)
    return element
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
