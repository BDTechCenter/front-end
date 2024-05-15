// Your array of objects
var categories = [
  {
      "name": "languages-and-frameworks",
      "title": "Languages & Frameworks",
      "color": "#cdcaeb",
      "txtColor": "#444444",
      "position": 1,
      "description": "Here, we've compiled a selection of development languages and frameworks essential for crafting custom software across various domains."
  },
  {
      "name": "methods-and-patterns",
      "title": "Methods & Patterns",
      "color": "#4867ff",
      "txtColor": "#fff",
      "position": 2,
      "description": "Patterns play a crucial role in software development, often enduring longer than specific tools or frameworks. As such, they fundamentally shape our approach to software design and implementation."
  },
  {
      "name": "tools",
      "title": "Tools",
      "color": "#ffc000",
      "txtColor": "#fff",
      "position": 3,
      "description": "Here, we assemble various software tools, ranging from small utilities to larger software projects."
  },
  {
      "name": "platforms-and-operations",
      "title": "Platforms & Operations",
      "color": "#ff2d5e",
      "txtColor": "#444444",
      "position": 4,
      "description": "Here, we cover infrastructure platforms and services, also sharing important updates on Business Development services for all BD teams."
  }
];

// Example usage
var categoriesWithName = categories["languages-and-frameworks"];
console.log(categoriesWithName); // This will print an array of category objects with name "languages-and-frameworks"
