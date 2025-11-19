# Advent of Code 2025

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

My solutions for [Advent of Code 2025](https://adventofcode.com/2025) built with [Nx](https://nx.dev) and TypeScript.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```sh
npm install
```

## 📁 Project Structure

This workspace is organized as an Nx monorepo with the following structure:

- **`day-XX/`** - Individual day solutions (apps)
- **`input-utils/`** - Shared utilities for reading and parsing input files
- **`packages/aoc-tools/`** - Shared tools and utilities
- **`data/`** - Input data files for each day

## 🎯 Running Solutions

### Run a specific day

```sh
# Build and run day-01
nx build day-01
nx serve day-01

# Or run tests
nx test day-01
```

### Run all days

```sh
# Build all days
nx run-many -t build

# Test all days
nx run-many -t test
```

### Type checking

```sh
# Type check a specific day
nx typecheck day-01

# Type check all projects
nx run-many -t typecheck
```

## 🆕 Adding a New Day

To create a new day solution:

1. Generate a new app:
   ```sh
   nx g @nx/vite:app day-XX
   ```

2. Add your input data to `data/day-XX.txt`

3. Implement your solution in `day-XX/src/main.ts`

4. Run your solution:
   ```sh
   nx serve day-XX
   ```

## 🛠️ Available Tasks

Each day project has the following targets:

- **`build`** - Build the project
- **`serve`** - Run the solution
- **`test`** - Run tests
- **`typecheck`** - Type check the project

Run any task with:
```sh
nx <target> <project-name>
```

## 📚 Learn More

- [Advent of Code 2025](https://adventofcode.com/2025)
- [Nx Documentation](https://nx.dev)
- [Nx Workspace Setup](https://nx.dev/nx-api/js)

## 🔧 Development

### Visualize the project graph

```sh
nx graph
```

### Run affected tasks

```sh
# Only run tasks for projects affected by changes
nx affected -t build
nx affected -t test
```

### Sync TypeScript project references

Nx automatically updates TypeScript project references. To manually sync:

```sh
nx sync
```

## 📝 License

MIT
