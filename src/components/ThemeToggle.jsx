import { useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-purple-600"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle; 