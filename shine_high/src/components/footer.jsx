import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Banner } from './banner';

export const Footer = () => {
   return (
           <>
           <footer className="bg-dark text-white text-center py-2">
      <div className="container">
        <p className="mb-3">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        <ul className="list-inline mt-2">
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
           </>
);
}
