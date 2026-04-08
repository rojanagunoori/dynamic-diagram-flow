# 🧩 Dynamic Diagram Flow

<video controls style="max-width: 100%;">
  <source src="https://raw.githubusercontent.com/rojanagunoori/dynamic-diagram-flow/main/public/dynamic-diagram.mp4">
</video>

<!-- [▶ Watch Demo](https://raw.githubusercontent.com/rojanagunoori/dynamic-diagram-flow/main/public/dynamic-diagram.mp4) -->

## 🖼️ Screenshots

### 1️⃣ Empty Canvas

![Empty Pipeline](https://raw.githubusercontent.com/rojanagunoori/dynamic-diagram-flow/main/public/screenshot-1-empty.png)

### 2️⃣ Completed Flow

![Full Pipeline](https://raw.githubusercontent.com/rojanagunoori/dynamic-diagram-flow/main/public/screenshot-2-full-pipeline.png)

A visual pipeline builder built with **React**, **React Flow**, **Zustand**, and **Tailwind CSS** — allowing users to design, connect, and validate data or AI processing flows.

<!-- A visual **drag-and-drop pipeline builder** built with React and React Flow, enabling users to create, connect, and validate workflows dynamically. -->

![React](https://img.shields.io/badge/React-18+-blue?logo=react)
![React Flow](https://img.shields.io/badge/ReactFlow-11.x-orange)
![Zustand](https://img.shields.io/badge/State-Zustand-4B8BBE)
![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-06B6D4)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

🌐 **Live Demo:** [https://dynamic-diagram-flow-react.netlify.app/](https://dynamic-diagram-flow-react.netlify.app/)  
📦 **Repository:** [https://github.com/rojanagunoori/dynamic-diagram-flow](https://github.com/rojanagunoori/dynamic-diagram-flow)

---

## 🚀 Overview

Dynamic Diagram Flow enables drag-and-drop creation of connected processing nodes, such as **Text**, **LLM**, **File**, and **Output** nodes.  
Each node can have editable settings, and you can link outputs to inputs to build a dynamic data pipeline.

You can also validate your flow to check if it forms a **Directed Acyclic Graph (DAG)** before execution.

<!-- Dynamic Diagram Flow is a **node-based workflow builder** that allows users to visually construct pipelines by connecting different functional blocks. -->

### 🎯 Purpose

- Simplify complex workflows using a visual interface
- Enable dynamic data flow between nodes
- Provide validation (DAG detection) for safe execution

### 💡 Why this exists

Traditional pipeline building is code-heavy. This project introduces a **low-code / no-code approach** to designing workflows visually.

---

## 🚀 Features (Detailed)

---

### 🧩 Drag-and-Drop Node System

- Intuitive **drag-and-drop interface** for building workflows visually
- Nodes can be dynamically added from a customizable toolbar
- Supports multiple node types:
  - Input
  - Output
  - Text
  - LLM
  - File processing nodes

- Each node is **modular and reusable**, built using a shared base component

#### ✨ Highlights

- Smooth drag interactions
- Automatic positioning using React Flow
- Scalable architecture for adding new node types

---

### 🔗 Interactive Edge Connections

- Create connections between nodes using **visual handles**
- Supports **source → target relationships** to define data flow
- Custom edges with:
  - Smooth step paths
  - Styled connectors
  - Inline delete controls

#### ⚙️ Advanced Behavior

- Prevents invalid connections via controlled edge logic
- Real-time updates on connect/disconnect
- Fully customizable edge rendering system

---

### 🧠 Dynamic Variable Detection (`{{variable}}`)

- Automatically detects variables inside text inputs using **regex parsing**
- Example:

  ```
  Hello {{name}}, your order {{orderId}} is ready.
  ```

- Dynamically generates **input handles** for each detected variable

#### 🔍 How it Works

- Parses content using:

  ```js
  /{{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)}}/g;
  ```

- Extracts and normalizes variable names
- Updates node internals in real time

#### 🚀 Benefits

- Enables **dynamic data binding**
- Reduces manual configuration
- Makes workflows flexible and scalable

---

### 📊 DAG Validation (Cycle Detection)

- Ensures the pipeline is a **Directed Acyclic Graph (DAG)**
- Prevents invalid workflows with circular dependencies

#### 🛠️ Implementation

- Uses **Depth-First Search (DFS)** algorithm
- Tracks:
  - Visited nodes
  - Recursion stack

#### ✅ Guarantees

- Safe execution order
- No infinite loops
- Logical data flow integrity

---

### 🗑️ Node & Edge Management

- Easily delete nodes and edges with intuitive UI controls
- Automatic cleanup:
  - Removing a node also removes connected edges

#### 🎯 Features

- Inline edge delete button
- Node-level delete action
- State consistency maintained across UI

---

### ⚡ Zustand-Powered Global State

- Centralized state management using **Zustand**

#### 🧠 Handles:

- Nodes and edges state
- Node creation and deletion
- Edge connections
- Dynamic updates

#### 🚀 Advantages

- Lightweight and fast
- Minimal boilerplate
- Easy to scale and maintain

---

### 🎨 Modern UI with Tailwind CSS

- Clean, responsive, and consistent design system
- Utility-first styling for rapid development

#### ✨ UI Features

- Interactive hover and focus states
- Smooth transitions and animations
- Accessible and minimal design

---

### 🔌 Extensible Node Architecture

- Built with a **BaseNode abstraction** for reusability

#### 🧱 Design Principles

- Separation of concerns
- Config-driven node creation
- Plug-and-play architecture

#### ➕ Adding a New Node

- Define node component
- Register in `nodeTypes`
- Add to toolbar

#### 🚀 Benefits

- Easily extend functionality
- Supports custom logic per node
- Enables future plugin system

---

### 🧠 Smart Node Internals Update

- Dynamically updates node structure when variables change
- Uses:
  - `useUpdateNodeInternals` from React Flow

#### 🎯 Result

- Handles reposition correctly
- UI stays in sync with data

---

### 🖱️ Interactive Toolbar System

- Drag-ready node palette
- Visual feedback while dragging

#### ⚙️ Implementation

- Uses `dataTransfer` API
- Encodes node metadata during drag

---

### 📦 Clean Project Architecture

- Well-structured folder organization
- Separation between:
  - UI components
  - Node logic
  - State management
  - Utilities

---

<!--
✅ **Drag & Drop Nodes** — Build workflows easily using React Flow.
✅ **Custom Node Types:**

- **TextNode:** Write text and dynamically extract variables (`{{variable}}`).
- **LLMNode:** Connect to GPT models, customize system & prompt inputs.
- **OutputNode:** Define output field name & type.
- **TextToFileNode:** Convert text to downloadable files (PDF, DOCX, TXT).
- **FileSaveNode:** Save files with custom names.
- **EditableDiv:** Inline text editing with variable detection.

✅ **Pipeline Validation:**
Checks if your flow is a valid **DAG (Directed Acyclic Graph)** using a depth-first search algorithm.

✅ **State Management:**
Uses **Zustand** for managing nodes, edges, and updates efficiently.

✅ **Modern UI:**
Built with **Tailwind CSS**, **Lucide React Icons**, and smooth shadows for an elegant design. -->

---

# 📂 Folder / Project Structure

```bash
src/
│
├── components/
│   └── EditableDiv.js        # Custom editable input with variable parsing
│
├── edges/
│   └── customEdge.js         # Custom edge with delete functionality
│
├── pages/
│   ├── nodes/                # All node types
│   │   ├── inputNode.js
│   │   ├── outputNode.js
│   │   ├── textNode.js
│   │   ├── llmNode.js
│   │   ├── textToFileNode.js
│   │   └── fileSaveNode.js
│   │
│   ├── PipelineUI.js         # Main canvas UI (React Flow)
│   ├── PipelineToolbar.js    # Drag-and-drop toolbar
│   ├── SubmitButton.js       # DAG validation trigger
│   ├── draggableNode.js      # Toolbar draggable items
│   ├── store.js              # Zustand state management
│   └── utils/
│       └── is-dag.js         # DAG validation logic
│
└── App.js
```

---

## 🛠️ Tech Stack

- **React 18+**
- **React Flow** — node-based editor framework
- **Zustand** — state management
- **Tailwind CSS** — styling
- **Lucide-react** — icons

---

## ⚙️ Installation / Setup

```bash
# Clone the repository
git clone https://github.com/rojanagunoori/dynamic-diagram-flow.git

# Navigate to project
cd dynamic-diagram-flow

# Install dependencies
npm install

# Start development server
npm start
```

Runs the app in development mode on http://localhost:3000

### Build for production

```bash
npm run build
```

---

## 🔐 Environment Variables

Currently, no environment variables are required.

_(Future versions may include API keys for LLM integration.)_

---

## 🔌 API Usage

This project is currently **frontend-only** and does not expose external APIs.

#### Internal Logic Example

##### DAG Validation

```js
import { isDAG } from "./utils/is-dag";

const result = isDAG(nodes, edges);
console.log(result);
```

---

## 🧱 Key Components

#### 1. PipelineUI

- Core canvas using React Flow
- Handles drag-drop, node creation, and connections

#### 2. BaseNode

- Reusable wrapper for all node types
- Handles layout, header, and connection handles

#### 3. EditableDiv

- Custom editable component
- Extracts dynamic variables using regex

#### 4. Zustand Store

- Centralized state for nodes and edges
- Handles add/remove/update operations

#### 5. CustomEdge

- Styled edge with delete functionality

---

## 🔒 Security

- No external API calls (safe frontend-only architecture)
- No sensitive data stored
- Future scope:
  - API key handling
  - Secure environment variables

---

## ⚔️ Challenges Faced During Development

#### 1. Dynamic Handle Generation

**Problem:** Creating input handles based on variables (`{{var}}`)
**Solution:** Regex parsing + `useUpdateNodeInternals` from React Flow

---

#### 2. State Synchronization

**Problem:** Keeping node UI and global state consistent
**Solution:** Centralized Zustand store

---

#### 3. DAG Validation

**Problem:** Preventing cyclic workflows
**Solution:** Implemented DFS-based cycle detection

---

#### 4. ContentEditable Issues

**Problem:** Managing cursor and text updates
**Solution:** Controlled updates + manual DOM handling

---

## 🚧 Future Improvements (Detailed Roadmap)

This project is designed with scalability and extensibility in mind. Below are planned enhancements to evolve it into a **full-fledged workflow automation platform**.

---

### ⚡ 1. Pipeline Execution Engine

#### 🎯 Goal

Enable actual **execution of workflows**, not just visualization.

#### 🔍 Current Limitation

- Nodes are static UI elements
- No data flows between connected nodes

#### 🛠️ Planned Implementation

- Build an execution engine that:
  - Traverses nodes in **topological order (DAG-based execution)**
  - Passes outputs → inputs across edges

- Maintain runtime state:

  ```js
  {
    nodeId: {
      inputs: {},
      outputs: {}
    }
  }
  ```

#### ⚙️ Features

- Sequential & parallel execution
- Error propagation handling
- Node-level execution logs

---

### 💾 2. Save / Load Workflows

#### 🎯 Goal

Allow users to persist and reuse pipelines.

#### 🛠️ Planned Implementation

- Save pipeline as JSON:

  ```json
  {
    "nodes": [...],
    "edges": [...]
  }
  ```

- Store in:
  - LocalStorage (basic)
  - Backend DB (advanced)

#### ✨ Features

- Load existing workflows
- Duplicate pipelines
- Version history (future)

---

### ☁️ 3. Backend Integration

#### 🎯 Goal

Move from frontend-only to **full-stack architecture**

#### 🛠️ Planned Stack

- Node.js / Express OR FastAPI
- Database: MongoDB / PostgreSQL

#### 🔌 Responsibilities

- Store workflows
- Execute pipelines server-side
- Handle file processing
- Manage API keys securely

---

### 🔐 4. API Key Management

#### 🎯 Goal

Securely integrate external services (LLMs, APIs)

#### 🔍 Problem

Currently:

- No authentication
- No secure key handling

#### 🛠️ Planned Features

- User-based API key storage
- Encryption (AES / environment-based)
- Key masking in UI

#### 🔒 Security Enhancements

- Role-based access
- Secure backend vault
- No exposure in frontend

---

### 📤 5. Export Pipeline as JSON

#### 🎯 Goal

Allow portability and sharing of workflows

#### 🛠️ Features

- Export:
  - Nodes
  - Edges
  - Node configurations

- Import pipelines back into UI

#### 📦 Use Cases

- Share workflows with others
- Backup pipelines
- Version control workflows

---

### 🎥 6. Real-Time Data Flow Visualization

#### 🎯 Goal

Visually simulate how data moves through the pipeline

#### 🛠️ Planned Features

- Animated edges (data flowing)
- Highlight active nodes during execution
- Step-by-step execution mode

#### 🎬 Advanced Visualization

- Debug mode:
  - Show intermediate outputs

- Timeline view of execution

---

### 🤖 7. Full LLM Integration

#### 🎯 Goal

Turn the pipeline into an **AI workflow builder**

#### 🛠️ Planned Features

- Connect LLM nodes to real APIs
- Support models like:
  - GPT
  - Claude
  - Open-source models

#### 🧠 Capabilities

- Prompt chaining
- Multi-step reasoning pipelines
- Context passing between nodes

#### 🔄 Example Flow

```
Input → Text → LLM → Output
```

#### ⚡ Advanced Features

- Streaming responses
- Token usage tracking
- Prompt templates with variables

---

### 🧩 8. Plugin / Custom Node System

#### 🎯 Goal

Allow developers to create custom nodes

#### 🛠️ Features

- Register new node types dynamically
- Custom UI + logic per node

---

### 📊 9. Workflow Analytics

#### 🎯 Goal

Monitor performance and usage

#### Features

- Execution time per node
- Error rates
- Usage statistics

---

### 🧠 10. Smart Suggestions (AI-Assisted Builder)

#### 🎯 Goal

Make pipeline creation easier using AI

#### Features

- Suggest next node
- Auto-complete workflows
- Error correction suggestions

---

### 🏁 Long-Term Vision

Transform this project into a:

> **Low-code / No-code AI workflow platform**
> similar to tools like Zapier, n8n, or LangFlow — but fully customizable.

---

### 🧠 How It Works

1. **Drag** a node (e.g., Text, LLM, Output) from the toolbar.

2. **Connect** handles by dragging between nodes.

3. **Edit** content dynamically inside nodes.

4. **Validate** your pipeline using the **Submit** button — checks if your graph is a valid DAG.

5. **Extend** the flow by adding new node types inside src/pages/nodes/.

---

## 🧩 Example Nodes

| Node                  | Purpose                                      |
| --------------------- | -------------------------------------------- |
| 📝 **TextNode**       | Create text templates using `{{variables}}`. |
| 🧠 **LLMNode**        | Generate AI responses using GPT models.      |
| 📄 **TextToFileNode** | Convert generated text to a file format.     |
| 💾 **FileSaveNode**   | Save one or more files to local storage.     |
| 🔚 **OutputNode**     | Display or define output of the pipeline.    |

---

## ✅ Validation Logic

Your graph is validated using a simple DFS-based cycle detection algorithm (isDAG.js).
If the graph contains cycles, the UI displays an error alert.

---

## 🧭 Roadmap

- [ ] Execute pipeline and preview results
- [ ] Add OpenAI API integration with key management
- [ ] Export/import flow as JSON
- [ ] Multi-file download support
- [ ] Real-time collaboration support

  ***

---

## 🧑‍💻 Contributing

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/my-new-node
```

3. Commit changes and push

4. Submit a Pull Request 🚀

---

## 🙌 Acknowledgments

- [React Flow](https://reactflow.dev/) — Node editor framework
- [Zustand](https://zustand-demo.pmnd.rs/) — State management
- [Lucide Icons](https://lucide.dev/) — Icons
- [Tailwind CSS](https://tailwindcss.com/) — Styling framework

---

## 🪪 License

This project is licensed under the MIT License.

---

## 🙋‍♀️ Author / Contact

**Nagunoori Roja**

- 📧 Email: [nagunooriroja@gmail.com](mailto:nagunooriroja@gmail.com)
- 🌐 GitHub: [https://github.com/rojanagunoori](https://github.com/rojanagunoori)
- 🌐 LinkedIn: [https://www.linkedin.com/in/nagunoori-roja-51b936267/](https://www.linkedin.com/in/nagunoori-roja-51b936267/)
- 🌐 Personal Portfolio: [portfolio-roja.netlify.app](https://portfolio-roja.netlify.app/)
- 🌐 LeetCode: [https://leetcode.com/u/dSdsi6XkI8/](https://leetcode.com/u/dSdsi6XkI8/)
- 🌐 Kaggle: [https://www.kaggle.com/nagunooriroja](https://www.kaggle.com/nagunooriroja)

---
