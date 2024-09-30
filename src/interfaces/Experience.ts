export interface experienceType {
  title: string;
  company: string;
  content: [string];
  stack: Array<stackTypes>;
  direction?: "row" | "row-reverse";
  start: string;
  end: string;
}

export type stackTypes =
  | "Go"
  | "JavaScript"
  | "Python"
  | "CSS"
  | "HTML"
  | "React"
  | "NodeJS"
  | "Docker"
  | "Mongo"
  | "Saas"
  | "Heroku"
  | "Babel"
  | "Git"
  | "Github"
  | "Gitlab"
  | "Linux"
  | "NextJS"
  | "PostgreSQL"
  | "Python"
  | "Redux"
  | "Rust"
  | "TypeScript"
  | "Ubuntu"
  | "Vercel"
  | "WebAssembly"
  | "Gsap"
  | "Vue"
  | "GithubActions"
  | "GraphQL"
  | "Django"
  |"RabbitMQ";
