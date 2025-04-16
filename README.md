# PokeLang Compiler

## Overview

**PokeLang** is a custom programming language inspired by Pokémon themes, designed for educational and experimental purposes. It features a unique syntax with Pokémon-themed keywords (e.g., `catch` for `let`, `battle` for `if`) in `.pkm` files. The language supports:

- Variables, functions, objects, and arrays
- Control flow (if, for, try-catch)
- A robust runtime environment with file system access and networking

The compiler, written in **TypeScript**, includes a lexer, parser, and interpreter, processing `.pkm` scripts with optional currency symbol substitution based on the user's location. This project showcases core compiler design principles: lexical analysis, syntax parsing, and runtime evaluation.

## Project Structure

- `src/frontend/`:
  - `lexer.ts`: Tokenizes source code
  - `parser.ts`: Builds the Abstract Syntax Tree (AST)
  - `ast.ts`: Defines AST node structures
- `src/runtime/`:
  - `interpreter.ts`: Executes the AST
  - `environment.ts`: Manages variables and native functions
  - `statements.ts`, `expressions.ts`, `values.ts`: Evaluation logic
- `src/utils/`:
  - `transcriber.ts`: Handles Pokémon-themed syntax and currency substitution
- `main.ts`: Entry point for scripts and REPL

## Prerequisites

- **Node.js**: Version 16 or higher
- **TypeScript**: For compiling TypeScript code
- **npm**: For managing dependencies

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/prakhar-khurana/pokelang.git
   cd pokelang
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   Key dependencies:

   - `axios`: HTTP requests
   - `geoip-lite`: Location-based currency substitution
   - `ws`: WebSocket functionality
   - `user-agents`: WebSocket headers

3. **Compile TypeScript**:

   ```bash
   npx tsc
   ```

   This generates a `dist/` folder with compiled JavaScript files.

## Running PokeLang

### Run a Script

Execute a `.pkm` script with Pokémon-themed syntax and currency substitution:

```bash
node dist/main.js path/to/script.pkm
```

Example:

```bash
node dist/main.js examples/hello.pkm
```

### Start the REPL

Launch the interactive Read-Eval-Print Loop:

```bash
node dist/main.js
```

Enter code at the `>` prompt for immediate execution.

### Optional Flags

- `--time`: Displays execution time, including sleep and networking durations

Example:

```bash
node dist/main.js --time examples/hello.pkm
```

## PokeLang Syntax

PokeLang provides a JavaScript-like syntax with Pokémon-themed keywords for `.pkm` files. Below is the syntax in both standard and Pokémon-themed forms.

### Variables

- **Standard**:

  ```javascript
  let x = 5;          // Mutable variable
  const y = "hello";  // Immutable variable
  ```

- **Pokémon-themed** (`.pkm` files):

  ```javascript
  catch x = 5;        // let
  const y = "hello";  // const
  ```

### Control Flow

- **If Statement**:
  - Standard: `if (x > 5) { ... } else { ... }`
  - Pokémon: `battle (x > 5) pokeball ... pokecapture faint pokeball ... pokecapture`
- **For Loop**:
  - Standard: `for (let i = 0; i < 5; i = i + 1) { ... }`
  - Pokémon: `evolve (catch i = 0; i < 5; i = i attack 1) pokeball ... pokecapture`
- **Try-Catch**:
  - Standard: `try { ... } catch { ... }`
  - Pokémon: `pokecenter pokeball ... pokecapture revive pokeball ... pokecapture`

### Functions

- **Declaration**:
  - Standard: `fn add(a, b) { return a + b; }`
  - Pokémon: `trainer add(a, b) pokeball release_move a attack b; pokecapture`
- **Call**:
  - Standard: `add(2, 3);`
  - Pokémon: `add(2, 3);`

### Expressions

- **Binary Operators**:
  - Standard: `+`, `-`, `*`, `/`, `%`, `==`, `!=`, `<`, `>`, `&&`, `|`
  - Pokémon: `attack` (+), `defend` (-), `combine` (\*), `split` (/), `type_advantage` (&&), `status_effects` (|)
- **Ternary (Conditional)**:
  - Standard: `x > 5 -> a | b` (if x &gt; 5, return a, else b)
  - Pokémon: `x > 5 mega_evolve a status_effects b`
- **Assignment**:
  - Standard: `x = 5;`
  - Pokémon: `x swap_move 5;`

### Data Structures

- **Objects**:
  - Standard: `{ key: value, x: 5 }`
  - Pokémon: `pokeball key pokedex_entry value move_set x pokedex_entry 5 pokecapture`
- **Arrays**:
  - Standard: `[1, 2, 3]`
  - Pokémon: `[1 move_set 2 move_set 3]`
- **Member Access**:
  - Standard: `obj.key` or `arr[0]`
  - Pokémon: Same as standard

### Literals

- **Numbers**: `123`, `3.14`
- **Strings**: `"hello"` or `'hello'`
- **Booleans**: `true`, `false` (Pokémon: `legendary`, `common`)
- **Null**: `null` (Pokémon: `wildcard`)

### Return Statement

- **Standard**: `return x;`
- **Pokémon**: `release_move x;`

## Built-in Functions

PokeLang includes built-in functions for I/O, string manipulation, math, time management, networking, file system operations, object handling, and utilities, defined in `environment.ts`. These are available in `.pkm` files, with some functions having Pokémon-themed aliases (e.g., `println` as `use`). Refer to the source code for details.

## Example Program

Create a file `hello.pkm`:

```javascript
catch name = "Trainer";
battle (name == "Trainer") pokeball
    use("Welcome to PokeLang, ", name, "!");
pokecapture
```

Run it:

```bash
node dist/main.js hello.pkm
```

**Output**:

```
Welcome to PokeLang, Trainer!
```

## Notes

- **Currency Substitution**: `.pkm` files replace currency symbols (e.g., `$`) based on the user's country, detected via `geoip-lite`. An internet connection is required on the first run to fetch the IP address.
- **Error Handling**: The parser provides detailed error messages with line and column numbers.
- **Extensibility**: The modular design allows adding new keywords or functions by modifying `lexer.ts`, `parser.ts`, or `environment.ts`.

## Troubleshooting

- **Module Not Found**: Verify `npm install` completed successfully.
- **TypeScript Errors**: Ensure `tsc` compiled without errors (check `dist/` folder).
- **Network Issues**: Confirm internet connectivity for networking functions.
- **Currency Errors**: Ensure `currencies.json` is present in `src/utils/`.

## Acknowledgments

- Inspired by the *Guide to Interpreters Series*
- Built with **TypeScript**, **Node.js**, and npm packages

For questions or contributions, please contact the project maintainer at GitHub.
