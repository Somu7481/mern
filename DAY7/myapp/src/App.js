import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  return (
    <div>
     <Navbar/>
   <Card 
   username="Somu"
  
 image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
 />
 </div>
  );
}

export default App;
