const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate  a study Material for PYTHON for EXAM and level of difficulty will be EASY with summary of course, List of chapters along with summary for each chapter, Topic list in each chapter, All result in JSON format" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"courseSummary\": \"This course covers Python basics including variables, logic flow, and functions.\",\n  \"chapters\": [\n    {\n      \"chapterTitle\": \"Introduction to Python\",\n      \"chapterSummary\": \"Basics of setting up environment and running scripts.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Variables and Data Types\",\n        \"Basic Output\"\n      ]\n    }\n  ]\n}\n```\n" },
      ],
    },
  ],
});

export const generateNotesAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format(Do not Add HTMLKL, Head, Body, title tag), The chapters: {\n      \"topics\": [\n        \"Advanced Middleware Patterns\",\n        \"Error Handling Middleware\"\n      ],\n      \"chapterTitle\": \"Middleware Mastery\",\n      \"chapterSummary\": \"Explore the intricacies of Express middleware.\"\n    }," },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```html\n<h1>Middleware Mastery</h1>\n<p>Explore the intricacies of Express middleware.</p>\n<h2>Chapter 1: Advanced Middleware Patterns</h2>\n<ul>\n  <li><strong>Understanding Middleware:</strong> Moving beyond request/response manipulation.</li>\n</ul>\n```\n" },
      ],
    },
  ],
});

export const GenerateStudyTypeContentAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate the flashcard on topic : Flutter Fundamentals in JSON format with front back Content, Maximum 15" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"The fundamental building block of a Flutter UI.\"\n  },\n  {\n    \"front\": \"What are the two main types of widgets?\",\n    \"back\": \"StatelessWidget and StatefulWidget.\"\n  }\n]\n```\n" },
      ],
    },
  ]
});

export const GenerateQuizAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate Quiz on Topic : Flutter Fundamentals with Question and Options along with correct answer in JSON format (MAX 10)\n" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"quizTitle\": \"Flutter Fundamentals\",\n  \"questions\": [\n    {\n      \"question\": \"What is the primary programming language used in Flutter development?\",\n      \"options\": [\"Java\", \"Kotlin\", \"Dart\", \"Swift\"],\n      \"correctAnswer\": \"Dart\"\n    },\n    {\n      \"question\": \"Which widget is the root of the tree?\",\n      \"options\": [\"Column\", \"Row\", \"Scaffold\", \"Center\"],\n      \"correctAnswer\": \"Scaffold\"\n    }\n  ]\n}\n```\n" },
      ],
    },
  ],
});
