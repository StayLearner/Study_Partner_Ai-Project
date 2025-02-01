const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");


const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
  // responseMimeType: "text/plain",
};


  export const courseOutlineAIModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate  a study Material for PYTHON for EXAM and level of difficulty will be EASY with summary of course, List of chapters along with summary for each chapter, Topic list in each chapter, All result in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"courseSummary\": \"This Python course provides a beginner-friendly introduction to the fundamentals of Python programming.  It covers basic syntax, data types, control flow, and fundamental programming concepts.  The focus is on building a strong foundation for further learning.\",\n  \"chapters\": [\n    {\n      \"chapterTitle\": \"Introduction to Python\",\n      \"chapterSummary\": \"This chapter introduces the basics of Python, including installation, setting up your environment, and running your first Python program.  It also covers fundamental concepts like variables, comments, and basic output.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Installing Python\",\n        \"Setting up your IDE/editor\",\n        \"Running your first Python program\",\n        \"Variables and Data Types (Integers, Floats, Strings)\",\n        \"Comments in Python\",\n        \"Basic Output using `print()`\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Operators and Expressions\",\n      \"chapterSummary\": \"This chapter covers various operators in Python, including arithmetic, comparison, logical, and assignment operators. It also explains how to construct expressions and understand operator precedence.\",\n      \"topics\": [\n        \"Arithmetic Operators (+, -, *, /, //, %, **)\",\n        \"Comparison Operators (==, !=, >, <, >=, <=)\",\n        \"Logical Operators (and, or, not)\",\n        \"Assignment Operators (=, +=, -=, *=, /=)\",\n        \"Operator Precedence\",\n        \"Evaluating Expressions\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Control Flow\",\n      \"chapterSummary\": \"This chapter introduces conditional statements (if, elif, else) and loops (for, while) to control the flow of execution in your Python programs.\",\n      \"topics\": [\n        \"Conditional Statements (`if`, `elif`, `else`)\",\n        \"Nested Conditional Statements\",\n        \"For Loops\",\n        \"While Loops\",\n        \"Loop Control Statements (`break`, `continue`)\",\n        \"Nested Loops\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Data Structures: Lists and Tuples\",\n      \"chapterSummary\": \"This chapter introduces two fundamental data structures: lists (mutable, ordered sequences) and tuples (immutable, ordered sequences). It explains how to create, access, and manipulate these data structures.\",\n      \"topics\": [\n        \"Lists: Creation, Accessing Elements, Slicing\",\n        \"List Methods (append, insert, remove, pop, etc.)\",\n        \"Tuples: Creation, Accessing Elements\",\n        \"Difference between Lists and Tuples\",\n        \"List Comprehension (basic introduction)\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Data Structures: Dictionaries\",\n      \"chapterSummary\": \"This chapter introduces dictionaries, which are key-value pairs used to store and retrieve data efficiently.  It covers creation, accessing elements, and common dictionary methods.\",\n      \"topics\": [\n        \"Dictionaries: Key-Value Pairs\",\n        \"Creating Dictionaries\",\n        \"Accessing Values using Keys\",\n        \"Dictionary Methods (keys(), values(), items(), etc.)\",\n        \"Iterating through Dictionaries\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Functions\",\n      \"chapterSummary\": \"This chapter introduces functions, reusable blocks of code that perform specific tasks. It covers function definition, calling functions, arguments, return values, and scope.\",\n      \"topics\": [\n        \"Defining Functions\",\n        \"Calling Functions\",\n        \"Function Arguments\",\n        \"Return Values\",\n        \"Function Scope\",\n        \"Default Arguments\"\n      ]\n    },\n      {\n      \"chapterTitle\": \"Strings and String Manipulation\",\n      \"chapterSummary\": \"This chapter covers string manipulation techniques, which are essential for working with text data in Python.\",\n      \"topics\": [\n        \"String Literals\",\n        \"String Indexing and Slicing\",\n        \"String Methods (upper(), lower(), split(), join(), etc.)\",\n        \"String Formatting\"\n      ]\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());


