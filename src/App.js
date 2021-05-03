import Booklist from './components/Booklist'

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51fPR50mdlL._AC_SX184_.jpg',
  title: 'Human',
  author: 'Brandon Stanton'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/61bG632SbHL._AC_SX184_.jpg',
  title: 'Paris: From the Air',
  author: 'Jeffrey Milstein'
}

function App() {
  return (
    <div className='booklist'>
      <Booklist 
        img={firstBook.img} 
        title={firstBook.title}
        author={firstBook.author}
      />
      <Booklist
        img={secondBook.img} 
        title={secondBook.title}
        author={secondBook.author}
      />
    </div>
  );
}

export default App;
