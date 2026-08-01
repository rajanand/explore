export type OntologyNodeType = "class" | "instance";

export type OntologyNode = {
  id: string;
  label: string;
  type: OntologyNodeType;
  description: string;
  x: number;
  y: number;
};

export type OntologyEdge = {
  from: string;
  to: string;
  rel: string;
};

/**
 * Acme Analytics IT domain — incident response, HR policy, API docs.
 * Familiar to engineers shipping internal support bots + RAG.
 */
export const ONTOLOGY_NODES: OntologyNode[] = [
  {
    id: "thing",
    label: "Thing",
    type: "class",
    description: "Root class — anything in our model.",
    x: 0.5,
    y: 0.06,
  },
  {
    id: "person",
    label: "Person",
    type: "class",
    description: "People who use or operate the platform.",
    x: 0.22,
    y: 0.24,
  },
  {
    id: "employee",
    label: "Employee",
    type: "class",
    description: "Subclass of Person — has HR attributes (PTO, role).",
    x: 0.12,
    y: 0.42,
  },
  {
    id: "document",
    label: "Document",
    type: "class",
    description: "Written artifacts stored in Confluence, PDF, Git.",
    x: 0.78,
    y: 0.24,
  },
  {
    id: "policy",
    label: "Policy",
    type: "class",
    description: "Rules people must follow — HR, security, compliance.",
    x: 0.68,
    y: 0.42,
  },
  {
    id: "runbook",
    label: "Runbook",
    type: "class",
    description: "Operational playbooks for on-call engineers.",
    x: 0.88,
    y: 0.42,
  },
  {
    id: "service",
    label: "Service",
    type: "class",
    description: "Production APIs and systems customers depend on.",
    x: 0.38,
    y: 0.42,
  },
  {
    id: "incident",
    label: "Incident",
    type: "class",
    description: "Production issue tracked in PagerDuty / Jira.",
    x: 0.5,
    y: 0.58,
  },
  {
    id: "sarah",
    label: "Sarah Chen",
    type: "instance",
    description: "Employee ENG-204 — on-call this week.",
    x: 0.08,
    y: 0.72,
  },
  {
    id: "inc-1042",
    label: "INC-1042",
    type: "instance",
    description: "Incident: Events API p95 latency > 500ms for 8 minutes.",
    x: 0.42,
    y: 0.76,
  },
  {
    id: "events-api",
    label: "Events API",
    type: "instance",
    description: "Service prod/events-api — streams analytics events.",
    x: 0.58,
    y: 0.72,
  },
  {
    id: "hr-policy",
    label: "HR Policy 2024",
    type: "instance",
    description: "Policy doc: 20 PTO days, 3 remote days/week.",
    x: 0.72,
    y: 0.72,
  },
  {
    id: "api-runbook",
    label: "API Latency Runbook",
    type: "instance",
    description: "Runbook: check DB pool, recent deploys, then page platform.",
    x: 0.9,
    y: 0.72,
  },
];

export const ONTOLOGY_EDGES: OntologyEdge[] = [
  { from: "person", to: "thing", rel: "isA" },
  { from: "document", to: "thing", rel: "isA" },
  { from: "service", to: "thing", rel: "isA" },
  { from: "incident", to: "thing", rel: "isA" },
  { from: "employee", to: "person", rel: "isA" },
  { from: "policy", to: "document", rel: "isA" },
  { from: "runbook", to: "document", rel: "isA" },
  { from: "sarah", to: "employee", rel: "isA" },
  { from: "inc-1042", to: "incident", rel: "isA" },
  { from: "events-api", to: "service", rel: "isA" },
  { from: "hr-policy", to: "policy", rel: "isA" },
  { from: "api-runbook", to: "runbook", rel: "isA" },
  { from: "inc-1042", to: "events-api", rel: "affects" },
  { from: "inc-1042", to: "sarah", rel: "assignedTo" },
  { from: "api-runbook", to: "events-api", rel: "documents" },
  { from: "hr-policy", to: "employee", rel: "appliesTo" },
];

export const BUILDING_BLOCKS = [
  {
    id: "classes",
    title: "Classes (types)",
    formula: "Employee isA Person",
    detail:
      "Shared categories — like types in TypeScript. Every Employee inherits Person fields (name, email) plus HR-specific ones.",
    scenario:
      "You define Employee once; 500 staff records are instances, not 500 new types.",
    example: "Person → Employee · Document → Policy, Runbook · Service · Incident",
  },
  {
    id: "instances",
    title: "Instances (individuals)",
    formula: "SarahChen isA Employee",
    detail:
      "Real rows in your systems — one ticket, one person, one API cluster.",
    scenario:
      "INC-1042 is an instance of Incident; Events API is an instance of Service.",
    example: "Sarah Chen · INC-1042 · Events API · HR Policy 2024",
  },
  {
    id: "properties",
    title: "Properties (attributes)",
    formula: "EventsAPI rateLimitPerMin 1000",
    detail:
      "Fields on a class or instance — the columns you would put in a database schema.",
    scenario:
      "Employee.ptoDaysRemaining = 12 · Incident.severity = high · Service.ownerTeam = platform",
    example: "ptoDaysRemaining, severity, rateLimitPerMin, openedAt",
  },
  {
    id: "relations",
    title: "Relationships",
    formula: "INC-1042 affects EventsAPI",
    detail:
      "Named links between entities — not always parent/child. This is where ontology beats a folder tree.",
    scenario:
      "A ticket affects a service; a runbook documents that service; a policy applies to every employee.",
    example: "affects · assignedTo · documents · appliesTo · dependsOn",
  },
] as const;

