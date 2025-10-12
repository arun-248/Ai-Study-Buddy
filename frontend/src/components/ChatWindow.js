import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [docs, setDocs] = useState([]);
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Fetch available uploaded documents
  useEffect(() => {
    async function loadDocs() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/docs");
        const data = await res.json();
        if (Array.isArray(data)) setDocs(data);
      } catch (err) {
        console.error("Error fetching documents:", err);
      }
    }
    loadDocs();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleDoc = (name) => {
    setSelectedDocs((prev) =>
      prev.includes(name)
        ? prev.filter((d) => d !== name)
        : [...prev, name]
    );
  };

  const sendQuery = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input,
          docs: selectedDocs,
          mode: "explain",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || JSON.stringify(data));

      const aiMsg = {
        role: "ai",
        text: data.answer || "No answer returned.",
        sources: data.sources || [],
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Error connecting to backend." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported.");
      return;
    }
    const rec = new SpeechRecognition();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setInput(text);
    };
    rec.start();
  };

  return (
    <div className="pt-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
<div className="mb-6 text-center">
  <h2 className="text-3xl font-bold text-indigo-700 mb-2">🧠 AI Tutor</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Chat directly with your <span className="font-semibold text-indigo-600">AI Study Assistant</span> 
    and ask questions about the documents you’ve uploaded.  
    The AI will use your uploaded PDFs or notes to give clear, syllabus-based explanations.  
    <br />
    <span className="text-sm text-gray-500 italic">
      (Upload your materials in <strong>Notes Summarizer</strong> before starting a chat.)
    </span>
  </p>
</div>


        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Select Active Documents
          </h3>
          {docs.length === 0 ? (
            <p className="text-gray-500">
              No documents uploaded yet. Upload one in{" "}
              <span className="text-indigo-600 font-semibold">Notes Summarizer</span>.
            </p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {docs.map((doc) => (
                <label
                  key={doc.name}
                  className={`px-3 py-1 rounded border cursor-pointer ${
                    selectedDocs.includes(doc.name)
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedDocs.includes(doc.name)}
                    onChange={() => toggleDoc(doc.name)}
                    className="hidden"
                  />
                  {doc.name}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 h-[400px] overflow-y-auto mb-4">
          {messages.length === 0 && (
            <p className="text-gray-400">Ask me anything about your uploaded materials...</p>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`my-3 p-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-indigo-100 text-indigo-900 ml-auto max-w-[75%]"
                  : "bg-gray-200 text-gray-800 mr-auto max-w-[85%]"
              }`}
            >
              <div>{msg.text}</div>
              {msg.sources?.length > 0 && (
                <div className="text-xs text-gray-500 mt-1">
                  Sources: {msg.sources.join(", ")}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="text-gray-500 italic flex items-center gap-2">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce delay-100">●</span>
              <span className="animate-bounce delay-200">●</span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={startVoice}
            className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
            title="Voice input"
          >
            🎤
          </button>

          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendQuery()}
            className="flex-1 border rounded p-3 text-gray-800"
          />

          <button
            onClick={sendQuery}
            disabled={loading}
            className="bg-indigo-600 text-white px-5 py-2 rounded disabled:opacity-60"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
