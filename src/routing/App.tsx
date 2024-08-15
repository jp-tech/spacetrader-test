import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APPLICATION_URLS } from './routes';
import NewGame from '../pages/NewGame/NewGame';
import NotFound from '../pages/NotFound/NotFound';
import Gameplay from '../pages/Gameplay/Gameplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APPLICATION_URLS.home} element={<NewGame />} />
        <Route path={APPLICATION_URLS.gameplay} element={<Gameplay />} />
        {/** 404 page for all else */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
