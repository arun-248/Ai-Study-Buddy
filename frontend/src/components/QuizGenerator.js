import React, { useState } from "react";

export default function QuizGenerator({ sourceText, title }) {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({}); // {qIdx: selectedIndex}
  const [results, setResults] = useState(null);

  const generate = async () => {
    if (!sourceText) return alert("No source text provided.");
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/quiz", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ text: sourceText, num_questions: 5 })
      });
      const data = await res.json();
      setQuiz(data.quiz || []);
    } catch {
      alert("Error generating quiz.");
    } finally { setLoading(false); }
  };

  const submit = () => {
    let correct = 0;
    quiz.forEach((q, idx) => {
      const sel = answers[idx];
      // model format expectation: q.answer maybe "B" or an index; adapt if needed
      if (!q.answer) return;
      const correctKey = q.answer; // assume letter or index
      if (typeof correctKey === "number") {
        if (sel === correctKey) correct++;
      } else if (typeof correctKey === "string") {
        // map selected index to letter
        const letters = ["A","B","C","D"];
        if (letters[sel] === correctKey) correct++;
      }
    });
    setResults({score: correct, total: quiz.length});
  };

  return (
    <div className="mt-6">
      <div className="flex gap-3">
        <button onClick={generate} className="bg-indigo-600 text-white px-4 py-2 rounded">Generate Quiz</button>
        <button onClick={() => { setQuiz([]); setResults(null); setAnswers({}); }} className="px-4 py-2 rounded border">Reset</button>
      </div>

      {loading && <p className="text-sm text-gray-600 mt-3">Generating...</p>}

      {quiz.length > 0 && (
        <div className="mt-4">
          {quiz.map((q, i) => (
            <div key={i} className="p-3 border rounded mb-3">
              <div className="font-semibold mb-2">{i+1}. {q.question}</div>
              <div className="grid grid-cols-1 gap-2">
                {(q.options || []).map((opt, j) => (
                  <label key={j} className="flex items-center gap-2">
                    <input type="radio" name={`q${i}`} onChange={() => setAnswers({...answers, [i]: j})} checked={answers[i] === j} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="flex gap-3">
            <button onClick={submit} className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
          </div>
          {results && <div className="mt-3">Score: {results.score} / {results.total}</div>}
        </div>
      )}
    </div>
  );
}
