import Hero from './components/hero';
import Header from './components/Header';
import AnimeSelector from "./components/AnimeSelector";
import OnAir from './components/OnAir';
import ResumeWatching from './components/ResumeWatching';  

export default function Home() {
  return (
    <main>
      <Hero />  
      <Header />
      <ResumeWatching />  
      <AnimeSelector />
      <OnAir />
    </main>
  );
}
