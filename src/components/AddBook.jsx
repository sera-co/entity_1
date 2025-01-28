import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book added successfully!"); 
    navigate("/"); 
  };

  return (
    <div className="add-book-container" style={{
        width: '100%',
        maxWidth: '600px',
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2em',
          marginBottom: '20px',
          color: '#333',
        }}>Add a New Book</h2>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
            style={{
              width: '100%',
              padding: '12px',
              margin: '12px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '1em',
              height: '45px',
            }} 
          />
          <input 
            type="text" 
            name="author" 
            placeholder="Author" 
            value={formData.author} 
            onChange={handleChange} 
            required 
            style={{
              width: '100%',
              padding: '12px',
              margin: '12px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '1em',
              height: '45px',
            }} 
          />
          <textarea 
            name="description" 
            placeholder="Description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
            style={{
              width: '100%',
              padding: '12px',
              margin: '12px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '1em',
              minHeight: '120px',
              resize: 'vertical',
            }} 
          />
          <input 
            type="url" 
            name="coverImage" 
            placeholder="Cover Image URL" 
            value={formData.coverImage} 
            onChange={handleChange} 
            required 
            style={{
              width: '100%',
              padding: '12px',
              margin: '12px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '1em',
              height: '45px',
            }} 
          />
          <button 
            type="submit" 
            style={{
              padding: '14px 22px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.2em',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Submit
          </button>
        </form>
      </div>
      
  );
};

export default AddBook;
