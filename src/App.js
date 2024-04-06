import logo from './logo.svg';
import './App.css';
import BooksTable from './component/books-table.jsx';
import BooksMaterialTable from './component/BooksMaterialTable.jsx';

function App() {
  return (
    <div>
      <BooksTable books={require("./data/data.json")} />
      <BooksMaterialTable books={require("./data/data.json")} />
    </div>
  );
}

export default App;
