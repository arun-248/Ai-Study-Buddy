# 🧠 AI Study Buddy

<div align="center">

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?logo=fastapi&logoColor=white&style=for-the-badge)](https://fastapi.tiangolo.com/)
[![Gemini](https://img.shields.io/badge/Gemini-2.5%20Flash-4285F4?logo=google&logoColor=white&style=for-the-badge)](https://deepmind.google/technologies/gemini/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**🎯 An intelligent AI-powered study assistant that transforms learning materials into interactive educational experiences**

[Live Demo](https://aistudybuddybyarun.vercel.app/)

</div>

---

## 🌟 Project Highlights

> **Transform Your Study Materials**: Upload PDFs, PowerPoints, or text files and get AI-powered summaries, quizzes, flashcards, and personalized study plans - all in one place..

**🎯 What makes this special:**
- **5 AI Summary Modes** - Adapts to different learning styles
- **End-to-end solution** from document upload to progress tracking
- **Interactive learning** with quizzes, flashcards, and AI tutor
- **Production-ready** with professional UI/UX design
- **Built for students** with real-world educational workflows

---

## 🚀 Key Features

### 📚 **5 AI Summary Modes**
Transform your study materials into the format that works best for you:
- **Simple** - Quick 5-point bullet overview for fast revision
- **Detailed** - In-depth explanations with examples and context
- **Concept Map** - Visual hierarchical structure of topics
- **Q&A Format** - Question-answer style for active learning
- **Key Takeaways** - Essential points to remember

### 🧪 **Interactive Study Tools**
* **Instant Quiz Generation** - Auto-create MCQs from any document
* **Flashcard Generator** - Create study cards with front/back format
* **AI Tutor Chat** - Ask questions and get syllabus-based explanations
* **Voice Input** - Speak your questions for hands-free learning

### 📊 **Smart Study Planning**
* **AI-Powered Study Plans** - Personalized schedules (3, 7, 14, or 30 days)
* **Progress Tracking** - Visual analytics and weekly goal monitoring
* **Subject Management** - Track multiple subjects with streak counters
* **Daily Reminders** - Stay on track with your learning goals

### 📁 **Multi-Format Support**
* Upload PDF documents
* PowerPoint presentations (PPTX)
* Plain text files (TXT)
* Fast text extraction and processing

---

## 🖼️ Application Preview

<div align="center">

### 🏠 **Landing Page**
*Modern, engaging homepage with feature highlights*

![Landing Page](https://github.com/arun-248/Ai-Study-Buddy/blob/main/Landing%20Page.png)

### 📄 **Notes Summarizer**
*Upload documents and generate summaries in 5 different styles*

![Summarizer](https://github.com/arun-248/Ai-Study-Buddy/blob/main/Notes%20Summarizer.png)

### 🧠 **AI Tutor Chat**
*Interactive chat interface for asking questions about your materials*

![AI Tutor](https://github.com/arun-248/Ai-Study-Buddy/blob/main/AI%20Tutor%20Chat.png)

### 📅 **Study Planner**
*AI-generated personalized study schedules with progress tracking*

![Study Planner](https://github.com/arun-248/Ai-Study-Buddy/blob/main/Study%20Planner.png)


</div>

---

## 🔬 Methodology & Architecture

### 🛠️ **System Architecture**
```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (React)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Summarizer  │  │   AI Tutor   │  │   Planner    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ REST API
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Backend (FastAPI)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ File Upload  │  │  Processing  │  │  Query API   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ API Calls
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Gemini 2.5 Flash API                      │
│            (Summarization, Q&A, Planning)                    │
└─────────────────────────────────────────────────────────────┘
```

### 🎯 **Data Flow**
1. **Document Upload** → File parsing (PDF/PPTX/TXT)
2. **Text Extraction** → Sentence segmentation and processing
3. **AI Processing** → Gemini API for content generation
4. **Response Delivery** → Formatted output to frontend
5. **User Interaction** → Quizzes, flashcards, chat interface

---

## ⚙️ Tech Stack

### **Frontend**
- **React 18.x** - Modern UI library with hooks
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Markdown** - Markdown rendering

### **Backend**
- **FastAPI** - High-performance Python web framework
- **Pydantic** - Data validation and serialization
- **Python-dotenv** - Environment variable management
- **CORS Middleware** - Cross-origin resource sharing

### **AI & Processing**
- **Google Gemini 2.5 Flash** - Advanced language model
- **Sentence Transformers** - Text embeddings for local processing
- **PyPDF2** - PDF text extraction
- **python-pptx** - PowerPoint processing
- **NumPy** - Numerical computations

### **Development Tools**
- **Git** - Version control
- **npm** - Package management
- **uvicorn** - ASGI server


---


## 🎯 Usage Guide

### **1. Upload & Summarize**
1. Navigate to **Notes Summarizer**
2. Choose your preferred summary style
3. Upload a document (PDF/PPTX/TXT)
4. Click **"Generate Summary"**
5. View your AI-powered summary

### **2. Create Quizzes**
1. After generating a summary
2. Click **"Generate Quiz"**
3. Answer all questions
4. Submit to see your score
5. Review correct answers

### **3. Use AI Tutor**
1. Go to **AI Tutor** page
2. Select documents to reference
3. Type or speak your question
4. Get instant AI explanations
5. Continue the conversation

### **4. Plan Your Study**
1. Open **Study Planner**
2. Enter your study goal
3. Choose duration (3, 7, 14, or 30 days)
4. Click **"Generate Study Plan"**
5. Track progress with weekly charts

---

## ⚠️ Important Notes

### **🔐 Security**
- Never commit `.env` files with API keys
- Always use environment variables for sensitive data
- Keep your Gemini API key private
- Use HTTPS in production

### **🚦 Limitations**
- Gemini API has rate limits (check your quota)
- File uploads limited to 10MB (configurable)
- Quiz generation accuracy depends on content quality
- Local fallback mode available if API fails

### **🌐 Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🛠️ Troubleshooting

### **Backend won't start**
```bash
# Check if port 8000 is in use
netstat -ano | findstr :8000

# Use different port
uvicorn main:app --reload --port 8001
```

### **Frontend can't connect to backend**
- Verify backend is running
- Check CORS settings in `main.py`
- Confirm API URL in frontend code
- Check browser console for errors

### **Gemini API errors**
- Verify API key is correct
- Check API quota/billing
- Review request format
- Check rate limits

### **File upload fails**
- Check file size (< 10MB recommended)
- Verify file format (PDF/PPTX/TXT)
- Ensure proper file permissions
- Check backend logs

---

## 📈 Future Roadmap

### **Short-term Goals (Next 3 months)**
- [ ] Mobile app (React Native)
- [ ] Offline mode with local LLMs
- [ ] More file formats (DOCX, Markdown)
- [ ] Export summaries to PDF
- [ ] User authentication and profiles

### **Long-term Vision (6-12 months)**
- [ ] Collaborative study groups
- [ ] Integration with LMS (Canvas, Moodle)
- [ ] Voice-enabled summaries
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Browser extension

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Reporting Bugs**
1. Check existing issues first
2. Create detailed bug report
3. Include steps to reproduce
4. Add screenshots if possible

### **Suggesting Features**
1. Open a discussion on GitHub
2. Describe the feature clearly
3. Explain the use case
4. Consider implementation complexity

### **Pull Requests**
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Free to use, modify, and distribute
Open source and community-driven
```

---

## 🙏 Acknowledgments

- **OpenAI & NxtWave** - For hosting the Buildathon 2025
- **Google Gemini Team** - For the powerful AI API
- **React Community** - For excellent documentation and tools
- **FastAPI Team** - For the amazing Python framework
- **TailwindCSS** - For beautiful, responsive styling
- **Open Source Community** - For inspiration and support

---

## 👥 Team

**Team IntelliLearn**

Built with ❤️ by passionate developers for the OpenAI × NxtWave Buildathon 2025

- **GitHub:** [arun-248](https://github.com/arun-248)
- **LinkedIn:** [Arun Chinthalapally](https://www.linkedin.com/in/arun-chinthalapally-7a254b256)
- **Email:** arunchinthalapally248@gmail.com

---

## 📞 Support

Having issues? We're here to help!

- 📧 Email: arunchinthalapally248@gmail.com
- 🐛 [Report Bug](https://github.com/arun-248/AI-Study-Buddy/issues)
- 💡 [Request Feature](https://github.com/arun-248/AI-Study-Buddy/issues)
- 📖 [Documentation](#)

---

<div align="center">

### 🌟 If you find this project helpful, please give it a star! ⭐

**Built for students, by students | Powered by AI 🚀**

[⬆ Back to Top](#-ai-study-buddy)

</div>
