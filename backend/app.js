
import React, { useState } from 'react';
import './app.css'; 
import PhoneList from './PhoneList';
import VideoSnippets from './components/VideoSnippets';
function App() {
  const phones = [
    { id: 1, name: 'iPhone 13' },
    { id: 2, name: 'Samsung Galaxy S21' },
    { id: 3, name: 'iphone 16' },
    // Add more phone objects as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Find the index of the searched phone
    const index = phones.findIndex(phone =>
      phone.name.toLowerCase() === query.toLowerCase()
    );

    if (index !== -1) {
      setActiveIndex(index);
      
      const element = document.getElementById(`phone-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app">
      <h1>Phone Search and Scroll</h1>
      <SearchBar onSearch={handleSearch} />
      <PhoneList phones={phones} activeIndex={activeIndex} />
    </div>
  );
}

export default App;
