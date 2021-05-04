import Booklist from './components/Booklist'
import Books from './components/Books'

function App() {
  return (
    <div className='booklist'>
      {Books.map((book,) => {
        return (
        <Booklist key={book.id} {...book}></Booklist>
        );
      })}
    </div>
  );
}

export default App;
