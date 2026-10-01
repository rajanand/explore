export type QuizOption = { id: string; label: string; correct: boolean; feedback: string };

export type TopicSection = {
  id: string;
  part: string;
  step: string;
  title: string;
  lede: string;
  bullets?: string[];
  quiz?: { prompt: string; options: QuizOption[] };
};

export type TopicConfig = {
  slug: string;
  brand: string;
  heroEyebrow: string;
  heroTitle: string;
  heroEmphasis: string;
  heroLede: string;
  sections: TopicSection[];
  related: { href: string; label: string }[];
};
