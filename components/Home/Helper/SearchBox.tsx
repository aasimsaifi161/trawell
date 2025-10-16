"use client"
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const placeholders = [
    "Delhi...",
    "Kashmir...",
    "Paris...",
    "London...",
    "Brazil...",
    "Bejing..."
  ];
  
function SearchBox() {

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [placeholder, setPlaceholder] = useState('');

  const typingSpeed = 200;
  const deletingSpeed = 100;
  const delayBetweenTexts = 1000;

  useEffect(() => {
    const currentText = placeholders[placeholderIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setPlaceholder(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
        }
      } else {
        setPlaceholder(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentText.length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? deletingSpeed : (charIndex === currentText.length ? delayBetweenTexts : typingSpeed));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, placeholderIndex]);

  return (
    <div className="hidden md:flex px-6 py-2 gap-5 border-1 rounded-full border-gray-400 items-center justify-center">
      <CiSearch className="h-6 w-6 text-black" />
      <input
        type="text"
        placeholder={`Search for ${placeholder}`}
        className="focus:outline-none text-black placeholder:text-sm placeholder:font-semibold placeholder:text-gray-600 px-2"
      />
    </div>
  );
}

export default SearchBox;
