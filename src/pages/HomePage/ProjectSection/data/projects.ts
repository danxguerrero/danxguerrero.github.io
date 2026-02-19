type projectType = {
  name: string;
  description: string;
  stack: string[];
  deployedUrl: string;
  githubUrl: string;
  group: string;
};

export const projectData: projectType[] = [
  {
    name: "MockingBird",
    description:
      "MockingBird is a technical interview practice application that uses Google's Gemini AI to conduct practice interview's for Software Engineers",
    stack: [
      "TypeScript",
      "Next.js",
      "Google Gemini",
      "TailwindCSS",
      "Monaco Editor",
      "Vercel",
    ],
    deployedUrl: "https://mocking-bird-rho.vercel.app/",
    githubUrl: "https://github.com/danxguerrero/MockingBird",
    group: "solo",
  },
  {
    name: "MockingBird CLI",
    description:
      "MockingBird CLI is a technical interview practice platorm built with React Ink that allows you to interact with UI similar to the desktop version of the app but in your terminal!",
    stack: ["Javascript", "React Ink", "Google Gemini", "Node.js", "Vercel"],
    deployedUrl: "",
    githubUrl: "https://github.com/danxguerrero/mockingbird-cli",
    group: "solo",
  },
  {
    name: "Project Hermes",
    description:
      "An application that allows gamers to connect based on the game they are playing and their current objective. Users are able to chat with their party for east communication.",
    stack: ["JavaScript", "React", "Material UI", "Socket.io", "Sass"],
    deployedUrl: "https://atlaus-project-hermes.netlify.app/",
    githubUrl: "https://github.com/ATLAUS/Project-Hermes-React",
    group: "ATLAUS",
  },
];
