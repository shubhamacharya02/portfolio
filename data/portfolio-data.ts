export interface Project {
  id: string;
  slug: string;
  title: string;
  heroTagline: string;
  category: 'Agentic AI' | 'RAG & LLMs' | 'Backend Systems';
  isFeatured: boolean;
  image?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    title: string;
    flow: string[];
    description: string;
  };
  techStack: string[];
  keyFeatures: string[];
  codeSnippets: {
    title: string;
    language: string;
    description: string;
    code: string;
  }[];
  challenges: {
    challenge: string;
    howSolved: string;
  }[];
  whatILearned: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface TimelineItem {
  year: string;
  period: string;
  role: string;
  title: string;
  description: string;
  highlights: string[];
}

import { getAssetPath } from "@/lib/utils";

export const PERSONAL_INFO = {
  name: "Shubham Acharya",
  title: "AI Backend Developer",
  roleHeadline: "Building Production-Ready AI Backend Systems",
  subtitle: "Agentic AI • LLM Workflows • FastAPI • LangGraph",
  description: "I build scalable AI applications that orchestrate LLMs, workflow automation, and backend services using modern AI infrastructure.",
  location: "Bengaluru, India",
  email: "shubhamacharya258@gmail.com",
  github: "https://github.com/shubhamacharya77",
  linkedin: "https://www.linkedin.com/in/shubham-acharya-3a5a9b423",
  profileImage: getAssetPath("/profile_picture.png"),
  resumePdf: getAssetPath("/Shubham_Acharya_Resume.pdf"),
  coreTechStack: [
    "Python",
    "FastAPI",
    "LangGraph",
    "LLMs",
    "PostgreSQL",
    "Docker",
    "Google Cloud",
    "Next.js"
  ]
};

export const WHAT_I_BUILD = [
  {
    id: "ai-agents",
    iconName: "Bot",
    title: "AI Agents",
    description: "Building multi-agent workflows using LangGraph.",
    detail: "Stateful graph-based orchestration, human-in-the-loop branching, and MCP integration."
  },
  {
    id: "backend-apis",
    iconName: "Server",
    title: "Backend APIs",
    description: "Developing scalable FastAPI services.",
    detail: "Async non-blocking endpoints, SQLModel/PostgreSQL schemas, and JWT authentication."
  },
  {
    id: "llm-apps",
    iconName: "BrainCircuit",
    title: "LLM Applications",
    description: "Creating production-ready RAG and AI automation systems.",
    detail: "ChromaDB vector indexing, structured Pydantic outputs, and WebSocket streaming."
  }
];

export const ENGINEERING_PHILOSOPHY = {
  statement: "I believe AI systems should be modular, observable, scalable, and production-ready. My focus is on building reliable backend architectures rather than simple AI demos.",
  pillars: [
    {
      title: "Deterministic Orchestration",
      description: "Replacing unpredictable prompt chains with stateful graph architectures (LangGraph) that handle errors, retries, and state transitions cleanly."
    },
    {
      title: "Asynchronous Concurrency",
      description: "Designing non-blocking FastAPI pipelines and event-driven WebSocket connections so heavy LLM execution doesn't block server threads."
    },
    {
      title: "Strict Evaluation & Guardrails",
      description: "Enforcing Pydantic schemas for LLM responses and utilizing vector embeddings to minimize hallucinations and validate structured outputs."
    }
  ]
};

