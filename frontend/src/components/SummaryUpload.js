import React, { useState } from 'react';
import { Upload, Brain, BookOpen, Map, MessageCircleQuestion, ListChecks, Sparkles, Download, CheckCircle, X, Trophy, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';

// ✅ USE ENVIRONMENT VARIABLE FOR API URL
const API_URL = "https://ai-study-buddy-rw6z.onrender.com";

export default function SummaryUpload() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadedName, setUploadedName] = useState("");
  const [mode, setMode] = useState("simple");
  const [showQuiz, setShowQuiz] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Flashcard states
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const summaryModes = [
    { key: "simple", label: "Simple", icon: Brain, color: "blue", desc: "Quick 5-point overview" },
    { key: "detailed", label: "Detailed", icon: BookOpen, color: "indigo", desc: "In-depth explanation" },
    { key: "concept", label: "Concept Map", icon: Map, color: "purple", desc: "Visual hierarchy" },
    { key: "qa", label: "Q&A", icon: MessageCircleQuestion, color: "green", desc: "Question & Answer" },
    { key: "takeaways", label: "Key Points", icon: ListChecks, color: "orange", desc: "Essential takeaways" },
  ];

  const renderMarkdown = (text) => {
    if (!text) return '';
    
    return text
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-4 mt-8">$1</h1>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
      .replace(/^[•\-]\s+(.+)$/gm, '<li class="ml-6 mb-2 text-gray-800">• $1</li>')
      .replace(/^\d+\.\s+(.+)$/gm, '<li class="ml-6 mb-2 text-gray-800">$1</li>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>');
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    
    setLoading(true);
    setSummary("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      // ✅ FIXED: Use API_URL instead of hardcoded localhost
      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      
      if (res.ok) {
        setUploadedName(data.name);
        await generateSummary(data.name, mode);
      } else {
        alert("Upload failed: " + (data.detail || "Unknown error"));
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading file: " + err.message);
      setLoading(false);
    }
  };

  const generateSummary = async (docName, summaryStyle) => {
    setLoading(true);
    try {
      // ✅ FIXED: Use API_URL instead of hardcoded localhost
      const res = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Summarize this document in ${summaryStyle} style`,
          docs: [docName],
          mode: "summarize",
          style: summaryStyle
        }),
      });
      
      const data = await res.json();
      if (res.ok) {
        setSummary(data.answer || "No summary generated");
      } else {
        alert("Summary generation failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error generating summary");
    } finally {
      setLoading(false);
    }
  };

  const handleModeChange = async (newMode) => {
    setMode(newMode);
    if (uploadedName) {
      await generateSummary(uploadedName, newMode);
    }
  };

  const generateQuiz = async () => {
    if (!summary) {
      alert("Please generate a summary first!");
      return;
    }

    setLoading(true);
    try {
      // ✅ FIXED: Use API_URL instead of hardcoded localhost
      const res = await fetch(`${API_URL}/api/quiz`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: summary, num_questions: 5 }),
      });
      
      const data = await res.json();
      setQuiz(data.quiz || []);
      setShowQuiz(true);
      setAnswers({});
      setQuizSubmitted(false);
      setScore(0);
    } catch (err) {
      console.error(err);
      alert("Error generating quiz");
    } finally {
      setLoading(false);
    }
  };

  const generateFlashcards = async () => {
    if (!summary) {
      alert("Please generate a summary first!");
      return;
    }

    setLoading(true);
    try {
      // ✅ FIXED: Use API_URL instead of hardcoded localhost
      const res = await fetch(`${API_URL}/api/flashcards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: summary, num_questions: 10 }),
      });
      
      const data = await res.json();
      setFlashcards(data.flashcards || []);
      setShowFlashcards(true);
      setCurrentCard(0);
      setIsFlipped(false);
    } catch (err) {
      console.error(err);
      alert("Error generating flashcards");
    } finally {
      setLoading(false);
    }
  };

  const submitQuiz = () => {
    let correctCount = 0;
    
    quiz.forEach((q, idx) => {
      const userAnswer = answers[idx];
      const correctAnswer = q.answer;
      
      if (userAnswer === undefined) return;
      
      if (typeof correctAnswer === 'string') {
        const letters = ["A", "B", "C", "D"];
        if (letters[userAnswer] === correctAnswer) {
          correctCount++;
        }
      } else if (typeof correctAnswer === 'number') {
        if (userAnswer === correctAnswer) {
          correctCount++;
        }
      }
    });
    
    setScore(correctCount);
    setQuizSubmitted(true);
  };

  const downloadSummary = () => {
    const blob = new Blob([summary], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${uploadedName}_${mode}_summary.md`;
    a.click();
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => Math.min(flashcards.length - 1, prev + 1));
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-6 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold text-indigo-700">AI-Powered Study Assistant</span>
          </div>
          <h1 className="text-4xl font-bold mb-3 text-gray-800">
            Notes Summarizer
          </h1>
          <p className="text-lg text-gray-600">
            Transform your study materials into clear, organized summaries
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Upload Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <Upload className="w-6 h-6 text-indigo-600" />
                Upload Document
              </h3>

              {/* Summary Mode Selector */}
              <div className="space-y-3 mb-6">
                <label className="text-sm text-gray-600 font-medium">Select Summary Style</label>
                {summaryModes.map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.key}
                      onClick={() => handleModeChange(m.key)}
                      className={`w-full p-4 rounded-xl transition-all flex items-center gap-3 group ${
                        mode === m.key
                          ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-500 shadow-md'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${mode === m.key ? 'text-indigo-600' : 'text-gray-400'}`} />
                      <div className="text-left flex-1">
                        <div className={`font-semibold ${mode === m.key ? 'text-indigo-700' : 'text-gray-700'}`}>
                          {m.label}
                        </div>
                        <div className="text-xs text-gray-500">{m.desc}</div>
                      </div>
                      {mode === m.key && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                    </button>
                  );
                })}
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors bg-gray-50">
                  <input
                    type="file"
                    accept=".pdf,.pptx,.txt"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-10 h-10 mx-auto mb-3 text-indigo-500" />
                  <div className="text-sm text-gray-700">
                    {file ? (
                      <span className="text-green-600 font-medium flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" /> {file.name}
                      </span>
                    ) : (
                      "Click or drag file to upload"
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">PDF, PPTX, TXT supported</div>
                </div>

                <button
                  onClick={uploadFile}
                  disabled={!file || loading}
                  className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Summary
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Summary Display */}
          <div className="md:col-span-2">
            {!summary && !loading && (
              <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center h-full flex flex-col items-center justify-center shadow-lg">
                <Brain className="w-16 h-16 text-indigo-400 mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Ready to Get Started?</h3>
                <p className="text-gray-600 max-w-md">
                  Upload your study materials and choose a summary style to begin learning
                </p>
              </div>
            )}

            {summary && (
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    {React.createElement(summaryModes.find(m => m.key === mode).icon, { 
                      className: "w-6 h-6 text-indigo-600" 
                    })}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {summaryModes.find(m => m.key === mode).label} Summary
                      </h3>
                      <p className="text-sm text-gray-500">{uploadedName}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={downloadSummary}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                      title="Download Summary"
                    >
                      <Download className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div 
                  className="bg-gray-50 rounded-xl p-6 text-gray-800 leading-relaxed border border-gray-200 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(summary) }}
                />

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button 
                    onClick={generateQuiz}
                    disabled={loading}
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Trophy className="w-5 h-5" />
                    Generate Quiz
                  </button>
                  <button 
                    onClick={generateFlashcards}
                    disabled={loading}
                    className="flex-1 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Generate Flashcards
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quiz Modal */}
        {showQuiz && quiz.length > 0 && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">📝 Quiz Time!</h3>
                <button onClick={() => setShowQuiz(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {!quizSubmitted ? (
                <>
                  {quiz.map((q, i) => (
                    <div key={i} className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <p className="font-semibold mb-3 text-gray-800">Q{i+1}. {q.question}</p>
                      <div className="space-y-2">
                        {(q.options || []).map((opt, j) => (
                          <label key={j} className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-indigo-50 cursor-pointer border border-gray-200 transition-all">
                            <input 
                              type="radio" 
                              name={`q${i}`} 
                              className="w-4 h-4 text-indigo-600"
                              onChange={() => setAnswers({...answers, [i]: j})}
                              checked={answers[i] === j}
                            />
                            <span className="text-gray-700">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button 
                    onClick={submitQuiz}
                    disabled={Object.keys(answers).length !== quiz.length}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Quiz
                  </button>
                  {Object.keys(answers).length !== quiz.length && (
                    <p className="text-sm text-gray-500 text-center mt-2">
                      Please answer all questions before submitting
                    </p>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
                  <p className="text-5xl font-bold text-indigo-600 mb-4">{score} / {quiz.length}</p>
                  <div className="text-xl text-gray-700 mb-6">
                    {score === quiz.length ? (
                      <span className="text-green-600 font-semibold">Perfect Score! 🎉</span>
                    ) : score >= quiz.length * 0.7 ? (
                      <span className="text-blue-600 font-semibold">Great Job! 💡</span>
                    ) : (
                      <span className="text-orange-600 font-semibold">Keep Practicing! 💪</span>
                    )}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-700 mb-2">
                      <strong>Percentage:</strong> {Math.round((score / quiz.length) * 100)}%
                    </p>
                    <p className="text-gray-700">
                      <strong>Answered Correctly:</strong> {score} out of {quiz.length}
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowQuiz(false)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Flashcards Modal */}
        {showFlashcards && flashcards.length > 0 && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">🃏 Flashcards</h3>
                <button onClick={() => setShowFlashcards(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Flashcard */}
              <div 
                className="relative w-full h-80 mb-6 cursor-pointer perspective-1000"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 flex items-center justify-center backface-hidden shadow-xl">
                    <div className="text-center">
                      <p className="text-sm text-white/80 mb-4">QUESTION</p>
                      <p className="text-2xl font-bold text-white">
                        {flashcards[currentCard]?.front}
                      </p>
                      <p className="text-sm text-white/60 mt-4">Click to flip</p>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 flex items-center justify-center backface-hidden rotate-y-180 shadow-xl">
                    <div className="text-center">
                      <p className="text-sm text-white/80 mb-4">ANSWER</p>
                      <p className="text-xl text-white">
                        {flashcards[currentCard]?.back}
                      </p>
                      <p className="text-sm text-white/60 mt-4">Click to flip back</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button 
                  onClick={prevCard}
                  disabled={currentCard === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                
                <span className="text-gray-600 font-semibold">
                  {currentCard + 1} / {flashcards.length}
                </span>
                
                <button 
                  onClick={nextCard}
                  disabled={currentCard === flashcards.length - 1}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}