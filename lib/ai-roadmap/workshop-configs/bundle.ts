import type { WorkshopDefinition } from "@/lib/workshop/types";

export const WORKSHOP_BUNDLE: WorkshopDefinition[] = [
  {
    "slug": "pretraining-pipeline",
    "brand": "Pretraining",
    "eyebrow": "AI · core",
    "titleLine1": "The Pretraining",
    "titleEm": "Pipeline",
    "lede": "Data mix, objectives, and what pretraining actually teaches.",
    "outcome": "Explain pretrain vs product behavior in plain language.",
    "cssPrefix": "pp",
    "accent": "#9333ea",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "Data mix, objectives, and what pretraining actually teaches.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "Data mix, objectives, and what pretraining actually teaches."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Explain pretrain vs product behavior in plain language."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Explain pretrain vs product behavior in plain language.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/neural-networks-llm",
        "label": "neural networks llm"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "posttraining-sft",
    "brand": "SFT",
    "eyebrow": "AI · core",
    "titleLine1": "Post-training &",
    "titleEm": "SFT",
    "lede": "Chat templates, instruction tuning, and format compliance.",
    "outcome": "Describe what SFT changes vs what RAG must still provide.",
    "cssPrefix": "ps",
    "accent": "#c026d3",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "Chat templates, instruction tuning, and format compliance.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "Chat templates, instruction tuning, and format compliance."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Describe what SFT changes vs what RAG must still provide."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Describe what SFT changes vs what RAG must still provide.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/pretraining-pipeline",
        "label": "pretraining pipeline"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "in-context-learning",
    "brand": "ICL",
    "eyebrow": "AI · core",
    "titleLine1": "In-Context Learning",
    "titleEm": "deep dive",
    "lede": "Few-shot design, position effects, and distraction.",
    "outcome": "Design few-shot examples that transfer on IT tasks.",
    "cssPrefix": "icl",
    "accent": "#db2777",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "Few-shot design, position effects, and distraction.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "Few-shot design, position effects, and distraction."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Design few-shot examples that transfer on IT tasks."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Design few-shot examples that transfer on IT tasks.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/prompt-context",
        "label": "prompt context"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "hallucinations-why",
    "brand": "Hallucinations",
    "eyebrow": "AI · core",
    "titleLine1": "Why Models",
    "titleEm": "Hallucinate",
    "lede": "Fluent fabrication, calibration, and grounding limits.",
    "outcome": "Separate refusal, grounding, and confident wrong answers.",
    "cssPrefix": "hw",
    "accent": "#e11d48",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "Fluent fabrication, calibration, and grounding limits.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "Fluent fabrication, calibration, and grounding limits."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Separate refusal, grounding, and confident wrong answers."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Separate refusal, grounding, and confident wrong answers.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/rag",
        "label": "rag"
      },
      {
        "href": "/topics/llm-intro",
        "label": "llm intro"
      }
    ]
  },
  {
    "slug": "choosing-llm-models",
    "brand": "Model choice",
    "eyebrow": "AI · core",
    "titleLine1": "Choosing an",
    "titleEm": "LLM",
    "lede": "Latency, context, cost, and risk tradeoffs for internal features.",
    "outcome": "Shortlist models with a weighted decision matrix.",
    "cssPrefix": "clm",
    "accent": "#ea580c",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "Latency, context, cost, and risk tradeoffs for internal features.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "Latency, context, cost, and risk tradeoffs for internal features."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Shortlist models with a weighted decision matrix."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Shortlist models with a weighted decision matrix.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-intro",
        "label": "llm intro"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "attention-in-depth",
    "brand": "Attention",
    "eyebrow": "AI · core",
    "titleLine1": "Attention in",
    "titleEm": "Depth",
    "lede": "What attends across long tickets, runbooks, and prompts.",
    "outcome": "Predict attention focus in a long IT thread mock.",
    "cssPrefix": "aid",
    "accent": "#ca8a04",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "What attends across long tickets, runbooks, and prompts.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "What attends across long tickets, runbooks, and prompts."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Predict attention focus in a long IT thread mock."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Predict attention focus in a long IT thread mock.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/transformer",
        "label": "transformer"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "scaling-laws-practical",
    "brand": "Scaling",
    "eyebrow": "AI · core",
    "titleLine1": "Scaling Laws",
    "titleEm": "(Practical)",
    "lede": "Size vs distill vs RAG — engineering tradeoffs not papers.",
    "outcome": "Argue model size vs retrieval for a copilot feature.",
    "cssPrefix": "slp",
    "accent": "#65a30d",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "Size vs distill vs RAG — engineering tradeoffs not papers.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "Size vs distill vs RAG — engineering tradeoffs not papers."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Argue model size vs retrieval for a copilot feature."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Argue model size vs retrieval for a copilot feature.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/choosing-llm-models",
        "label": "choosing llm models"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "multimodal-fundamentals",
    "brand": "Multimodal",
    "eyebrow": "AI · core",
    "titleLine1": "Multimodal Fundamentals",
    "titleEm": "deep dive",
    "lede": "When images and diagrams belong in the LLM input.",
    "outcome": "Decide text-only vs vision for runbook questions.",
    "cssPrefix": "mf",
    "accent": "#0891b2",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "When images and diagrams belong in the LLM input.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "When images and diagrams belong in the LLM input."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Decide text-only vs vision for runbook questions."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Decide text-only vs vision for runbook questions.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-intro",
        "label": "llm intro"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "embedding-model-choice",
    "brand": "Embed models",
    "eyebrow": "AI · core",
    "titleLine1": "Embedding Model",
    "titleEm": "Choice",
    "lede": "Dimensions, domains, and reindex cost.",
    "outcome": "Pick embed model and dimension for an internal corpus.",
    "cssPrefix": "emc",
    "accent": "#0d9488",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "Dimensions, domains, and reindex cost.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "Dimensions, domains, and reindex cost."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Pick embed model and dimension for an internal corpus."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Pick embed model and dimension for an internal corpus.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/embeddings",
        "label": "embeddings"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "loss-and-objectives",
    "brand": "Loss & objectives",
    "eyebrow": "AI · core",
    "titleLine1": "Loss & Training",
    "titleEm": "Objectives",
    "lede": "How objective shapes fluent but ungrounded behavior.",
    "outcome": "Map training objective to likely failure modes.",
    "cssPrefix": "lao",
    "accent": "#4f46e5",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Core idea",
        "prose": "How objective shapes fluent but ungrounded behavior.",
        "lab": {
          "kind": "steps",
          "steps": [
            {
              "id": "s1",
              "label": "Observe",
              "body": "Notice behavior in INC-1042 / payments-api / internal runbook scenarios."
            },
            {
              "id": "s2",
              "label": "Explain",
              "body": "How objective shapes fluent but ungrounded behavior."
            },
            {
              "id": "s3",
              "label": "Apply",
              "body": "Map training objective to likely failure modes."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Compare",
        "eyebrow": "Part 2 · Step 02",
        "title": "Compare approaches",
        "lab": {
          "kind": "compare",
          "question": "Which path best supports: Map training objective to likely failure modes.",
          "left": {
            "title": "Grounded workflow",
            "body": "Use retrieval, evals, and explicit limits."
          },
          "right": {
            "title": "Ungrounded shortcut",
            "body": "Ask the model to memorize policies from parametric memory."
          },
          "pick": [
            {
              "id": "left",
              "label": "Grounded workflow"
            },
            {
              "id": "right",
              "label": "Ungrounded shortcut"
            }
          ],
          "correctId": "left",
          "ok": "Matches how reliable internal copilots are built.",
          "bad": "Shortcut confabulates — especially on fresh incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/pretraining-pipeline",
        "label": "pretraining pipeline"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "query-rewriting",
    "brand": "Query rewrite",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Query Rewriting",
    "titleEm": "deep dive",
    "lede": "Rewrite, expand, and decompose for better retrieval.",
    "outcome": "Pick rewrite strategy per messy user query type.",
    "cssPrefix": "qr",
    "accent": "#0369a1",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Rewrite, expand, and decompose for better retrieval."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Query Rewriting\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Pick rewrite strategy per messy user query type.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Query rewrite on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/rag",
        "label": "rag"
      },
      {
        "href": "/topics/hybrid-search",
        "label": "hybrid search"
      }
    ]
  },
  {
    "slug": "hyde-multi-query",
    "brand": "HyDE",
    "eyebrow": "AI · retrieval",
    "titleLine1": "HyDE &",
    "titleEm": "Multi-Query",
    "lede": "Hypothetical documents and multi-query fusion.",
    "outcome": "Know when HyDE helps vs adds hallucinated retrieval noise.",
    "cssPrefix": "hmq",
    "accent": "#0284c7",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Hypothetical documents and multi-query fusion."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"HyDE & Multi-Query\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Know when HyDE helps vs adds hallucinated retrieval noise.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying HyDE on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/query-rewriting",
        "label": "query rewriting"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "semantic-cache",
    "brand": "Semantic cache",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Semantic Caching",
    "titleEm": "deep dive",
    "lede": "Cache hits on paraphrase for latency and cost.",
    "outcome": "Design cache keys and thresholds for IT intents.",
    "cssPrefix": "sc",
    "accent": "#0e7490",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Cache hits on paraphrase for latency and cost."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Semantic Caching\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Design cache keys and thresholds for IT intents.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Semantic cache on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/embeddings",
        "label": "embeddings"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "multi-tenant-rag",
    "brand": "Multi-tenant RAG",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Multi-Tenant RAG &",
    "titleEm": "ACLs",
    "lede": "Tenant and role enforcement across shared indexes.",
    "outcome": "Prove two tenants get different grounded answers safely.",
    "cssPrefix": "mtr",
    "accent": "#155e75",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Tenant and role enforcement across shared indexes."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Multi-Tenant RAG & ACLs\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Prove two tenants get different grounded answers safely.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Multi-tenant RAG on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/vector-databases",
        "label": "vector databases"
      },
      {
        "href": "/topics/llm-security",
        "label": "llm security"
      }
    ]
  },
  {
    "slug": "rag-citations",
    "brand": "Citations",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Citations & Grounding",
    "titleEm": "UI",
    "lede": "Chunk pins, highlights, and trust in copilot answers.",
    "outcome": "Design citation UX that catches wrong chunk attribution.",
    "cssPrefix": "rc",
    "accent": "#1d4ed8",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Chunk pins, highlights, and trust in copilot answers."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Citations & Grounding UI\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Design citation UX that catches wrong chunk attribution.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Citations on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/rag",
        "label": "rag"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "conversational-rag",
    "brand": "Conv. RAG",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Conversational RAG",
    "titleEm": "deep dive",
    "lede": "When to re-retrieve across chat turns.",
    "outcome": "Schedule retrieval refresh on follow-up questions.",
    "cssPrefix": "cr",
    "accent": "#4338ca",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "When to re-retrieve across chat turns."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Conversational RAG\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Schedule retrieval refresh on follow-up questions.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Conv. RAG on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/rag",
        "label": "rag"
      },
      {
        "href": "/topics/prompt-context",
        "label": "prompt context"
      }
    ]
  },
  {
    "slug": "structured-rag",
    "brand": "Structured RAG",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Structured RAG",
    "titleEm": "deep dive",
    "lede": "OpenAPI, JSON, and schema-aware chunking.",
    "outcome": "Index structured internal APIs alongside prose.",
    "cssPrefix": "sr",
    "accent": "#6d28d9",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "OpenAPI, JSON, and schema-aware chunking."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Structured RAG\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Index structured internal APIs alongside prose.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Structured RAG on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/document-parsing",
        "label": "document parsing"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "code-rag",
    "brand": "Code RAG",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Code RAG",
    "titleEm": "deep dive",
    "lede": "Repo chunking, symbols, and internal library search.",
    "outcome": "Choose AST vs line chunks for internal SDK search.",
    "cssPrefix": "cr",
    "accent": "#7e22ce",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Repo chunking, symbols, and internal library search."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Code RAG\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Choose AST vs line chunks for internal SDK search.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Code RAG on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/chunking-strategies",
        "label": "chunking strategies"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "retrieval-metrics-lab",
    "brand": "Retrieval metrics",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Retrieval Metrics",
    "titleEm": "Lab",
    "lede": "MRR, nDCG, recall@k on golden queries.",
    "outcome": "Read metric deltas when you change rank or chunking.",
    "cssPrefix": "rml",
    "accent": "#be185d",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "MRR, nDCG, recall@k on golden queries."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Retrieval Metrics Lab\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Read metric deltas when you change rank or chunking.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Retrieval metrics on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-evals",
        "label": "llm evals"
      },
      {
        "href": "/topics/reranking",
        "label": "reranking"
      }
    ]
  },
  {
    "slug": "golden-set-design",
    "brand": "Golden sets",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Golden Set",
    "titleEm": "Design",
    "lede": "Coverage by intent and regression-catching sets.",
    "outcome": "Draft a minimal golden set for a search feature.",
    "cssPrefix": "gsd",
    "accent": "#db2777",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Coverage by intent and regression-catching sets."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Golden Set Design\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Draft a minimal golden set for a search feature.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Golden sets on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-evals",
        "label": "llm evals"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "llm-as-judge",
    "brand": "LLM judge",
    "eyebrow": "AI · retrieval",
    "titleLine1": "LLM-as-Judge",
    "titleEm": "deep dive",
    "lede": "Automated grading with bias and spot-check habits.",
    "outcome": "Run judges without fooling yourself on tone bias.",
    "cssPrefix": "laj",
    "accent": "#e11d48",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Automated grading with bias and spot-check habits."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"LLM-as-Judge\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Run judges without fooling yourself on tone bias.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying LLM judge on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-evals",
        "label": "llm evals"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "synthetic-eval-data",
    "brand": "Synthetic evals",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Synthetic Eval",
    "titleEm": "Data",
    "lede": "Generate Q/A pairs with filters and poison checks.",
    "outcome": "When synthetic data helps vs pollutes evals.",
    "cssPrefix": "sed",
    "accent": "#f43f5e",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Generate Q/A pairs with filters and poison checks."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Synthetic Eval Data\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: When synthetic data helps vs pollutes evals.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Synthetic evals on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/golden-set-design",
        "label": "golden set design"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "text-to-sql",
    "brand": "Text-to-SQL",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Text-to-SQL &",
    "titleEm": "Analytics",
    "lede": "Schema grounding, row limits, and deny dangerous SQL.",
    "outcome": "Approve or reject generated SQL on a CMDB schema mock.",
    "cssPrefix": "tts",
    "accent": "#c2410c",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Schema grounding, row limits, and deny dangerous SQL."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Text-to-SQL & Analytics\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Approve or reject generated SQL on a CMDB schema mock.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Text-to-SQL on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/tool-calling",
        "label": "tool calling"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "multimodal-rag",
    "brand": "MM RAG",
    "eyebrow": "AI · retrieval",
    "titleLine1": "Multimodal RAG",
    "titleEm": "deep dive",
    "lede": "Diagrams and screenshots in retrieval pipelines.",
    "outcome": "Fuse image and text chunks for procedure lookup.",
    "cssPrefix": "mr",
    "accent": "#b45309",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Diagrams and screenshots in retrieval pipelines."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Multimodal RAG\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Fuse image and text chunks for procedure lookup.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying MM RAG on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/multimodal-fundamentals",
        "label": "multimodal fundamentals"
      },
      {
        "href": "/topics/rag",
        "label": "rag"
      }
    ]
  },
  {
    "slug": "agent-memory",
    "brand": "Agent memory",
    "eyebrow": "AI · agents",
    "titleLine1": "Agent Memory",
    "titleEm": "deep dive",
    "lede": "Working, episodic, and semantic memory for copilots.",
    "outcome": "Choose what to store and evict per session.",
    "cssPrefix": "am",
    "accent": "#059669",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Working, episodic, and semantic memory for copilots."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Agent Memory\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Choose what to store and evict per session.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Agent memory on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/ai-agents",
        "label": "ai agents"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "agent-planning",
    "brand": "Planning",
    "eyebrow": "AI · agents",
    "titleLine1": "Agent Planning",
    "titleEm": "Patterns",
    "lede": "ReAct vs plan-and-execute vs fixed workflows.",
    "outcome": "Match control flow to task risk and steps.",
    "cssPrefix": "ap",
    "accent": "#0d9488",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "ReAct vs plan-and-execute vs fixed workflows."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Agent Planning Patterns\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Match control flow to task risk and steps.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Planning on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/ai-agents",
        "label": "ai agents"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "multi-agent-systems",
    "brand": "Multi-agent",
    "eyebrow": "AI · agents",
    "titleLine1": "Multi-Agent Systems",
    "titleEm": "deep dive",
    "lede": "Routers, specialists, and handoff without loops.",
    "outcome": "Design a router + specialist split for IT triage.",
    "cssPrefix": "mas",
    "accent": "#0f766e",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Routers, specialists, and handoff without loops."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Multi-Agent Systems\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Design a router + specialist split for IT triage.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Multi-agent on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/agent-planning",
        "label": "agent planning"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "human-in-the-loop-agents",
    "brand": "HITL agents",
    "eyebrow": "AI · agents",
    "titleLine1": "Human-in-the-Loop Agents",
    "titleEm": "deep dive",
    "lede": "Approvals before irreversible tool actions.",
    "outcome": "Insert approval gates on ticket and prod actions.",
    "cssPrefix": "hitl",
    "accent": "#047857",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Approvals before irreversible tool actions."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Human-in-the-Loop Agents\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Insert approval gates on ticket and prod actions.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying HITL agents on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/tool-calling",
        "label": "tool calling"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "durable-agent-workflows",
    "brand": "Durable agents",
    "eyebrow": "AI · agents",
    "titleLine1": "Durable Agent",
    "titleEm": "Workflows",
    "lede": "Journals, retries, and resume after failure.",
    "outcome": "Sketch step persistence for long-running agent jobs.",
    "cssPrefix": "daw",
    "accent": "#065f46",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Journals, retries, and resume after failure."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Durable Agent Workflows\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Sketch step persistence for long-running agent jobs.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Durable agents on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/ai-agents",
        "label": "ai agents"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "agent-guardrails",
    "brand": "Agent guardrails",
    "eyebrow": "AI · agents",
    "titleLine1": "Agent Guardrails",
    "titleEm": "deep dive",
    "lede": "Input, output, and tool policy layers.",
    "outcome": "Stack policies for a tool-using copilot.",
    "cssPrefix": "ag",
    "accent": "#166534",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Input, output, and tool policy layers."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Agent Guardrails\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Stack policies for a tool-using copilot.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Agent guardrails on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-evals",
        "label": "llm evals"
      },
      {
        "href": "/topics/llm-security",
        "label": "llm security"
      }
    ]
  },
  {
    "slug": "red-teaming",
    "brand": "Red teaming",
    "eyebrow": "AI · agents",
    "titleLine1": "Red Teaming LLM",
    "titleEm": "Apps",
    "lede": "Attack decks and control mapping for culture + CI.",
    "outcome": "Run a lightweight red pass on a RAG feature.",
    "cssPrefix": "rt",
    "accent": "#b91c1c",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Attack decks and control mapping for culture + CI."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Red Teaming LLM Apps\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Run a lightweight red pass on a RAG feature.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Red teaming on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-security",
        "label": "llm security"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "pii-dlp-ai",
    "brand": "PII & DLP",
    "eyebrow": "AI · agents",
    "titleLine1": "PII & DLP for",
    "titleEm": "AI",
    "lede": "Detect, mask, and audit before model and logs.",
    "outcome": "Place DLP in prompt, retrieval, and logging paths.",
    "cssPrefix": "pda",
    "accent": "#991b1b",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Detect, mask, and audit before model and logs."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"PII & DLP for AI\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Place DLP in prompt, retrieval, and logging paths.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying PII & DLP on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/ai-governance",
        "label": "ai governance"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "rag-threat-model-lab",
    "brand": "RAG threats",
    "eyebrow": "AI · agents",
    "titleLine1": "RAG Threat Model",
    "titleEm": "Lab",
    "lede": "STRIDE on ingestion, index, retrieval, generation.",
    "outcome": "Walk threats on a data-flow diagram with controls.",
    "cssPrefix": "rtml",
    "accent": "#7f1d1d",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "STRIDE on ingestion, index, retrieval, generation."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"RAG Threat Model Lab\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Walk threats on a data-flow diagram with controls.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying RAG threats on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-security",
        "label": "llm security"
      },
      {
        "href": "/topics/rag",
        "label": "rag"
      }
    ]
  },
  {
    "slug": "tool-permissions-design",
    "brand": "Tool permissions",
    "eyebrow": "AI · agents",
    "titleLine1": "Tool Permissions",
    "titleEm": "Design",
    "lede": "Scopes, allowlists, and blast radius per tool.",
    "outcome": "Size OAuth scopes vs agent tool allowlists.",
    "cssPrefix": "tpd",
    "accent": "#dc2626",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Concept",
        "eyebrow": "Part 1 · Step 01",
        "title": "Problem framing",
        "prose": "Scopes, allowlists, and blast radius per tool."
      },
      {
        "id": "lab1",
        "num": "02",
        "navLabel": "Decision",
        "eyebrow": "Part 1 · Step 02",
        "title": "Choose wisely",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Tool Permissions Design\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Size OAuth scopes vs agent tool allowlists.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      },
      {
        "id": "lab2",
        "num": "03",
        "navLabel": "Ship checklist",
        "eyebrow": "Part 2 · Step 03",
        "title": "Ship checklist",
        "lab": {
          "kind": "checklist",
          "intro": "Checklist for applying Tool permissions on an internal copilot:",
          "items": [
            {
              "id": "1",
              "label": "Define success metric (not just demo wow)"
            },
            {
              "id": "2",
              "label": "Document data sources + ACL boundaries"
            },
            {
              "id": "3",
              "label": "Add regression tests / golden questions"
            },
            {
              "id": "4",
              "label": "Log retrieval ids and model route in traces"
            },
            {
              "id": "5",
              "label": "Plan rollback (flags, prior prompt, prior index)"
            }
          ],
          "goodScore": 4,
          "goodMsg": "You are ready to pilot with security and SRE partners.",
          "badMsg": "Fill gaps before widening access — shallow pilots become incidents."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/tool-calling",
        "label": "tool calling"
      },
      {
        "href": "/topics/mcp-servers",
        "label": "mcp servers"
      }
    ]
  },
  {
    "slug": "model-routing",
    "brand": "Routing",
    "eyebrow": "AI · platform",
    "titleLine1": "Model Routing &",
    "titleEm": "Cascades",
    "lede": "Small-first routing with escalation on uncertainty.",
    "outcome": "Design a cascade with cost and latency counters.",
    "cssPrefix": "mr",
    "accent": "#d97706",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Small-first routing with escalation on uncertainty.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Routing:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Small-first routing with escalation on uncertainty. Tie changes to evals and observability.",
              "verdict": "Design a cascade with cost and latency counters."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Model Routing & Cascades\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Design a cascade with cost and latency counters.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/choosing-llm-models",
        "label": "choosing llm models"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "llm-cost-optimization",
    "brand": "Cost",
    "eyebrow": "AI · platform",
    "titleLine1": "LLM Cost",
    "titleEm": "Optimization",
    "lede": "Cache, routing, context trim, and batching levers.",
    "outcome": "Prioritize cost levers for a high-QPS copilot.",
    "cssPrefix": "lco",
    "accent": "#f59e0b",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Cache, routing, context trim, and batching levers.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Cost:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Cache, routing, context trim, and batching levers. Tie changes to evals and observability.",
              "verdict": "Prioritize cost levers for a high-QPS copilot."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"LLM Cost Optimization\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Prioritize cost levers for a high-QPS copilot.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/context-windows",
        "label": "context windows"
      },
      {
        "href": "/topics/semantic-cache",
        "label": "semantic cache"
      }
    ]
  },
  {
    "slug": "ai-slos",
    "brand": "AI SLOs",
    "eyebrow": "AI · platform",
    "titleLine1": "SLOs for AI",
    "titleEm": "Features",
    "lede": "Latency budgets paired with quality regression alerts.",
    "outcome": "Define SLOs that include answer quality signals.",
    "cssPrefix": "as",
    "accent": "#eab308",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Latency budgets paired with quality regression alerts.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to AI SLOs:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Latency budgets paired with quality regression alerts. Tie changes to evals and observability.",
              "verdict": "Define SLOs that include answer quality signals."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"SLOs for AI Features\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Define SLOs that include answer quality signals.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/ai-observability",
        "label": "ai observability"
      },
      {
        "href": "/topics/llm-evals",
        "label": "llm evals"
      }
    ]
  },
  {
    "slug": "quantization-inference",
    "brand": "Quantization",
    "eyebrow": "AI · platform",
    "titleLine1": "Quantization &",
    "titleEm": "Inference",
    "lede": "INT4/8 quality tradeoffs for self-hosted models.",
    "outcome": "Explain quant tradeoffs to infra stakeholders.",
    "cssPrefix": "qi",
    "accent": "#84cc16",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "INT4/8 quality tradeoffs for self-hosted models.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Quantization:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "INT4/8 quality tradeoffs for self-hosted models. Tie changes to evals and observability.",
              "verdict": "Explain quant tradeoffs to infra stakeholders."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Quantization & Inference\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Explain quant tradeoffs to infra stakeholders.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/neural-networks-llm",
        "label": "neural networks llm"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "local-llms",
    "brand": "Local LLMs",
    "eyebrow": "AI · platform",
    "titleLine1": "Running LLMs",
    "titleEm": "Locally",
    "lede": "Dev laptops, Ollama, and when not to self-host.",
    "outcome": "Decide local vs API for dev and edge cases.",
    "cssPrefix": "ll",
    "accent": "#65a30d",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Dev laptops, Ollama, and when not to self-host.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Local LLMs:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Dev laptops, Ollama, and when not to self-host. Tie changes to evals and observability.",
              "verdict": "Decide local vs API for dev and edge cases."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Running LLMs Locally\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Decide local vs API for dev and edge cases.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/quantization-inference",
        "label": "quantization inference"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "inference-serving",
    "brand": "Serving",
    "eyebrow": "AI · platform",
    "titleLine1": "Inference Serving",
    "titleEm": "deep dive",
    "lede": "Batching, concurrency, and KV cache at the server.",
    "outcome": "Reason about queueing under concurrent chat load.",
    "cssPrefix": "is",
    "accent": "#4d7c0f",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Batching, concurrency, and KV cache at the server.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Serving:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Batching, concurrency, and KV cache at the server. Tie changes to evals and observability.",
              "verdict": "Reason about queueing under concurrent chat load."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Inference Serving\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Reason about queueing under concurrent chat load.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/context-windows",
        "label": "context windows"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "rlhf-alignment",
    "brand": "RLHF",
    "eyebrow": "AI · platform",
    "titleLine1": "RLHF & Alignment",
    "titleEm": "(Intuition)",
    "lede": "Reward models and policy loops without math depth.",
    "outcome": "Explain RLHF failure modes to product partners.",
    "cssPrefix": "ra",
    "accent": "#3f6212",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Reward models and policy loops without math depth.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to RLHF:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Reward models and policy loops without math depth. Tie changes to evals and observability.",
              "verdict": "Explain RLHF failure modes to product partners."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"RLHF & Alignment (Intuition)\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Explain RLHF failure modes to product partners.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/posttraining-sft",
        "label": "posttraining sft"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "dpo-preferences",
    "brand": "DPO",
    "eyebrow": "AI · platform",
    "titleLine1": "DPO & Preference",
    "titleEm": "Tuning",
    "lede": "A/B preferences as a modern alignment alternative.",
    "outcome": "Contrast DPO with RLHF for tone alignment.",
    "cssPrefix": "dp",
    "accent": "#15803d",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "A/B preferences as a modern alignment alternative.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to DPO:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "A/B preferences as a modern alignment alternative. Tie changes to evals and observability.",
              "verdict": "Contrast DPO with RLHF for tone alignment."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"DPO & Preference Tuning\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Contrast DPO with RLHF for tone alignment.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/rlhf-alignment",
        "label": "rlhf alignment"
      },
      {
        "href": "/topics/fine-tuning",
        "label": "fine tuning"
      }
    ]
  },
  {
    "slug": "feature-flags-ai",
    "brand": "Flags",
    "eyebrow": "AI · platform",
    "titleLine1": "Feature Flags for",
    "titleEm": "AI",
    "lede": "Cohort rollouts for prompts, models, and retrievers.",
    "outcome": "Roll out model changes behind eval gates.",
    "cssPrefix": "ffa",
    "accent": "#16a34a",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Cohort rollouts for prompts, models, and retrievers.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Flags:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Cohort rollouts for prompts, models, and retrievers. Tie changes to evals and observability.",
              "verdict": "Roll out model changes behind eval gates."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Feature Flags for AI\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Roll out model changes behind eval gates.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/llm-evals",
        "label": "llm evals"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "ai-product-metrics",
    "brand": "Product metrics",
    "eyebrow": "AI · platform",
    "titleLine1": "AI Product",
    "titleEm": "Metrics",
    "lede": "Beyond thumbs-down: action and resolution funnels.",
    "outcome": "Define metrics that tie answers to user outcomes.",
    "cssPrefix": "apm",
    "accent": "#22c55e",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Beyond thumbs-down: action and resolution funnels.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Product metrics:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Beyond thumbs-down: action and resolution funnels. Tie changes to evals and observability.",
              "verdict": "Define metrics that tie answers to user outcomes."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"AI Product Metrics\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Define metrics that tie answers to user outcomes.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/ai-observability",
        "label": "ai observability"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "enterprise-copilot-patterns",
    "brand": "Copilot patterns",
    "eyebrow": "AI · platform",
    "titleLine1": "Enterprise Copilot",
    "titleEm": "Patterns",
    "lede": "Search, draft, and act patterns for IT workflows.",
    "outcome": "Pick Q&A vs draft vs agent per workflow.",
    "cssPrefix": "ecp",
    "accent": "#10b981",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "Search, draft, and act patterns for IT workflows.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Copilot patterns:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "Search, draft, and act patterns for IT workflows. Tie changes to evals and observability.",
              "verdict": "Pick Q&A vs draft vs agent per workflow."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Enterprise Copilot Patterns\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Pick Q&A vs draft vs agent per workflow.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/ai-agents",
        "label": "ai agents"
      },
      {
        "href": "/topics/rag",
        "label": "rag"
      }
    ]
  },
  {
    "slug": "workflow-automation-ai",
    "brand": "Workflows",
    "eyebrow": "AI · platform",
    "titleLine1": "Workflow Automation with",
    "titleEm": "AI",
    "lede": "When BPMN-style beats free-form agents.",
    "outcome": "Mix fixed steps with LLM steps safely.",
    "cssPrefix": "waa",
    "accent": "#14b8a6",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "When BPMN-style beats free-form agents.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to Workflows:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "When BPMN-style beats free-form agents. Tie changes to evals and observability.",
              "verdict": "Mix fixed steps with LLM steps safely."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Workflow Automation with AI\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Mix fixed steps with LLM steps safely.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/agent-planning",
        "label": "agent planning"
      },
      {
        "href": "/topics/rag",
        "label": "RAG"
      }
    ]
  },
  {
    "slug": "incident-copilot-capstone",
    "brand": "INC capstone",
    "eyebrow": "AI · platform",
    "titleLine1": "Incident Copilot",
    "titleEm": "Capstone",
    "lede": "End-to-end INC → graph → RAG → agent → eval checklist.",
    "outcome": "Walk a full incident copilot architecture with tradeoffs.",
    "cssPrefix": "icc",
    "accent": "#0d9488",
    "sections": [
      {
        "id": "concept",
        "num": "01",
        "navLabel": "Lever",
        "eyebrow": "Part 1 · Step 01",
        "title": "Platform lever",
        "prose": "End-to-end INC → graph → RAG → agent → eval checklist.",
        "lab": {
          "kind": "slider",
          "label": "Team maturity / traffic",
          "min": 1,
          "max": 10,
          "step": 1,
          "thresholds": [
            {
              "max": 3,
              "msg": "Start with evals + logging before routing/cost tricks.",
              "warn": true
            },
            {
              "max": 7,
              "msg": "Introduce caching, routing, and SLOs with error budgets."
            },
            {
              "max": 10,
              "msg": "Full platform: flags, multi-model, cost attribution dashboards."
            }
          ]
        }
      },
      {
        "id": "lab2",
        "num": "02",
        "navLabel": "Tradeoffs",
        "eyebrow": "Part 1 · Step 02",
        "title": "Tradeoffs",
        "lab": {
          "kind": "profiles",
          "prompt": "Compare approaches relevant to INC capstone:",
          "profiles": [
            {
              "id": "good",
              "label": "Production-minded",
              "meta": "Slower rollout",
              "body": "End-to-end INC → graph → RAG → agent → eval checklist. Tie changes to evals and observability.",
              "verdict": "Walk a full incident copilot architecture with tradeoffs."
            },
            {
              "id": "bad",
              "label": "Demo-only",
              "meta": "Fast but fragile",
              "body": "Skip retrieval metrics, ship highest temperature, no ACL filters.",
              "verdict": "Works in the meeting — fails under real tickets and adversarial input."
            }
          ]
        }
      },
      {
        "id": "lab3",
        "num": "03",
        "navLabel": "Quiz",
        "eyebrow": "Part 2 · Step 03",
        "title": "Stakeholder quiz",
        "lab": {
          "kind": "quiz",
          "prompt": "Your team asks: \"Incident Copilot Capstone\" — what is the best next step for INC-1042 / payments-api / internal runbook?",
          "options": [
            {
              "id": "a",
              "label": "Measure on golden queries before changing production"
            },
            {
              "id": "b",
              "label": "Ship the demo setting to all users immediately"
            },
            {
              "id": "c",
              "label": "Disable evals to save cost"
            }
          ],
          "correctId": "a",
          "ok": "Aligned with module outcome: Walk a full incident copilot architecture with tradeoffs.",
          "bad": "Risky for production — revisit constraints, ACLs, and eval gates."
        }
      }
    ],
    "related": [
      {
        "href": "/topics/graph-rag",
        "label": "graph rag"
      },
      {
        "href": "/topics/llm-evals",
        "label": "llm evals"
      },
      {
        "href": "/topics/ai-agents",
        "label": "ai agents"
      }
    ]
  }
];

export const WORKSHOP_BY_SLUG = new Map(WORKSHOP_BUNDLE.map((w) => [w.slug, w]));
