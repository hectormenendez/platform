const { NODE_ENV } = process.env;
const PRODUCTION = NODE_ENV === "production";

module.exports = {
    env: {
        es2020: true,
    },

    parserOptions: {
        sourceType: "module",
    },

    extends: [
        "prettier", // disables eslint-rules that conflict with prettier.
    ],

    plugins: [
        "import",
        "prettier", // runs the prettier and eslint on the same step.
        "eslint-comments", // extra rules for eslint-specific comment control
    ],

    settings: {
        "import/extensions": [".js", ".mjs", "json"],
        "import/ignore": ["node_modules"],
    },

    rules: {
        // original: "error"
        "prettier/prettier": "warn",

        // ------------------------------------------------------------------------- eslint-comments

        // disallows eslint-enable comments for multiple eslint-disable comments
        "eslint-comments/no-aggregating-enable": "error",

        // disallows eslint-disable comments without rule names
        "eslint-comments/no-unlimited-disable": "error",

        // disallow disables that don't cover any errors
        "eslint-comments/no-unused-disable": "error",

        // disallow enables that don't enable anything or enable rules that weren't disabled
        "eslint-comments/no-unused-enable": "error",

        // -------------------------------------------------------------------------- AirBnb: strict

        // requires or disallows strict mode directives.
        strict: ["error", "never"],

        // ------------------------------------------------------------------ AirBnb: best practices

        // enforces return statements in callbacks of array's methods
        "array-callback-return": ["error", { allowImplicit: true }],

        // treat var statements as if they were block scoped
        "block-scoped-var": "error",

        // specify the maximum cyclomatic complexity allowed in a program
        // original: ["off", 11]
        complexity: ["error", 5],

        // enforce that class methods use "this"
        "class-methods-use-this": ["error", { exceptMethods: [] }],

        // require return statements to either always or never specify values
        "consistent-return": "error",

        // specify curly brace conventions for all control statements
        curly: ["error", "multi-line"],

        // require default case in switch statements
        "default-case": ["error", { commentPattern: "^no default$" }],

        // Enforce default clauses in switch statements to be last
        // original: "off"
        "default-case-last": "error",

        // Enforce default params in functions to be declared last
        // original: "off"
        "default-param-last": "error",

        // encourages use of dot notation whenever possible (except for JS keywords ie. class)
        "dot-notation": ["error", { allowKeywords: true }],

        // Enforces the dot to be beside the propertie on new lines.
        "dot-location": ["error", "property"],

        // require the use of === and !==
        // original: ["error", "always", { null: "ignore" }]
        eqeqeq: ["error", "always", { null: "always" }],

        // Require grouped accessor pairs (getters/setter) in object literals and classes
        // original: "off"
        "grouped-accessor-pairs": "error",

        // enforce a maximum number of classes per file
        "max-classes-per-file": ["error", 1],

        // make sure for-in loops have an if hasOwnProperty
        "guard-for-in": "error",

        // disallow use of arguments.caller or arguments.callee
        "no-caller": "error",

        // disallow declarations when not inside a block on a case statement.
        "no-case-declarations": "error",

        // Disallow returning a value in a constructor
        // original: "off"
        "no-constructor-return": "error",

        // disallow division operators explicitly at beginning of regular expression
        // original: "off"
        "no-div-regex": "error",

        // disallow else after a return in an if
        "no-else-return": ["error", { allowElseIf: false }],

        // disallow empty functions, except for standalone funcs/arrows
        "no-empty-function": [
            "error",
            { allow: ["arrowFunctions", "functions", "methods"] },
        ],

        // disallow empty destructuring patterns
        "no-empty-pattern": "error",

        // disallow comparisons to null without a type-checking operator
        // original: "off"
        "no-eq-null": "error",

        // disallow use of eval()
        "no-eval": "error",

        // disallow adding to native types
        "no-extend-native": "error",

        // disallow unnecessary function binding
        "no-extra-bind": "error",

        // disallow Unnecessary Labels
        "no-extra-label": "error",

        // disallow fallthrough of case statements
        "no-fallthrough": "error",

        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": "error",

        // disallow reassignments of native objects or read-only globals
        "no-global-assign": ["error", { exceptions: [] }],

        // disallow implicit type conversions
        // original: off
        "no-implicit-coercion": [
            "error",
            { boolean: true, number: true, string: true, allow: [] },
        ],

        // disallow var and named functions in global scope (used with "parserOptions": { "sourceType": "module" })
        // original: "off"
        "no-implicit-globals": ["error", { lexicalBindings: false }],

        // disallow use of eval()-like methods
        "no-implied-eval": "error",

        // disallow this keywords outside of classes or class-like objects
        // original: "off"
        "no-invalid-this": "error",

        // disallow usage of __iterator__ property
        "no-iterator": "error",

        // disallow use of labels for anything other then loops and switches
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

        // disallow unnecessary nested blocks
        "no-lone-blocks": "error",

        // disallow creation of functions within loops
        "no-loop-func": "error",

        // disallow magic numbers
        "no-magic-numbers": "off",

        // disallow use of multiple spaces
        "no-multi-spaces": ["error", { ignoreEOLComments: false }],

        // disallow use of multiline strings
        "no-multi-str": "error",

        // disallow use of new operator when not part of the assignment or comparison
        "no-new": "error",

        // disallow use of new operator for Function object
        "no-new-func": "error",

        // disallows creating new instances of String, Number, and Boolean
        "no-new-wrappers": "error",

        // disallow use of (old style) octal literals
        "no-octal": "error",

        // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
        "no-octal-escape": "error",

        // disallow parameter object manipulation except for specific exclusions
        // original: several exc
        "no-param-reassign": [
            "error",
            { props: true, ignorePropertyModificationsFor: [] },
        ],

        // disallow usage of __proto__ property
        "no-proto": "error",

        // disallow declaring the same variable more then once
        "no-redeclare": "error", // Hoisting is a very useful feature of Javascript for readibility, keep it for functions.

        // disallow certain object properties
        "no-restricted-properties": [
            "error",
            {
                object: "arguments",
                property: "callee",
                message: "arguments.callee is deprecated",
            },
            ...["global", "self", "window"].map((object) => ({
                object,
                property: "isFinite",
                message: "Please use Number.isFinite intead",
            })),
            ...["global", "self", "window"].map((object) => ({
                object,
                property: "isNaN",
                message: "Please use Number.isNaN intead",
            })),
            {
                property: "__defineGetter__",
                message: "Please use Object.defineProperty instead.",
            },
            {
                property: "__defineSetter__",
                message: "Please use Object.defineProperty instead.",
            },
            {
                object: "Math",
                property: "pow",
                message: "Use the exponentiation operator (**) instead.",
            },
        ],

        // disallow use of assignment in return statement
        "no-return-assign": ["error", "always"],

        // disallow redundant `return await`
        "no-return-await": "error",

        // disallow use of `javascript:` urls.
        "no-script-url": "error",

        // disallow self assignment
        "no-self-assign": ["error", { props: true }],

        // disallow comparisons where both sides are exactly the same
        "no-self-compare": "error",

        // disallow use of comma operator
        "no-sequences": "error",

        // restrict what can be thrown as an exception
        // original: "error"
        "no-throw-literal": "off",

        // disallow unmodified conditions of loops
        "no-unmodified-loop-condition": "off",

        // disallow usage of expressions in statement position
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
            },
        ],

        // disallow unused labels
        "no-unused-labels": "error",

        // disallow unnecessary .call() and .apply()
        "no-useless-call": "off",

        // Disallow unnecessary catch clauses
        "no-useless-catch": "error",

        // disallow useless string concatenation
        "no-useless-concat": "error",

        // disallow unnecessary string escaping
        "no-useless-escape": "error",

        // disallow redundant return; keywords
        "no-useless-return": "error",

        // disallow use of void operator
        "no-void": "error",

        // disallow usage of configurable warning terms in comments: e.g. todo
        "no-warning-comments": "off",

        // disallow use of the with statement
        "no-with": "error",

        // require using Error objects as Promise rejection reasons
        "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

        // Suggest using named capture group in regular expression
        "prefer-named-capture-group": "off",

        // disallows the use of the RegExp constructor function with string literals as its arguments
        "prefer-regex-literals": "error",

        // require use of the second argument for parseInt()
        radix: "error",

        // require `await` in `async function`
        // original: "off"
        "require-await": "error",

        // Enforce the use of u flag on RegExp
        "require-unicode-regexp": "off",

        // requires to declare all vars on top of their containing scope
        "vars-on-top": "error",

        // require immediate function invocation to be wrapped in parentheses
        // original: ["error", "outside", { functionPrototypeMethods: false }]
        "wrap-iife": ["error", "inside", { functionPrototypeMethods: true }],

        // require or disallow Yoda conditions
        // original: "error"
        yoda: ["error", "never"],

        // -------------------------------------------------------------------------- AirBnb: errors

        // Enforce “for” loop update clause moving the counter in the right direction
        "for-direction": "error",

        // Enforces that a return statement is present in property getters
        "getter-return": ["error", { allowImplicit: true }],

        // disallows usage of alert, confirm and prompt
        "no-alert": PRODUCTION ? "error" : "warn",

        // disallow using an async function as a Promise executor
        "no-async-promise-executor": "error",

        // Disallow await inside of loops
        "no-await-in-loop": "error",

        // Disallow comparisons to negative zero
        "no-compare-neg-zero": "error",

        // disallow assignment in conditional expressions
        "no-cond-assign": ["error", "always"],

        // disallow use of constant expressions in conditions
        // original: "warn" (no extra opts)
        "no-constant-condition": ["error", { checkLoops: false }],

        // disallow control characters in regular expressions
        "no-control-regex": "error",

        // disallows calls to methods of the console object
        "no-console": PRODUCTION ? "error" : "warn",

        // disallows debugger statements
        "no-debugger": PRODUCTION ? "error" : "warn",

        // disallow duplicate arguments in functions
        "no-dupe-args": "error",

        // Disallow duplicate conditions in if-else-if chains
        // original: "off"
        "no-dupe-else-if": "error",

        // disallow duplicate keys when creating object literals
        "no-dupe-keys": "error",

        // disallow a duplicate case label.
        "no-duplicate-case": "error",

        // disallow empty statements
        "no-empty": "error",

        // disallow the use of empty character classes in regular expressions
        "no-empty-character-class": "error",

        // disallow assigning to the exception in a catch block
        "no-ex-assign": "error",

        // disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": "error",

        // disallow unnecessary parentheses
        "no-extra-parens": "off",

        // disallow unnecessary semicolons
        "no-extra-semi": "error",

        // disallow overwriting functions written as function declarations
        "no-func-assign": "error",

        // warns the assignments, increments, and decrements of imported bindings.
        // original: "off"
        "no-import-assign": "error",

        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": "error",

        // disallow invalid regular expression strings in the RegExp constructor
        "no-invalid-regexp": "error",

        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": "error",

        // Disallow returning values from Promise executor functions
        // original: "off"
        "no-promise-executor-return": "error",

        // disallow use of Object.prototypes builtins directly
        "no-prototype-builtins": "error",

        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": "error",

        // Disallow returning values from setters
        // original: "off"
        "no-setter-return": "error",

        // disallow sparse arrays
        "no-sparse-arrays": "error",

        // Disallow template literal placeholder syntax in regular strings
        "no-template-curly-in-string": "error",

        // Avoid code that looks like two expressions but is actually one
        "no-unexpected-multiline": "error",

        // disallow unreachable statements after a return, throw, continue, or break statement
        "no-unreachable": "error",

        // Disallow loops with a body that allows only one iteration
        // original: "off"
        "no-unreachable-loop": "error",

        // disallow return/throw/break/continue inside finally blocks
        "no-unsafe-finally": "error",

        // disallow negating the left operand of relational operators
        "no-unsafe-negation": "error",

        // Disallow useless backreferences in regular expressions
        // original: "off"
        "no-useless-backreference": "error",

        // Disallow assignments that can lead to race conditions due to usage of await or yield
        // NOTE: if you think there's an error in the reporting, disable this, bugs have been reported.
        // original: "off"
        "require-atomic-updates": "error",

        // disallow comparisons with the value NaN
        "use-isnan": "error",

        // ensure JSDoc comments are valid
        // original: "off"
        "valid-jsdoc": "error",

        // ensure that the results of typeof are compared against a valid string
        "valid-typeof": ["error", { requireStringLiterals: true }],

        // ----------------------------------------------------------------------- AirBnb: variables

        // enforce or disallow variable initializations at definition
        // original: "off"
        "init-declarations": ["error", "always"],

        // disallow deletion of variables
        "no-delete-var": "error",

        // disallow labels that share a name with a variable
        "no-label-var": "error",

        // disallow specific globals
        "no-restricted-globals": [
            "error",
            "isFinite",
            "isNaN",
            // https://github.com/facebook/create-react-app/blob/master/packages/confusing-browser-globals
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top",
        ],

        // disallow declaration of variables already declared in the outer scope
        "no-shadow": "error",

        // disallow shadowing of names such as arguments
        "no-shadow-restricted-names": "error",

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef": "error",

        // disallow use of undefined when initializing variables
        // original: "error" (need this "off" for init-declarations)
        "no-undef-init": "off",

        // disallow use of undefined variable
        "no-undefined": "off",

        // disallow declaration of variables that are not used in the code
        // original: ignoreRestSiblings: true
        "no-unused-vars": [
            "error",
            { vars: "all", args: "after-used", ignoreRestSiblings: false },
        ],

        // disallow use of variables before they are defined
        // original: all true, allow functions to be hoisted it's useful.
        "no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true },
        ],

        // ----------------------------------------------------------------------------- AirBnb: es6

        // enforces no braces where they can be omitted
        "arrow-body-style": [
            "error",
            "as-needed",
            { requireReturnForObjectLiteral: false },
        ],

        // require parens in arrow function arguments
        "arrow-parens": ["error", "always"],

        // require space before/after arrow function's arrow
        "arrow-spacing": ["error", { before: true, after: true }],

        // verify super() callings in constructors
        "constructor-super": "error",

        // enforce the spacing around the * in generator functions
        "generator-star-spacing": ["error", { before: false, after: true }],

        // disallow modifying variables of class declarations
        "no-class-assign": "error",

        // disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": ["error", { allowParens: true }],

        // disallow modifying variables that are declared using const
        "no-const-assign": "error",

        // disallow duplicate class members
        "no-dupe-class-members": "error",

        // disallow symbol constructor
        "no-new-symbol": "error",

        // Disallow specified names in exports
        // original: "off"
        "no-restricted-exports": [
            "error",
            {
                restrictedNamedExports: [
                    "default", // use `export default` to provide a default export
                    "then", // this will cause tons of confusion when your module is dynamically `import()`ed
                ],
            },
        ],

        // disallow specific imports
        "no-restricted-imports": ["off", { paths: [], patterns: [] }],

        // disallow to use this/super before super() calling in constructors.
        "no-this-before-super": "error",

        // disallow useless computed property keys
        "no-useless-computed-key": "error",

        // disallow unnecessary constructor
        "no-useless-constructor": "error",

        // disallow renaming import, export, and destructured assignments to the same name
        "no-useless-rename": [
            "error",
            { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
        ],

        // require let or const instead of var
        "no-var": "error",

        // require method and property shorthand syntax for object literals
        // original: avoidExplicitReturnArrows: undefined
        "object-shorthand": [
            "error",
            "always",
            {
                ignoreConstructors: false,
                avoidQuotes: true,
                avoidExplicitReturnArrows: true,
            },
        ],

        // suggest using arrow functions as callbacks
        // original: allowUnboundThis: true
        "prefer-arrow-callback": [
            "error",
            { allowNamedFunctions: false, allowUnboundThis: false },
        ],

        // suggest using of const declaration for variables that are never modified after declared
        // original: ignoreReadBeforeAssign: true
        "prefer-const": [
            "error",
            { destructuring: "any", ignoreReadBeforeAssign: false },
        ],

        // Prefer destructuring from arrays and objects
        "prefer-destructuring": [
            "error",
            {
                VariableDeclarator: { array: false, object: true },
                AssignmentExpression: { array: true, object: false },
            },
            { enforceForRenamedProperties: false },
        ],

        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        "prefer-numeric-literals": "error",

        // use rest parameters instead of arguments
        "prefer-rest-params": "error",

        // suggest using the spread operator instead of .apply()
        "prefer-spread": "error",

        // suggest using template literals instead of string concatenation
        "prefer-template": "error",

        // disallow generator functions that do not have yield
        "require-yield": "error",

        // enforce spacing between object rest-spread
        "rest-spread-spacing": ["error", "never"],

        // import sorting
        // original: "off", ignoreCase: false, memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        "sort-imports": [
            "error",
            {
                ignoreCase: true,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
            },
        ],

        // require a Symbol description
        "symbol-description": "error",

        // enforce usage of spacing in template strings
        "template-curly-spacing": ["error", "never"],

        // enforce spacing around the * in yield* expressions
        "yield-star-spacing": ["error", "after"],

        // ----------------------------------------------------------------------- AirBnb: importing

        // ensure imports point to files/modules that can be resolved
        // original: amd: undefined
        "import/no-unresolved": [
            "error",
            { commonjs: true, caseSensitive: true, amd: false },
        ],

        // ensure named imports coupled with named exports
        "import/named": "error",

        // ensure default import coupled with default export
        // original: "off"
        "import/default": "error",

        // Enforces names exist at the time they are dereferenced
        // original: "off"
        "import/namespace": "error",

        // disallow invalid exports, e.g. multiple defaults
        "import/export": "error",

        // do not allow a default import name to match a named export
        "import/no-named-as-default": "error",

        // warn on accessing default export property names that are also named exports
        "import/no-named-as-default-member": "error",

        // disallow use of jsdoc-marked-deprecated imports
        "import/no-deprecated": "off",

        // Forbid the use of extraneous packages
        // paths are treated both as absolute paths, and relative to process.cwd()
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: true,
            },
        ],

        // Forbid mutable exports
        "import/no-mutable-exports": "error",

        // disallow require()
        "import/no-commonjs": "off",

        // disallow AMD require/define
        "import/no-amd": "error",

        // No Node.js builtin modules
        "import/no-nodejs-modules": "off",

        // disallow non-import statements appearing before import statements
        "import/first": "error",

        // disallow duplicate imports
        "import/no-duplicates": "error",

        // disallow namespace imports
        // original: "off"
        "import/no-namespace": "error",

        // Ensure consistent use of file extension within the import path
        "import/extensions": [
            "error",
            "ignorePackages",
            { js: "never", mjs: "never", jsx: "never" },
        ],

        // ensure absolute imports are above relative imports and that unassigned imports are ignored
        // TODO: use known *wink* rules here.
        "import/order": ["error", { groups: [["builtin", "external", "internal"]] }],

        // Require a newline after the last import/require in a group
        "import/newline-after-import": "error",

        // Require modules with a single export to use a default export
        "import/prefer-default-export": "error",

        // Restrict which files can be imported in a given folder
        "import/no-restricted-paths": "off",

        // Forbid modules to have too many dependencies
        "import/max-dependencies": ["off", { max: 10 }],

        // Forbid import of modules using absolute paths
        "import/no-absolute-path": "error",

        // Forbid require() calls with expressions
        "import/no-dynamic-require": "error",

        // prevent importing the submodules of other modules
        "import/no-internal-modules": ["off", { allow: [] }],

        // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar
        // original: "off"
        "import/unambiguous": "warn",

        // Forbid Webpack loader syntax in imports
        "import/no-webpack-loader-syntax": "error",

        // Prevent unassigned imports
        // importing for side effects is perfectly acceptable, if you need side effects.
        "import/no-unassigned-import": "off",

        // Prevent importing the default as if it were named
        "import/no-named-default": "error",

        // Reports if a module's default export is unnamed
        // original: "off", allowObject: false, allowLiteral: false, allowArray: false
        "import/no-anonymous-default-export": [
            "error",
            {
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowArray: true,
                allowLiteral: true,
                allowObject: true,
            },
        ],

        // This rule enforces that all exports are declared at the bottom of the file.
        "import/exports-last": "error",

        // Reports when named exports are not grouped together in a single export declaration
        // original: "off"
        "import/group-exports": "error",

        // forbid default exports. this is a terrible rule, do not use it.
        "import/no-default-export": "off",

        // Prohibit named exports. this is a terrible rule, do not use it.
        "import/no-named-export": "off",

        // Forbid a module from importing itself
        "import/no-self-import": "error",

        // Forbid cyclical dependencies between modules
        // original: maxDepth: Infinity
        "import/no-cycle": ["error", { maxDepth: 1 }],

        // Ensures that there are no useless path segments
        "import/no-useless-path-segments": "error",

        // dynamic imports require a leading comment with a webpackChunkName
        "import/dynamic-import-chunkname": [
            "off",
            { importFunctions: [], webpackChunknameFormat: "[0-9a-zA-Z-_/.]+" },
        ],

        // Use this rule to prevent imports to folders in relative parent paths.
        "import/no-relative-parent-imports": "off",

        // Reports modules without any exports, or with unused exports
        // original: "off"
        "import/no-unused-modules": [
            "error",
            { missingExports: false, unusedExports: true },
        ],
    },
};
