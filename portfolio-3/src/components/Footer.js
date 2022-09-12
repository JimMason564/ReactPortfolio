import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="text-center p-3">
        <a className= 'footerContact' href='https://github.com/JimMason564'>
          <i class="bi bi-github"></i>
        </a>

        <a className= 'footerContact' href='https://www.linkedin.com/in/james-mason-451b39ab/'>
          <i class="bi bi-linkedin"></i>
        </a>

        <a className= 'footerContact' href='https://stackoverflow.com/users/19965287/jm458'>
          <i class="bi bi-stack-overflow"></i>
        </a>
        <a class="text-white"></a>
      </div>
    </footer>
  );
}