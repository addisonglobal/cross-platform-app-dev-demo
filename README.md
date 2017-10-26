# Cross-platform application development Demo

> Supporting repo for the Cross Platform App Development at scale presentation by Addison Global. You can find the presentation slides here:
> http://slides.com/joaocamposribeiro/cross-platform-app-dev-demo

## Getting Started
1. Install yarn package manager
https://yarnpkg.com/en/docs/install

2. Install the project dependencies
```bash
yarn install
```

3. Install all packages dependencies
```bash
yarn bootstrap
```

## Running the applications

### Backend
> Runs the todo service backend which is required for the apps to function correctly

```bash
yarn backend
```

### Native
> Starts the native app

```bash
cd apps/native-demo && yarn start
```

### Web
> Starts the web app

```bash
cd apps/web-demo && yarn start
```

## Other tasks

### Linting
> Validates the codebase against Addison Global frontend code standards

```bash
yarn lint
```

### Typechecking
> Typechecks the codebase using flow type

```bash
yarn typecheck
```

### Monorepo
> Exposes tasks related to the maintenance of the monorepo. Check LernaJS docs for more information: https://github.com/lerna/lerna#commands

```bash
# example to clean the node modules on each of the monorepos packages
yarn lerna clean
```

## Coding Standards
This project uses the base [Javascript coding standards defined by Airbnb](https://github.com/airbnb/javascript). Apart from those, we enforce a few other rules:

* (Error) *4 space indentation* 
* (Error) *120 chars* for max line length
* (Warning) Maximum cyclomatic complexity of *3* - This is to flag potential code that could be prune to improvements on a PR level. All developers should take this into account and the code complexity should be kept under the limit unless a reasonable justification exists.
* No jsx file extension is required

### Flowtype
Flowtype coding standards aim to provide a consistent and unified way to write both JS and type definitions respecting the same rules for comma dangles, spacing, etc. A few rules are worth explaining in more detail:

* *no-weak-types* Prevents the use of weak types - any, Object, Function - which cause flowtype to stop checking for type errors. This obviously undermines the value of using type checking and as such is discouraged. *Type inference - _*_ - is recommended instead*. Currently only a warning is emitted and care should be taken during the review process.
