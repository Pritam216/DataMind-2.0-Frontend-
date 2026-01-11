# DataMind 2.0 – Documentation

## 🔹 Introduction

**DataMind 2.0** is an AI-powered automated Exploratory Data Analysis (EDA) and conversational analytics platform.

It allows users to:
- Upload CSV datasets
- Automatically generate detailed EDA reports
- Visualize statistical insights
- Ask natural-language questions about the dataset
- Persist chat per dataset (run_id)

---

## ⚙️ Backend Architecture – DataMind 2.0

The **DataMind 2.0 backend** acts as an intelligent data processing and reasoning engine.  
It manages dataset ingestion, automated exploratory analysis, AI summarization, and dataset-aware conversational analytics.

---

## 🧱 Technology Stack

- **FastAPI** – High-performance asynchronous API framework  
- **Python** – Core backend language  
- **MongoDB** – Persistent storage for runs and chat history  
- **LLM (OpenAI / Gemini / etc.)** – Reasoning and summarization engine  
- **Cloudinary** – Hosting for generated EDA plots  

---

## 🔄 Backend Workflow
---
```
CSV Upload
   ↓
EDA Processing
   ↓
Plot Generation
   ↓
LLM Summary (Markdown)
   ↓
Store in MongoDB
   ↓
Return run_id + Summary
   ↓
Chat Queries (run_id scoped)
```
---
Each dataset upload creates a **unique `run_id`** which binds:

* EDA results
* Plot URLs
* AI-generated summaries
* Chat conversations

---

## 📥 CSV Ingestion & Validation

When a CSV file is uploaded:

* File format is validated
* Column types are inferred
* Missing values are detected
* Invalid files are safely rejected

Only valid datasets proceed to analysis.

---

## 📊 Automated EDA Engine

The EDA engine performs:

* Dataset shape and schema inspection
* Missing value analysis
* Descriptive statistics
* Distribution analysis
* Correlation detection
* Target column inference (when applicable)

### Plot Generation

* Histograms
* Box plots
* Correlation heatmaps
* Feature distributions

All plots are uploaded to **Cloudinary**, and only their URLs are stored.

---

## 🧠 AI-Powered Summary Generation

After EDA:

* Statistical insights and metadata are sent to the LLM
* The LLM generates a **Markdown-based EDA report**
* The summary includes:

  * Key observations
  * Data quality issues
  * Feature insights
  * Model-readiness hints

Markdown formatting allows rich frontend rendering.

---

## 💬 Conversational Analytics Engine

The chat system enables **dataset-aware conversations**.

### How it works:

* Each chat request includes a `run_id`
* Backend fetches:

  * EDA summary
  * Dataset metadata
  * Previous chat history
* The LLM answers strictly within this dataset context

This ensures accurate and isolated reasoning per dataset.

---

## 🔌 Core API Endpoints

### POST `/run-eda`

**Purpose:** Execute automated EDA on an uploaded dataset

**Input:**

* CSV file (multipart form-data)

**Response:**

```json
{
  "run_id": "unique-session-id",
  "summary": "markdown-formatted-eda-report",
  "images": [
    "https://cloudinary.com/image-1",
    "https://cloudinary.com/image-2"
  ]
}
```

---

### POST `/chat`

**Purpose:** Ask questions related to a specific dataset

**Request Body:**

```json
{
  "run_id": "unique-session-id",
  "message": "User question"
}
```

**Response:**

```json
{
  "response": "AI-generated answer based on the dataset"
}
```

---

## 🗄️ Data Persistence (MongoDB)

MongoDB stores:

* `run_id`
* Dataset metadata
* Markdown EDA summaries
* Plot image URLs
* Chat history per dataset

This enables:

* Chat continuity
* Session recovery
* Multi-user scalability

---

## 🔐 Reliability & Error Handling

* Graceful handling of invalid files
* Safe JSON parsing
* Clear HTTP error messages
* Dataset isolation using `run_id`
* Fallback responses for AI failures

---

## 🚀 Backend Design Goals

* Scalable architecture
* Dataset-aware reasoning
* AI-first design
* Clean API boundaries
* Frontend-agnostic
* Production-ready

---

**DataMind 2.0 Backend** transforms raw CSV data into **intelligent, conversational datasets** using modern AI and data engineering principles.

## 🖥 Frontend Architecture – DataMind 2.0

The **frontend** provides a clean, interactive interface for uploading datasets, viewing EDA summaries, and chatting with AI.

---

## ⚡ Technology Stack

- **React (Vite)** – Fast SPA framework  
- **React Router** – Multi-page navigation  
- **React Markdown** – Renders AI-generated Markdown reports  
- **Modern CSS with Light/Dark Mode** – Theming and responsive UI  

---

## 🧩 Core Components

- **UploadCard** – CSV upload and EDA trigger  
- **EDASummary** – Renders AI-generated Markdown summaries with expand/collapse  
- **ChatPanel** – Conversational interface with streaming AI responses  
- **ChatMessages** – Displays chat bubbles per role (user/AI)  
- **ChatInput** – Input for sending queries  
- **Navbar & Footer** – Navigation and global layout  

---

## ✨ Key Features

- **Light/Dark Mode** – Fully theme-aware  
- **Per-dataset Chat Persistence** – Each `run_id` keeps chat history  
- **Markdown Rendering** – Rich report display with images and code  
- **Dynamic UI Feedback** – Disabled/blurred chat when no dataset is uploaded  
- **Expandable Summaries** – Collapse/expand long reports  

---

## 📐 UI Flow

```text
Upload CSV
   ↓
Run EDA
   ↓
Display Markdown Summary
   ↓
Enable ChatPanel
   ↓
Interactive Q&A per dataset
```
## 🎨 Design Principles
- Component-based architecture
- Responsive and accessible
- Theme consistency across all panels
- Clear user guidance (e.g., blur + overlay for disabled chat)

---

## 🧠 AI Capabilities

- Dataset understanding
- Statistical reasoning
- Feature insights
- Target detection
- Model-readiness scoring
- Conversational follow-ups

---

## 🚀 Future Enhancements

- Multi-file comparison
- Downloadable PDF reports
- Model training suggestions
- Team collaboration
- Role-based access

---

© DataMind 2.0 – Built with ❤️ by Pritam