export const SYSTEM_DESIGN_CAPABILITIES = [
  "Designing scalable AI backend architectures",
  "Workflow orchestration with LangGraph",
  "REST API design",
  "Database schema design",
  "Authentication systems",
  "Vector database architecture",
  "Background task processing"
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Agentic Systems",
    iconName: "Sparkles",
    description: "Multi-agent frameworks, stateful graph execution, & LLM tool integration",
    skills: [
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "MCP (Model Context Protocol)" },
      { name: "Prompt Engineering" },
      { name: "RAG Systems" },
      { name: "AI Agents" }
    ]
  },
  {
    title: "Backend Engineering",
    iconName: "Cpu",
    description: "High-performance Python backends, REST APIs, & async concurrency",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "SQLModel" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
      { name: "Asyncio" },
      { name: "WebSockets" }
    ]
  },
  {
    title: "Cloud & DevOps",
    iconName: "Cloud",
    description: "Containerization, cloud AI deployment, & hosting",
    skills: [
      { name: "Google Cloud" },
      { name: "Vertex AI" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "Git / GitHub" }
    ]
  },
  {
    title: "Databases & Vector Stores",
    iconName: "Database",
    description: "Relational schema management & vector similarity search",
    skills: [
      { name: "PostgreSQL" },
      { name: "ChromaDB" },
      { name: "Supabase" },
      { name: "Redis" }
    ]
  },
  {
    title: "Frontend & Tools",
    iconName: "Layout",
    description: "Modern developer UIs, React flow canvas, & web clients",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Postman" },
      { name: "VS Code" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nexus-ai",
    slug: "nexus-ai",
    title: "Nexus AI",
    heroTagline: "Visual AI Workflows & Automated Insight Engine",
    category: "Agentic AI",
    isFeatured: true,
    image: getAssetPath("/nexus-ai-preview.png"),
    overview: "Build visual AI workflows that analyze documents, extract insights, and generate reports — all in a single, unified workspace. No code required.",
    problem: "Building custom multi-step AI agent pipelines traditionally required writing complex custom boilerplate Python scripts for state management, tool routing, and streaming output back to the web client.",
    solution: "Designed a modular backend architecture powered by LangGraph state machines and FastAPI. Users construct workflow graphs visually on the frontend, which are converted into stateful executable graphs on the server.",
    architecture: {
      title: "Nexus AI Execution Flow",
      flow: [
        "Frontend Workflow Canvas",
        "FastAPI REST / WebSocket Engine",
        "LangGraph State Machine",
        "Google Gemini LLM",
        "PostgreSQL & Vector Store"
      ],
      description: "Visual graph configurations compile into a dynamic LangGraph StateGraph, execute step transitions asynchronously, stream intermediate output tokens via WebSockets, and persist logs to PostgreSQL."
    },
    techStack: ["FastAPI", "LangGraph", "LangChain", "PostgreSQL", "Google Gemini", "Next.js", "React Flow", "WebSockets"],
    keyFeatures: [
      "Visual drag-and-drop workflow canvas",
      "Dynamic state management with LangGraph",
      "Real-time WebSocket token streaming",
      "Google Gemini LLM tool integration",
      "Automated document analysis & report generation"
    ],
    codeSnippets: [
      {
        title: "LangGraph Workflow Node Registration",
        language: "python",
        description: "Compiling dynamic user configuration into a stateful LangGraph execution graph.",
        code: `from langgraph.graph import StateGraph, END
from typing import TypedDict, List

class WorkflowState(TypedDict):
    messages: List[str]
    context: dict
    output: str

# Initialize state machine
builder = StateGraph(WorkflowState)

builder.add_node("research_agent", research_node)
builder.add_node("synthesis_agent", synthesis_node)

builder.set_entry_point("research_agent")
builder.add_edge("research_agent", "synthesis_agent")
builder.add_edge("synthesis_agent", END)

workflow = builder.compile()`
      },
      {
        title: "FastAPI Async Execution Route",
        language: "python",
        description: "Executing graph steps asynchronously.",
        code: `@app.post("/workflow/run")
async def execute_workflow(payload: WorkflowRunRequest):
    result = await workflow_engine.run_async(
        workflow_id=payload.workflow_id,
        inputs=payload.inputs
    )
    return {"status": "success", "data": result}`
      }
    ],
    challenges: [
      {
        challenge: "Handling concurrent streaming responses from asynchronous LLM nodes over WebSockets without blocking the main event loop.",
        howSolved: "Implemented Python asyncio queues and LangGraph's astream() event emitter inside FastAPI task wrappers."
      }
    ],
    whatILearned: [
      "In-depth mastery of LangGraph state machine internals and custom state reducers.",
      "Designing non-blocking async Python WebSocket architectures for streaming AI output.",
      "Translating visual flow graphs into deterministic backend execution trees."
    ],
    githubUrl: "https://github.com/shubhamacharya77/Nexus_AI_Backend",
    liveUrl: "https://nexus-ai-frontend-nine.vercel.app/"
  },
  {
    id: "prepmate-ai",
    slug: "prepmate-ai",
    title: "PrepMate AI",
    heroTagline: "AI Career Roadmap & Mock Interview Platform",
    category: "RAG & LLMs",
    isFeatured: true,
    image: getAssetPath("/prepmate-ai-preview.png"),
    overview: "Get a personalized career roadmap, discover matched job opportunities, and practice interviews with AI — all in one place.",
    problem: "Generic AI chatbots lack specific context about a candidate's actual projects, code background, or resume structure, leading to generic interview questions.",
    solution: "Engineered a Retrieval-Augmented Generation (RAG) backend. Resumes are parsed into text chunks, embedded via sentence transformers, stored in ChromaDB, and retrieved dynamically during candidate Q&A.",
    architecture: {
      title: "PrepMate AI RAG Architecture",
      flow: [
        "Candidate Resume Upload",
        "FastAPI Ingestion & Chunking",
        "ChromaDB Vector Store",
        "Context Retrieval Engine",
        "LLM Mock Interview Copilot"
      ],
      description: "Uploaded resumes are parsed into text chunks, embedded into ChromaDB vectors, and queried using cosine similarity when generating candidate-tailored interview questions and career roadmaps."
    },
    techStack: ["Python", "FastAPI", "ChromaDB", "Google Gemini", "JWT Auth", "PostgreSQL", "Next.js", "Tailwind CSS"],
    keyFeatures: [
      "Personalized career roadmap generator",
      "Matched job opportunity discovery",
      "Interactive AI mock interviews",
      "Resume PDF ingestion & semantic vector indexing",
      "Candidate session persistence"
    ],
    codeSnippets: [
      {
        title: "FastAPI RAG Context Retrieval Route",
        language: "python",
        description: "Querying ChromaDB vector store and augmenting candidate context.",
        code: `@app.post("/api/interview/copilot")
async def generate_interview_question(request: CopilotRequest):
    results = vector_db.query(
        query_texts=[request.topic],
        n_results=3,
        where={"user_id": request.user_id}
    )
    context = "\\n".join(results["documents"][0])
    
    prompt = f"Resume Context:\\n{context}\\n\\nGenerate technical interview question for: {request.topic}"
    response = await llm.generate_async(prompt)
    return {"question": response.text}`
      }
    ],
    challenges: [
      {
        challenge: "Irrelevant text retrieval when candidates uploaded resumes with unique graphical layouts or multi-column formatting.",
        howSolved: "Switched to layout-aware PDF text extraction and semantic sentence boundary splitting."
      }
    ],
    whatILearned: [
      "Optimizing vector database retrieval accuracy with metadata filtering.",
      "Structuring RAG prompts to strictly adhere to retrieved context."
    ],
    githubUrl: "https://github.com/shubhamacharya77/Prepmate-AI-backend",
    liveUrl: "https://prepmate-ai-frontend.vercel.app/"
  }
];

