import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCredits from './Pages/MovieCredits.jsx';
import GameCredits from './Pages/GameCredits.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieCredits />} />
                <Route path="/Game" element={<GameCredits />} />
            </Routes>
        </Router>
    );
}

export default App;
