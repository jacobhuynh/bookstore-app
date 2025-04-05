import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import GenreButton from './components/GenreButton.jsx'

function App() {
  const [genre, setGenre] = useState('fiction')

  const bookData = {
    "fiction": [
      {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
      {"title": "1984", "author": "George Orwell", "price": 8.50},
      {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
    ],
    "non-fiction": [
      {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
      {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
      {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
    ],
    "children": [
      {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
      {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
      {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
    ]
  };
  
  return (
    <>
      <h1>Online Bookstore</h1>
      <div>
        {Object.keys(bookData).map((genreName, index) => (
          <GenreButton onClick={() => setGenre(genreName)} key={index} genre={genreName}/>
        ))}
      </div>
      <div>
        <h2>{genre}</h2>
        {bookData[genre].map((book, index) => (
          <Card key={index} title={book.title} author={book.author} price={book.price}/>
        ))}
      </div>
    </>
  )
}

export default App
