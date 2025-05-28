import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import PostList from './components/PostList' 
import TagList from './components/TagList' 

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Uppgift2 from './pages/Uppgift2'
import Uppgift3 from './pages/Uppgift3'

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="layout" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', minHeight: '80vh' }}>
        <Sidebar />
        <main className="content" style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem 0' }}>
          {}
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PostList />
          </div>
          {}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <TagList />
          </div>
        </main>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uppgift2" element={<Uppgift2 />} />
        <Route path="/uppgift3" element={<Uppgift3 />} />
      </Routes>
    </div>
  )
}

export default App
