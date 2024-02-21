import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'

const tags = ['Home', 'About Me', 'Projects', 'Contact']


function App() {

  return (
    <>
      <Navbar tags={tags}/>
      <Presentation />
    </>
  )
}

export default App
