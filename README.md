PokeLang Compiler

Overview
PokeLang is a custom programming language inspired by Pokémon themes, created for educational and experimental purposes. It features a unique syntax with Pokémon-themed keywords (e.g., catch for let, battle for if) in .pkm files. The language supports variables, functions, objects, arrays, control flow, and a robust runtime environment with features like file system access and networking.
The compiler, written in TypeScript, consists of a lexer, parser, and interpreter, processing PokeLang scripts with optional currency symbol substitution based on the user's location. This project demonstrates compiler design principles, including lexical analysis, syntax parsing, and runtime evaluation.
Project Structure

src/frontend/: Contains the lexer (lexer.ts), parser (parser.ts), and AST definitions (ast.ts).
src/runtime/: Includes the interpreter (interpreter.ts), runtime environment (environment.ts), and evaluation logic (statements.ts, expressions.ts, values.ts).
src/utils/: Provides the transcriber (transcriber.ts) for Pokémon-themed syntax and currency handling.
main.ts: Entry point for running scripts or starting the REPL.

Prerequisites

Node.js: Version 16 or higher.
TypeScript: For compiling TypeScript code.
npm: For managing dependencies.

Installation

Clone the Repository:
git clone https://github.com/prakhar-khurana/pokelang.git
cd pokelang


Install Dependencies: Install required packages using npm:
npm install

Key dependencies include:

axios: For HTTP requests.
geoip-lite: For location-based currency substitution.
ws: For WebSocket functionality.
user-agents: For WebSocket headers.


Compile TypeScript: Compile the TypeScript code to JavaScript:
npx tsc

This creates a dist/ folder with compiled JavaScript files.


Running PokeLang

Run a Script: Execute a PokeLang script (.pkm file):
node dist/main.js path/to/script.pkm


.pkm files use Pokémon-themed syntax and support currency substitution.

Example:
node dist/main.js examples/hello.pkm




Start the REPL: Launch the interactive Read-Eval-Print Loop:
node dist/main.js

Enter PokeLang code at the > prompt for immediate execution.

Optional Flags:

--time: Shows execution time, including sleep and networking durations.

Example:
node dist/main.js --time examples/hello.pkm





PokeLang Syntax
PokeLang offers a JavaScript-like syntax with Pokémon-themed keywords for .pkm files. Below is a detailed overview of the syntax in both standard and Pokémon-themed forms.
Variables

Standard:
let x = 5;          // Mutable variable
const y = "hello";  // Immutable variable


Pokémon-themed (.pkm files):
catch x = 5;        // let
const y = "hello";  // const



Control Flow

If Statement:
Standard: if (x > 5) { ... } else { ... }
Pokémon: battle (x > 5) pokeball ... pokecapture faint pokeball ... pokecapture


For Loop:
Standard: for (let i = 0; i < 5; i = i + 1) { ... }
Pokémon: evolve (catch i = 0; i < 5; i = i attack 1) pokeball ... pokecapture


Try-Catch:
Standard: try { ... } catch { ... }
Pokémon: pokecenter pokeball ... pokecapture revive pokeball ... pokecapture



Functions

Declaration:
Standard: fn add(a, b) { return a + b; }
Pokémon: trainer add(a, b) pokeball release_move a attack b; pokecapture


Call:
Standard: add(2, 3);
Pokémon: add(2, 3);



Expressions

Binary Operators:
Standard: +, -, *, /, %, ==, !=, <, >, &&, |
Pokémon: attack (+), defend (-), combine (*), split (/), type_advantage (&&), status_effects (|)


Ternary (Conditional):
Standard: x > 5 -> a | b (if x > 5, return a, else b)
Pokémon: x > 5 mega_evolve a status_effects b


Assignment:
Standard: x = 5;
Pokémon: x swap_move 5;



Data Structures

Objects:
Standard: { key: value, x: 5 }
Pokémon: pokeball key pokedex_entry value move_set x pokedex_entry 5 pokecapture


Arrays:
Standard: [1, 2, 3]
Pokémon: [1 move_set 2 move_set 3]


Member Access:
Standard: obj.key or arr[0]
Pokémon: Same as standard.



Literals

Numbers: 123, 3.14
Strings: "hello" or 'hello'
Booleans: true, false (Pokémon: legendary, common)
Null: null (Pokémon: wildcard)

Return Statement

Standard: return x;
Pokémon: release_move x;

Built-in Functions
PokeLang includes a variety of built-in functions for I/O, string manipulation, math, time management, networking, file system operations, object handling, and utilities, defined in environment.ts. These are available in .pkm files, with some functions having Pokémon-themed aliases (e.g., println as use). Refer to the source code for details on available functions.
Example Program
Create a file hello.pkm:
catch name = "Trainer";
battle (name == "Trainer") pokeball
    use("Welcome to PokeLang, ", name, "!");
pokecapture

Run it:
node dist/main.js hello.pkm

Output:
Welcome to PokeLang, Trainer!

Notes

Currency Substitution: .pkm files replace currency symbols (e.g., $) based on the user's country, detected via geoip-lite. An internet connection is required on the first run to fetch the IP address.
Error Handling: The parser provides detailed error messages with line and column numbers.
Extensibility: The modular design supports adding new keywords or functions by modifying lexer.ts, parser.ts, or environment.ts.

Troubleshooting

Module Not Found: Verify npm install completed successfully.
TypeScript Errors: Ensure tsc compiled without errors (check dist/ folder).
Network Issues: Confirm internet connectivity for networking functions.
Currency Errors: Ensure currencies.json is present in src/utils/.

Acknowledgments

Inspired by the Guide to Interpreters Series.
Built with TypeScript, Node.js, and npm packages.

For questions or contributions, please contact the project maintainer.
