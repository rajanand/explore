export const HOOK_SCENARIOS = [
  {
    id: "shell",
    prompt: "Block dangerous shell commands before they run",
    event: "beforeShellExecution",
    hint: "Runs right before the terminal executes a command.",
  },
  {
    id: "format",
    prompt: "Auto-format files after the agent edits them",
    event: "afterFileEdit",
    hint: "Fires once a file edit from the agent is applied.",
  },
  {
    id: "subagent",
    prompt: "Require approval before launching a subagent",
    event: "subagentStart",
    hint: "Controls whether a delegated Task/subagent may start.",
  },
  {
    id: "prompt",
    prompt: "Scan user prompts for secrets before sending",
    event: "beforeSubmitPrompt",
    hint: "Last chance to validate or rewrite the prompt.",
  },
] as const;

export const SUBAGENT_SCENARIOS = [
  {
    id: "grep",
    task: "Find every API route that mentions authentication across a large repo",
    agent: "explore",
    label: "explore",
    why: "Optimized for fast, pattern-based codebase search.",
  },
  {
    id: "pr",
    task: "Review uncommitted changes for likely bugs before opening a PR",
    agent: "bugbot",
    label: "bugbot",
    why: "Focused defect-first review of a diff.",
  },
  {
    id: "deploy",
    task: "Debug why Vercel preview builds fail on this branch",
    agent: "deployment-expert",
    label: "deployment-expert",
    why: "Specialized CI/CD and Vercel deployment knowledge.",
  },
  {
    id: "multi",
    task: "Research a vague question, search the web, and write a summary",
    agent: "generalPurpose",
    label: "generalPurpose",
    why: "Broad tool use when no narrow specialist fits.",
  },
] as const;

export const SKILL_SCENARIOS = [
  {
    id: "skill",
    userMessage: "Help me author a new Cursor skill for our commit format",
    loadsSkill: true,
    skillName: "create-skill",
  },
  {
    id: "hook",
    userMessage: "Add a hook that runs after every file edit",
    loadsSkill: true,
    skillName: "create-hook",
  },
  {
    id: "react",
    userMessage: "Why is my useEffect running twice in React 19?",
    loadsSkill: false,
    skillName: null,
  },
] as const;

export const AGENT_LOOP_STEPS = [
  { id: "user", label: "You send a prompt", detail: "Rules, skills, and open files shape context." },
  { id: "plan", label: "Agent plans", detail: "The model decides: answer directly, call a tool, or delegate." },
  { id: "hook-pre", label: "Hooks (optional)", detail: "preToolUse / beforeShellExecution can allow, block, or modify." },
  { id: "tool", label: "Tool or subagent", detail: "Read files, run commands, MCP, or spawn a specialist subagent." },
  { id: "hook-post", label: "Hooks (optional)", detail: "postToolUse / afterFileEdit can audit or trigger follow-ups." },
  { id: "reply", label: "Response", detail: "Results fold back into context; the loop may repeat." },
] as const;
