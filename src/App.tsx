import React from 'react';
import Header from './components/Header';
import ArticleGrid from './components/ArticleGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ArticleGrid />
      <Footer />
    </div>
  );
}

export default App;