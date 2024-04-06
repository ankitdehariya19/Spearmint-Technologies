import React from 'react';
import Header from './components/common/Header';
import ChartComponent from './components/Chart';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <ChartComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
