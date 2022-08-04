import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

function App() {
  const cabecalhoItems = ["Topico 1", "Topico 2", "Topico 3", "Topico 4"];
  const navItems = ["Section 1", "Section 2", "Section 3", "Section 4"];
  return (
    <div>
      <Header items={cabecalhoItems} />
      <Navigation items={navItems} />
      <Body />
    </div>
  );
}

export default App;
