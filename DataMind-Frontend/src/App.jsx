// // import { useState } from "react";
// // import ReactMarkdown from "react-markdown";
// // import "./App.css";

// // const API_BASE = "http://localhost:8000";
// // // change to deployed URL if needed

// // export default function App() {
// //   const [file, setFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [summary, setSummary] = useState("");
// //   const [chatEnabled, setChatEnabled] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [chatInput, setChatInput] = useState("");

// //   // ---------------------------
// //   // Upload & Run EDA
// //   // ---------------------------
// //   const handleUpload = async () => {
// //     if (!file) {
// //       alert("Please select a CSV file");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("file", file);

// //     try {
// //       setLoading(true);

// //       const res = await fetch(`${API_BASE}/run-eda`, {
// //         method: "POST",
// //         body: formData,
// //       });

// //       if (!res.ok) {
// //         throw new Error("EDA failed");
// //       }

// //       const data = await res.json();

// //       // summary is markdown
// //       setSummary(data.summary || "");
// //     } catch (err) {
// //       alert(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ---------------------------
// //   // Chat
// //   // ---------------------------
// //   const sendChat = async () => {
// //     if (!chatInput.trim()) return;

// //     const userMsg = { role: "user", content: chatInput };
// //     setMessages((prev) => [...prev, userMsg]);
// //     setChatInput("");

// //     try {
// //       const res = await fetch(`${API_BASE}/chat`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           run_id: "eda_acac57ca3c", // keep same
// //           message: userMsg.content,
// //         }),
// //       });

// //       if (!res.ok) {
// //         throw new Error("Chat failed");
// //       }

// //       const data = await res.json();

// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "assistant", content: data.response },
// //       ]);
// //     } catch (err) {
// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "assistant", content: "Chat error. Please try again." },
// //       ]);
// //     }
// //   };

// //   // ---------------------------
// //   // UI
// //   // ---------------------------
// //   return (
// //     <div className="app-container">
// //       {/* LEFT: EDA */}
// //       <div className="left-panel">
// //         <div className="card">
// //           <h2>Upload CSV & Run EDA</h2>

// //           <input
// //             type="file"
// //             accept=".csv"
// //             onChange={(e) => setFile(e.target.files[0])}
// //           />

// //           <button onClick={handleUpload} disabled={loading}>
// //             {loading ? "Running EDA..." : "Run EDA"}
// //           </button>
// //         </div>

// //         {summary && (
// //           <div className="card markdown">
// //             <h3>EDA Summary</h3>

// //             <ReactMarkdown>{summary}</ReactMarkdown>

// //             {!chatEnabled && (
// //               <div className="chat-decision">
// //                 <p>Continue with chat?</p>
// //                 <button onClick={() => setChatEnabled(true)}>Yes</button>
// //                 <button onClick={() => setChatEnabled(false)}>No</button>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>

// //       {/* RIGHT: CHAT */}
// //       <div className={`right-panel ${!chatEnabled ? "chat-locked" : ""}`}>
// //         <h2>Chat</h2>

// //         <div className="chat-messages">
// //           {messages.map((m, i) => (
// //             <div
// //               key={i}
// //               className={`chat-bubble ${m.role === "user" ? "user" : "ai"}`}
// //             >
// //               <ReactMarkdown>{m.content}</ReactMarkdown>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="chat-input">
// //           <input
// //             value={chatInput}
// //             onChange={(e) => setChatInput(e.target.value)}
// //             placeholder="Ask something..."
// //           />
// //           <button onClick={sendChat}>Send</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // import { useState } from "react";
// // import "./App.css";

// // import UploadCard from "./components/UploadCard";
// // import EDASummary from "./components/EDASummary";
// // import ChatPanel from "./components/ChatPanel";
// // import Navbar from "./components/layout/Navbar";
// // import Footer from "./components/layout/Footer";

// // const API_BASE = "http://localhost:8000";

// // export default function App() {
// //   const [file, setFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [summary, setSummary] = useState("");
// //   const [chatEnabled, setChatEnabled] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [chatInput, setChatInput] = useState("");
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <>
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
// //       <div className="app-container">
// //         {/* LEFT PANEL */}
// //         <div className="left-panel">
// //           <UploadCard
// //             file={file}
// //             setFile={setFile}
// //             loading={loading}
// //             setLoading={setLoading}
// //             setSummary={setSummary}
// //             API_BASE={API_BASE}
// //           />

