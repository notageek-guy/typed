export interface Language {
  value: string;
  label: string;
}

export interface cases extends Language {}
export const languageNames: Language[] = [
  { value: "typescript", label: "TypeScript" },
  { value: "graphql", label: "GraphQL" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "ruby", label: "Ruby" },
  { value: "go", label: "Go" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "csharp", label: "C#" },
  { value: "rust", label: "Rust" },
  { value: "kotlin", label: "Kotlin" },
  { value: "javascript", label: "JavaScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "c", label: "C" },
  { value: "cplusplus", label: "C++" },
  { value: "objectivec", label: "Objective-C" },
  { value: "perl", label: "Perl" },
  { value: "shell", label: "Shell Script" },
];

export const namingCase: cases[] = [
  {
    label: "Pascal",
    value: "pascal",
  },
  {
    label: "Camel",
    value: "camel",
  },
  {
    label: "Default",
    value: "default",
  },
  {
    value: "lower",
    label: "Lower Case",
  },
];

export const extensions: Record<string, string> = {
  typescript: ".ts",
  graphql: ".graphql",
  python: ".py",
  java: ".java",
  ruby: ".rb",
  go: ".go",
  php: ".php",
  swift: ".swift",
  csharp: ".cs",
  rust: ".rs",
  kotlin: ".kt",
  javascript: ".js",
  html: ".html",
  css: ".css",
  c: ".c",
  cplusplus: ".cpp",
  objectivec: ".m",
  perl: ".pl",
  shell: ".sh",
};

export const getMimeType = (lang: string): string => {
  switch (lang) {
    case "typescript":
      return "application/typescript";
    case "javascript":
      return "application/javascript";
    case "python":
      return "text/python";
    case "java":
      return "text/java";
    case "ruby":
      return "text/ruby";
    case "go":
      return "text/go";
    case "php":
      return "text/php";
    case "swift":
      return "text/swift";
    case "csharp":
      return "text/csharp";
    case "rust":
      return "text/rust";
    case "kotlin":
      return "text/kotlin";
    case "html":
      return "text/html";
    case "css":
      return "text/css";
    case "c":
      return "text/c";
    case "cplusplus":
      return "text/cplusplus";
    case "objectivec":
      return "text/objectivec";
    case "perl":
      return "text/perl";
    case "graphql":
      return "application/graphql";
    case "shell":
      return "text/shell";
    default:
      return "text/plain"; // Default to plain text
  }
};