export const TIMELINE_JOURNEY: TimelineItem[] = [
  {
    year: "2026",
    period: "Present",
    role: "AI Backend Developer",
    title: "Looking for AI Backend Opportunities",
    description: "Focusing on agentic AI system design, LangGraph multi-agent orchestration, and high-throughput FastAPI services.",
    highlights: [
      "Designing modular multi-agent workflow engines",
      "Building production-ready RAG vector indexing services",
      "Architecting asynchronous Python backends for enterprise integration"
    ]
  },
  {
    year: "2025",
    period: "Late 2025",
    role: "Agentic AI Developer",
    title: "Built Nexus AI Backend Platform",
    description: "Architected drag-and-drop visual workflow engine with LangGraph, FastAPI, and WebSockets.",
    highlights: [
      "Developed LangGraph state machine execution engine",
      "Integrated real-time streaming WebSocket protocols",
      "Built workflow graph topological validator"
    ]
  },
  {
    year: "2025",
    period: "Mid 2025",
    role: "RAG & Vector Search",
    title: "Built PrepMate AI Backend",
    description: "Engineered RAG vector retrieval system using ChromaDB and FastAPI for personalized career roadmaps and mock interviews.",
    highlights: [
      "Optimized resume chunking and vector search querying",
      "Built candidate context augmentation pipeline",
      "Implemented Google OAuth & JWT authentication"
    ]
  },
  {
    year: "2025",
    period: "Early 2025",
    role: "Backend Systems",
    title: "Started AI Backend Systems Engineering",
    description: "Specialized in Python backend architecture, FastAPI microservices, and LLM infrastructure.",
    highlights: [
      "Mastered Python async execution patterns",
      "Built RESTful OpenAPI backends",
      "Explored Model Context Protocol (MCP) & Agent frameworks"
    ]
  }
];
