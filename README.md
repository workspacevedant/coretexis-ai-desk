# Coretexis AI Desk — Snapdragon Edition

> Local-first AI productivity assistant built for Snapdragon-powered HP PCs using Qualcomm AI Hub and ONNX Runtime.

![Status](https://img.shields.io/badge/Status-In%20Development-blue)
![Platform](https://img.shields.io/badge/Platform-Windows-0078D4)
![AI](https://img.shields.io/badge/AI-On--Device-red)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

**Coretexis AI Desk** is a desktop AI assistant designed to showcase the capabilities of **Snapdragon-powered HP PCs** by running AI workloads locally with NPU acceleration.

The project is being developed as an entry for the **Snapdragon® AI Lab Build & Present Challenge** and focuses on privacy-first, on-device AI for everyday productivity.

## Vision

Build a fast, offline-capable AI workspace where users can:

- Chat with an on-device AI assistant
- Summarize PDFs and DOCX files
- Convert speech to text
- Draft professional emails
- Extract text from images
- Get coding assistance
- Experience Snapdragon NPU acceleration through Qualcomm AI Hub

## Planned Features

### AI Assistant

- Local AI chat
- Conversation memory
- Offline inference

### Document Intelligence

- PDF summarization
- DOCX understanding
- Key-point extraction

### Voice Assistant

- Speech-to-text
- Push-to-talk
- Voice responses

### OCR

- Image-to-text
- Screenshot recognition

### Email Assistant

- Professional email drafting
- Tone adjustment
- Rewrite assistance

### Code Assistant

- Code explanation
- Documentation generation
- Bug-fix suggestions

### Snapdragon Optimization

- Qualcomm AI Hub integration
- ONNX Runtime acceleration
- Hardware capability detection
- Performance dashboard

## Architecture

```text
Electron
   │
React + TypeScript
   │
FastAPI
   │
AI Service Layer
   │
ONNX Runtime
   │
Qualcomm AI Hub
   │
Snapdragon NPU
```

## Tech Stack

| Layer | Technology |
|--------|------------|
| Desktop | Electron |
| Frontend | React + TypeScript |
| Backend | FastAPI |
| AI Runtime | ONNX Runtime |
| Snapdragon | Qualcomm AI Hub |
| Speech | Whisper |
| OCR | PaddleOCR |
| Packaging | Electron Builder |

## Project Structure

```text
coretexis-ai-desk/
├── frontend/
├── backend/
├── ai/
├── docs/
├── presentation/
├── demo/
└── README.md
```

## Development Roadmap

### Phase 1 — Foundation

- [ ] Electron setup
- [ ] React setup
- [ ] FastAPI setup

### Phase 2 — AI Core

- [ ] AI routing layer
- [ ] Local chat
- [ ] Memory

### Phase 3 — Productivity

- [ ] PDF summarization
- [ ] OCR
- [ ] Email assistant
- [ ] Code assistant

### Phase 4 — Voice

- [ ] Whisper integration
- [ ] Voice assistant

### Phase 5 — Snapdragon Optimization

- [ ] Qualcomm AI Hub integration
- [ ] Hardware detection
- [ ] Performance dashboard

### Phase 6 — Submission

- [ ] Technical documentation
- [ ] Pitch deck
- [ ] Demo video
- [ ] Final release

## Development Status

Current milestone:

> **Sprint 1 – Repository Foundation**

The project is actively being built following an architecture-first development approach with milestone-based implementation and frequent version control checkpoints.

## License

This project is licensed under the MIT License.

---

**Built by Coretexis Technologies**