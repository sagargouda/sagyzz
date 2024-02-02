import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";

function AppLayout() {
    return (
        <div className="main-container">
            <Header/>
            <Body/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);

