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
};

const generationConfig2 ={
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






  export const generateNotesAiModel = model.startChat({
    //generation 2 needed

    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format(Do not Add HTMLKL, Head, Body, title tag), The chapters: {\n      \"topics\": [\n        \"Advanced Middleware Patterns\",\n        \"Error Handling Middleware and Best Practices\",\n        \"Request Logging and Monitoring Middleware\",\n        \"Building Reusable Middleware Components\",\n        \"Understanding Middleware Stacks and Execution Order\",\n        \"Performance Optimization with Middleware\"\n      ],\n      \"chapterTitle\": \"Middleware Mastery\",\n      \"chapterSummary\": \"Explore the intricacies of Express middleware, including advanced techniques like error handling, request logging, and custom middleware creation.  We'll also examine middleware stacks and their impact on application performance.\"\n    },"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```html\n<h1>Middleware Mastery</h1>\n<p>This chapter explores the intricacies of Express middleware, including advanced techniques like error handling, request logging, and custom middleware creation. We'll also examine middleware stacks and their impact on application performance.</p>\n\n<h2>Chapter 1: Advanced Middleware Patterns</h2>\n<ul>\n  <li><strong>Understanding Middleware beyond the basics:</strong>  Moving beyond simple request/response manipulation.</li>\n  <li><strong>Advanced use of `next()` function:</strong>  Exploring asynchronous operations and control flow within middleware chains.</li>\n  <li><strong>Middleware composition techniques:</strong> Combining multiple middleware functions for complex logic.</li>\n  <li><strong>Practical examples:</strong> Implementing authentication, authorization, and data transformation middleware.</li>\n  <li><strong>Common pitfalls and solutions:</strong> Identifying and addressing issues related to middleware execution order and error handling.</li>\n</ul>\n\n<h2>Chapter 2: Error Handling Middleware and Best Practices</h2>\n<ul>\n  <li><strong>Centralized error handling:</strong> Implementing a single error-handling middleware function.</li>\n  <li><strong>Error types and their handling:</strong>  Addressing different error scenarios (e.g., 404, 500, database errors).</li>\n  <li><strong>Custom error objects:</strong> Creating and utilizing custom error objects for better context.</li>\n  <li><strong>Best practices for error logging and reporting:</strong>  Implementing robust error logging mechanisms.</li>\n  <li><strong>Testing error handling middleware:</strong>  Strategies for effectively testing your error handling implementation.</li>\n</ul>\n\n<h2>Chapter 3: Request Logging and Monitoring Middleware</h2>\n<ul>\n  <li><strong>Logging request details:</strong>  Capturing timestamps, HTTP methods, URLs, and request parameters.</li>\n  <li><strong>Integrating with logging frameworks:</strong>  Using libraries like Winston, Bunyan, or Pino.</li>\n  <li><strong>Advanced logging features:</strong>  Implementing structured logging, log levels, and custom log formats.</li>\n  <li><strong>Monitoring request performance:</strong>  Measuring request latency and identifying bottlenecks.</li>\n  <li><strong>Security considerations for logging:</strong>  Protecting sensitive information within logs.</li>\n</ul>\n\n<h2>Chapter 4: Building Reusable Middleware Components</h2>\n<ul>\n  <li><strong>Principles of modular middleware:</strong> Designing and building reusable middleware functions.</li>\n  <li><strong>Parameterization of middleware:</strong> Creating configurable middleware functions.</li>\n  <li><strong>Middleware factories:</strong>  Generating middleware functions based on specific configurations.</li>\n  <li><strong>Organizing middleware:</strong>  Structuring middleware for maintainability and scalability.</li>\n  <li><strong>Versioning and maintenance:</strong>  Strategies for managing and updating reusable middleware components.</li>\n</ul>\n\n<h2>Chapter 5: Understanding Middleware Stacks and Execution Order</h2>\n<ul>\n  <li><strong>Middleware stack concept:</strong>  Explaining the order in which middleware functions are executed.</li>\n  <li><strong>The `next()` function's role:</strong>  Controlling the flow of execution within the middleware stack.</li>\n  <li><strong>Debugging middleware execution order:</strong>  Techniques for identifying and resolving issues with execution order.</li>\n  <li><strong>Asynchronous middleware and the event loop:</strong>  Understanding how asynchronous middleware impacts execution order.</li>\n  <li><strong>Impact of middleware on application performance:</strong>  Identifying performance bottlenecks caused by middleware.</li>\n</ul>\n\n<h2>Chapter 6: Performance Optimization with Middleware</h2>\n<ul>\n  <li><strong>Identifying performance bottlenecks in middleware:</strong>  Using profiling tools and techniques.</li>\n  <li><strong>Optimizing middleware functions for speed:</strong>  Improving the efficiency of individual middleware functions.</li>\n  <li><strong>Caching frequently accessed data:</strong>  Using caching mechanisms to reduce database or API calls.</li>\n  <li><strong>Asynchronous operations and concurrency:</strong>  Utilizing asynchronous operations to improve performance.</li>\n  <li><strong>Load balancing and scaling strategies:</strong>  Employing strategies to handle increased traffic and improve performance under load.</li>\n</ul>\n```\n"},
        ],
      },
    ],
  });





  export  const GenerateStudyTypeContentAiModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate the flashcard on topic : Flutter Fundamentals,User Interface (UI) Development,Basic App Navigation in JSON format with front back Content, Maximum 15"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"The fundamental building block of a Flutter UI.  Everything visible on the screen is a widget.\"\n  },\n  {\n    \"front\": \"What are the two main types of widgets?\",\n    \"back\": \"StatelessWidget and StatefulWidget.\"\n  },\n  {\n    \"front\": \"What is the difference between StatelessWidget and StatefulWidget?\",\n    \"back\": \"StatelessWidget doesn't change its state over time, while StatefulWidget can update its UI based on changes in its state.\"\n  },\n  {\n    \"front\": \"Name three common layout widgets.\",\n    \"back\": \"Row, Column, and Stack.\"\n  },\n  {\n    \"front\": \"What is a `Scaffold` widget?\",\n    \"back\": \"Provides a basic visual layout structure for an app, including an AppBar, body, and potentially a bottomNavigationBar.\"\n  },\n  {\n    \"front\": \"What widget is used to display text?\",\n    \"back\": \"Text\"\n  },\n  {\n    \"front\": \"How do you navigate to a new screen in Flutter?\",\n    \"back\": \"Using `Navigator.push()`.\"\n  },\n  {\n    \"front\": \"How do you pop a screen from the navigation stack?\",\n    \"back\": \"Using `Navigator.pop()`.\"\n  },\n  {\n    \"front\": \"What is a `Route` in Flutter?\",\n    \"back\": \"Represents a single screen or page in your app's navigation history.\"\n  },\n  {\n    \"front\": \"What is `MaterialApp`?\",\n    \"back\": \"A widget that provides Material Design styling and navigation capabilities to your app.\"\n  },\n  {\n    \"front\": \"What is the purpose of `BuildContext`?\",\n    \"back\": \"Provides information about the widget's location in the widget tree and allows access to various services.\"\n  },\n  {\n    \"front\": \"How do you pass data to a new screen during navigation?\",\n    \"back\": \"Using arguments with `Navigator.pushNamed()` or `Navigator.push()`.\"\n  },\n  {\n    \"front\": \"What is a `Key` in Flutter?\",\n    \"back\": \"Used to uniquely identify widgets, especially helpful when rebuilding parts of the UI.\"\n  },\n  {\n    \"front\": \"What is a `Container` widget?\",\n    \"back\": \"A widget that allows you to control the size, padding, margin, and decoration of a widget's children.\"\n  },\n  {\n    \"front\": \"What is the purpose of `setState()`?\",\n    \"back\": \"To rebuild the UI of a StatefulWidget after its state has changed.\"\n  }\n]\n```\n"},
        ],
      },
    ]
  })









  export const GenerateQuizAiModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Quiz on Topic : Flutter Fundamentals, User Interface (UI) Development  with Question and Options along with correct answer in JSON format (MAX 10)\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"quizTitle\": \"Flutter Fundamentals and UI Development\",\n  \"questions\": [\n    {\n      \"question\": \"What is the primary programming language used in Flutter development?\",\n      \"options\": [\"Java\", \"Kotlin\", \"Dart\", \"Swift\"],\n      \"correctAnswer\": \"Dart\"\n    },\n    {\n      \"question\": \"Which widget is the root of the Flutter widget tree?\",\n      \"options\": [\"Column\", \"Row\", \"Scaffold\", \"Center\"],\n      \"correctAnswer\": \"Scaffold\"\n    },\n    {\n      \"question\": \"What is the purpose of a StatelessWidget in Flutter?\",\n      \"options\": [\"To build a dynamic UI that changes based on user interaction\", \"To build a static UI that doesn't change after it's built\", \"To manage application state\", \"To handle asynchronous operations\"],\n      \"correctAnswer\": \"To build a static UI that doesn't change after it's built\"\n    },\n    {\n      \"question\": \"Which widget is used to arrange widgets horizontally?\",\n      \"options\": [\"Column\", \"Row\", \"Stack\", \"Container\"],\n      \"correctAnswer\": \"Row\"\n    },\n    {\n      \"question\": \"Which widget is used to arrange widgets vertically?\",\n      \"options\": [\"Column\", \"Row\", \"Stack\", \"Container\"],\n      \"correctAnswer\": \"Column\"\n    },\n    {\n      \"question\": \"What does the `BuildContext` provide in Flutter?\",\n      \"options\": [\"The current state of the application\", \"Access to the widget tree\", \"The theme of the application\", \"The device's screen size\"],\n      \"correctAnswer\": \"Access to the widget tree\"\n    },\n    {\n      \"question\": \"What is the purpose of a StatefulWidget in Flutter?\",\n      \"options\": [\"To build a static UI\", \"To manage the state of a widget\", \"To handle routing\", \"To perform network requests\"],\n      \"correctAnswer\": \"To manage the state of a widget\"\n    },\n    {\n      \"question\": \"Which widget is used to add padding around a widget?\",\n      \"options\": [\"Container\", \"Padding\", \"SizedBox\", \"Center\"],\n      \"correctAnswer\": \"Padding\"\n    },\n    {\n      \"question\": \"How do you define a key for a widget?\",\n      \"options\": [\"Using the `key` property in the widget constructor\", \"Using a separate `Key` variable\", \"It's automatically assigned\", \"Using the `id` property\"],\n      \"correctAnswer\": \"Using the `key` property in the widget constructor\"\n    },\n      {\n      \"question\": \"What is the purpose of a `FutureBuilder` in Flutter?\",\n      \"options\": [\"To build UI that depends on asynchronous operations\", \"To manage state\", \"To perform network requests\", \"To handle user input\"],\n      \"correctAnswer\": \"To build UI that depends on asynchronous operations\"\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  })