// //           {summary && (
// //             <EDASummary
// //               summary={summary}
// //               chatEnabled={chatEnabled}
// //               setChatEnabled={setChatEnabled}
// //             />
// //           )}
// //         </div>

// //         {/* RIGHT PANEL */}
// //         <ChatPanel
// //           chatEnabled={chatEnabled}
// //           messages={messages}
// //           setMessages={setMessages}
// //           chatInput={chatInput}
// //           setChatInput={setChatInput}
// //           API_BASE={API_BASE}
// //         />
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }


// // import { useState, useEffect } from "react";
// // import UploadCard from "./components/UploadCard";
// // import EDASummary from "./components/EDASummary";
// // import ChatPanel from "./components/ChatPanel";
// // import Navbar from "./components/layout/Navbar";
// // import Footer from "./components/layout/Footer";
// // import "./App.css";

// // const API_BASE = "http://localhost:8000";

// // export default function App() {
// //   const [file, setFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [summary, setSummary] = useState("");
// //   const [chatEnabled, setChatEnabled] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [chatInput, setChatInput] = useState("");
// //   const [runId, setRunId] = useState("");

// //   // --------------------
// //   // Load persisted chat
// //   // --------------------
// //   useEffect(() => {
// //     const saved = localStorage.getItem(runId);
// //     if (saved) setMessages(JSON.parse(saved));
// //   }, [runId]);

// //   // --------------------
// //   // Save chat on change
// //   // --------------------
// //   useEffect(() => {
// //     localStorage.setItem(runId, JSON.stringify(messages));
// //   }, [messages, runId]);

// //   return (
// //     <div className="app-container">
// //       <Navbar />
// //       <div className="main-content">
// //         {/* LEFT: Upload & Summary */}
// //         <div className="left-panel">
// //           <UploadCard
// //             file={file}
// //             setFile={setFile}
// //             loading={loading}
// //             setLoading={setLoading}
// //             setSummary={setSummary}
// //             setRunId = {setRunId}
// //             API_BASE={API_BASE}
// //           />

// //           {summary && (
// //             <EDASummary
// //               summary={summary}
// //               chatEnabled={chatEnabled}
// //               setChatEnabled={setChatEnabled}
// //             />
// //           )}
// //         </div>

// //         {/* RIGHT: Chat */}
// //         <ChatPanel
// //           chatEnabled={chatEnabled}
// //           messages={messages}
// //           setMessages={setMessages}
// //           chatInput={chatInput}
// //           setChatInput={setChatInput}
// //           API_BASE={API_BASE}
// //           runId={runId}
// //         />
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";
// import UploadCard from "./components/UploadCard";
// import EDASummary from "./components/EDASummary";
// import ChatPanel from "./components/ChatPanel";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import "./App.css";

// const API_BASE = "http://localhost:8000";

// export default function App() {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [summary, setSummary] = useState("");
//   const [chatEnabled, setChatEnabled] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [chatInput, setChatInput] = useState("");
//   const [runId, setRunId] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   // --------------------
//   // Load persisted chat
//   // --------------------
//   useEffect(() => {
//     const saved = localStorage.getItem(runId);
//     if (saved) setMessages(JSON.parse(saved));
//   }, [runId]);

//   // --------------------
//   // Save chat on change
//   // --------------------
//   useEffect(() => {
//     localStorage.setItem(runId, JSON.stringify(messages));
//   }, [messages, runId]);

//   // --------------------
//   // Apply dark mode to body
//   // --------------------
//   useEffect(() => {
//     document.body.className = darkMode ? "dark" : "light";
//   }, [darkMode]);

//   return (
//     <>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <div className="app-container">
//         {/* LEFT: Upload & Summary */}
//         <div className="left-panel">
//           <UploadCard
//             file={file}
//             setFile={setFile}
//             loading={loading}
//             setLoading={setLoading}
//             setSummary={setSummary}
//             setRunId={setRunId}
//             API_BASE={API_BASE}
//           />

//           {summary && (
//             <EDASummary
//               summary={summary}
//               chatEnabled={chatEnabled}
//               setChatEnabled={setChatEnabled}
//             />
//           )}
//         </div>

//         {/* RIGHT: Chat */}
//         <ChatPanel
//           chatEnabled={chatEnabled}
//           messages={messages}
//           setMessages={setMessages}
//           chatInput={chatInput}
//           setChatInput={setChatInput}
//           API_BASE={API_BASE}
//           runId={runId}
//         />
//       </div>
//       <Footer />
//     </>
//   );
// }

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

export default function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(savedTheme);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
}
