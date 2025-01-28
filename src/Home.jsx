// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
  
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-6">
      
      <Link
        to="/add-book"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
      >
        ➕ Add Book
      </Link>
    </div>
    </div>
  );
};

export default Home;
