export type QuizOption = { id: string; label: string; correct: boolean; feedback: string };

export type TopicScenario = {
  title: string;
  context: string;
  steps: { label: string; detail: string }[];
};

export type TopicSection = {
  id: string;
  part: string;
  step: string;
  title: string;
  lede: string;
  bullets?: string[];
  quiz?: { prompt: string; options: QuizOption[] };
  scenario?: TopicScenario;
  code?: string;
  takeaway?: string;
};

export type TopicConfig = {
  slug: string;
  brand: string;
  heroEyebrow: string;
  heroTitle: string;
  heroEmphasis: string;
  heroLede: string;
  /** What the reader can do after finishing — user-value anchor */
  outcomeForUser?: string;
  prerequisites?: string[];
  sections: TopicSection[];
  related: { href: string; label: string }[];
};