export const CREATION_STEPS = [
  {
    id: "scope",
    title: "1. Define scope",
    who: "Product + engineering lead",
    action:
      "Write the questions your AI must answer and which systems are in bounds.",
    output: "Scope doc: IT support bot — HR policy, API docs, incident runbooks.",
    artifact: "Q: PTO balance? API rate limit? Who to page for latency?",
  },
  {
    id: "inventory",
    title: "2. List entities",
    who: "Domain experts (HR, SRE, support)",
    action:
      "Brainstorm nouns in the domain — ignore hierarchy first, just name things people talk about.",
    output: "Employee, PTO request, API key, incident, Events API, on-call rotation…",
    artifact: "Sticky-note list from a 60-minute workshop",
  },
  {
    id: "classes",
    title: "3. Group into classes",
    who: "Engineer + domain expert",
    action:
      "Merge synonyms and build is-a hierarchy. Policy and Runbook both become Document subclasses.",
    output: "Class tree: Person → Employee · Document → Policy, Runbook · Service · Incident",
    artifact: "Person\n  └── Employee\nDocument\n  ├── Policy\n  └── Runbook",
  },
  {
    id: "properties",
    title: "4. Add properties",
    who: "Engineer mapping to source systems",
    action:
      "For each class, list attributes and map to Salesforce, Jira, CMDB, or HRIS fields.",
    output: "Employee.email, Employee.ptoDays · Incident.severity · Service.slaTier",
    artifact: "employee.email → Workday · incident.id → Jira INC-*",
  },
  {
    id: "relations",
    title: "5. Define relationships",
    who: "Engineer + SRE",
    action:
      "Document how entities link across systems — the facts a folder tree cannot express.",
    output: "Incident affects Service · Runbook documents Service · Policy appliesTo Employee",
    artifact: "INC-1042 --affects--> Events API",
  },
  {
    id: "publish",
    title: "6. Publish schema",
    who: "Platform team",
    action:
      "Serialize to JSON Schema, OWL, or internal YAML. Version in Git; review like any API contract.",
    output: "ontology/v1/acme-it.json — consumed by RAG tagger, search filters, tool schemas",
    artifact: '{ "class": "Incident", "rel": "affects", "target": "Service" }',
  },
  {
    id: "connect",
    title: "7. Wire to pipelines",
    who: "ML / search engineers",
    action:
      "Tag RAG chunks with class IDs, sync CMDB edges nightly, validate LLM tool params against schema.",
    output: "HR PDF chunks tagged Policy · vector search + metadata filter class=Runbook",
    artifact: "RAG query: latency → filter Runbook + Service → grounded answer",
  },
] as const;

export const AI_USE_CASES = [
  {
    id: "rag",
    title: "RAG + metadata filters",
    detail:
      "User asks about PTO → retrieve only chunks tagged Policy, not API docs. Cuts noise and hallucination.",
    example:
      "Question: How many PTO days? → filter ontologyClass=Policy → chunk from HR Policy 2024",
  },
  {
    id: "llm",
    title: "LLM tool schemas",
    detail:
      "OpenAPI / function definitions are mini-ontologies: parameter types, allowed enums, required fields.",
    example:
      "createIncident(serviceId: string, severity: enum[critical,high]) → ties to Service class",
  },
  {
    id: "graph",
    title: "Knowledge graph queries",
    detail:
      "Traverse edges: which runbooks cover services affected by open incidents?",
    example:
      "INC-1042 → affects → Events API ← documents ← API Latency Runbook",
  },
  {
    id: "interop",
    title: "One vocabulary across teams",
    detail:
      "Support, HR, and platform agree: Customer ≠ User ≠ Employee. Ontology document is the contract.",
    example:
      "Jira ticket type Incident maps to ontology class Incident — same ID in search index",
  },
] as const;

export const TAXONOMY_EXAMPLE = {
  label: "Support ticket categories (folder tree only)",
  nodes: [
    "Infrastructure",
    "  API / Services",
    "  Database",
    "People / HR",
    "  PTO & leave",
    "  Onboarding",
  ],
  limitation:
    "Categories tell you where a file lives — not that INC-1042 affects Events API or which runbook to open.",
};

export const ONTOLOGY_EXAMPLE = {
  crossLink: {
    from: "INC-1042",
    fromType: "Incident",
    rel: "affects",
    to: "Events API",
    toType: "Service",
  },
  extraLinks: [
    "INC-1042 assignedTo Sarah Chen",
    "API Latency Runbook documents Events API",
    "HR Policy 2024 appliesTo Employee (all staff)",
  ],
};
