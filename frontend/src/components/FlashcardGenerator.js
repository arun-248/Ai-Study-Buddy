import React, { useState } from 'react';

export default function FlashcardGenerator({ sourceText }) {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateFlashcards = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/flashcards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: sourceText, num_cards: 10 }),
      });
      const data = await res.json();
      setFlashcards(data.flashcards || []);
    } catch (err) {
      console.error(err);
      alert("Error generating flashcards");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <button 
        onClick={generateFlashcards}
        disabled={loading}
        className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
      >
        {loading ? "Generating..." : "🃏 Generate Flashcards"}
      </button>

      {flashcards.length > 0 && (
        <div className="mt-6">
          <div 
            className="relative w-full h-64 cursor-pointer perspective-1000"
            onClick={() => setFlipped(!flipped)}
          >
            <div className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
              {/* Front */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 flex items-center justify-center backface-hidden">
                <p className="text-2xl font-bold text-white text-center">
                  {flashcards[currentCard]?.front}
                </p>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 flex items-center justify-center backface-hidden rotate-y-180">
                <p className="text-xl text-white text-center">
                  {flashcards[currentCard]?.back}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button 
              onClick={() => setCurrentCard(Math.max(0, currentCard - 1))}
              className="px-6 py-2 bg-gray-700 rounded-lg"
              disabled={currentCard === 0}
            >
              ← Previous
            </button>
            <span className="text-gray-600">
              {currentCard + 1} / {flashcards.length}
            </span>
            <button 
              onClick={() => setCurrentCard(Math.min(flashcards.length - 1, currentCard + 1))}
              className="px-6 py-2 bg-gray-700 rounded-lg"
              disabled={currentCard === flashcards.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}