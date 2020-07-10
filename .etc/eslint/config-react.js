module.exports = {
    extends: ["prettier/react"],

    plugins: ["react", "react-hooks"],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },

        propWrapperFunctions: [
            "exact", // https://www.npmjs.com/package/prop-types-exact
            "Object.freeze", // https://tc39.github.io/ecma262/#sec-object.freeze
        ],
    },

    rules: {
        // ------------------------------------------------------------------------------ Overwrites

        "import/exports-last": "off",
        "import/no-unused-modules": "off",

        // ---------------------------------------------------------------------------- React Plugin

        // Prevent missing displayName in a React component definition
        // original: "off", { ignoreTranspilerName: false }
        "react/display-name": ["error", { ignoreTranspilerName: true }],

        // Forbid certain propTypes (any, array, object)
        "react/forbid-prop-types": [
            "error",
            {
                forbid: ["any", "array", "object"],
                checkContextTypes: true,
                checkChildContextTypes: true,
            },
        ],

        // Forbid certain props on DOM Nodes
        "react/forbid-dom-props": ["off", { forbid: [] }],

        // Enforce boolean attributes notation in JSX
        "react/jsx-boolean-value": ["error", "never", { always: [] }],

        // Validate closing bracket location in JSX
        // original: "error"
        "react/jsx-closing-bracket-location": ["off", "line-aligned"], // prettier will handle it

        // Validate closing tag location in JSX
        // original: "error"
        "react/jsx-closing-tag-location": "off", // prettier will handle it

        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // original: "error"
        "react/jsx-curly-spacing": ["off", "never", { allowMultiline: true }], // prettier will handle it

        // Enforce event handler naming conventions in JSX
        // original: "off"
        "react/jsx-handler-names": [
            "error",
            { eventHandlerPrefix: "handle", eventHandlerPropPrefix: "on" },
        ],

        // Validate props indentation in JSX
        // original: "error"
        "react/jsx-indent-props": ["off", 2], // prettier will handle it

        // Validate JSX has key prop when in array or iterator
        // original: "off"
        "react/jsx-key": "error",

        // Limit maximum of props on a single line in JSX
        // original: "error"
        "react/jsx-max-props-per-line": ["off", { maximum: 1, when: "multiline" }], // prettier

        // Prevent usage of .bind() in JSX props
        // original: "error"
        "react/jsx-no-bind": [
            "off",
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: false,
                ignoreDOMComponents: true,
            },
        ],

        // Prevent duplicate props in JSX
        "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],

        // Prevent usage of unwrapped JSX strings
        "react/jsx-no-literals": "off",

        // Disallow undeclared variables in JSX
        "react/jsx-no-undef": "error",

        // Enforce PascalCase for user-defined JSX components
        "react/jsx-pascal-case": [
            "error",
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],

        // Enforce propTypes declarations alphabetical sorting
        // original: "off"
        "react/sort-prop-types": [
            "warn",
            {
                ignoreCase: true,
                callbacksLast: true,
                requiredFirst: true,
                sortShapeProp: true,
            },
        ],

        // Enforce props alphabetical sorting
        // original: "off"
        "react/jsx-sort-props": [
            "warn",
            {
                ignoreCase: true,
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],

        // Enforce defaultProps declarations alphabetical sorting
        // original: "off"
        "react/jsx-sort-default-props": ["warn", { ignoreCase: true }],

        // Prevent React to be incorrectly marked as unused
        "react/jsx-uses-react": ["error"],

        // Prevent variables used in JSX to be incorrectly marked as unused
        "react/jsx-uses-vars": "error",

        // Prevent usage of dangerous JSX properties
        "react/no-danger": "warn",

        // Prevent usage of deprecated methods
        "react/no-deprecated": ["error"],

        // Prevent usage of setState in componentDidMount
        "react/no-did-mount-set-state": "off",

        // Prevent usage of setState in componentDidUpdate
        "react/no-did-update-set-state": "error",

        // Prevent usage of setState in componentWillUpdate
        "react/no-will-update-set-state": "error",

        // Prevent direct mutation of this.state
        // original: "off"
        "react/no-direct-mutation-state": "error",

        // Prevent usage of isMounted
        "react/no-is-mounted": "error",

        // Prevent multiple component definition per file
        // original: "off"
        "react/no-multi-comp": ["error", { ignoreStateless: true }],

        // Prevent usage of setState
        "react/no-set-state": "off",

        // Prevent using string references
        "react/no-string-refs": "error",

        // Prevent usage of unknown DOM property
        "react/no-unknown-property": "error",

        // Require ES6 class declarations over React.createClass
        "react/prefer-es6-class": ["error", "always"],

        // Require stateless functions when not using lifecycle methods, setState or ref
        "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],

        // Prevent missing props validation in a React component definition
        "react/prop-types": [
            "error",
            { ignore: [], customValidators: [], skipUndeclared: false },
        ],

        // Prevent missing React when using JSX
        "react/react-in-jsx-scope": "error",

        // Require render() methods to return something
        "react/require-render-return": "error",

        // Prevent extra closing tags for components without children
        "react/self-closing-comp": "error",

        // Enforce component methods order
        "react/sort-comp": [
            "error",
            {
                order: [
                    "static-variables",
                    "static-methods",
                    "instance-variables",
                    "lifecycle",
                    "/^on.+$/",
                    "getters",
                    "setters",
                    "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                    "instance-methods",
                    "everything-else",
                    "rendering",
                ],
                groups: {
                    lifecycle: [
                        "displayName",
                        "propTypes",
                        "contextTypes",
                        "childContextTypes",
                        "mixins",
                        "statics",
                        "defaultProps",
                        "constructor",
                        "getDefaultProps",
                        "getInitialState",
                        "state",
                        "getChildContext",
                        "getDerivedStateFromProps",
                        "componentWillMount",
                        "UNSAFE_componentWillMount",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "UNSAFE_componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "UNSAFE_componentWillUpdate",
                        "getSnapshotBeforeUpdate",
                        "componentDidUpdate",
                        "componentDidCatch",
                        "componentWillUnmount",
                    ],
                    rendering: ["/^render.+$/", "render"],
                },
            },
        ],

        // Prevent missing parentheses around multilines JSX
        "react/jsx-wrap-multilines": [
            "error",
            {
                declaration: "parens-new-line",
                assignment: "parens-new-line",
                return: "parens-new-line",
                arrow: "parens-new-line",
                condition: "parens-new-line",
                logical: "parens-new-line",
                prop: "parens-new-line",
            },
        ],

        // Require that the first prop in a JSX element be on a new line when the element is multiline
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

        // Enforce spacing around jsx equals signs
        "react/jsx-equals-spacing": ["error", "never"],

        // Enforce JSX indentation
        "react/jsx-indent": "off", // prettier

        // Disallow target="_blank" on links
        "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }],

        // only .jsx files may have JSX
        // original: "error"
        "react/jsx-filename-extension": ["off", { extensions: [".jsx"] }],

        // prevent accidental JS comments from being injected into JSX as text
        "react/jsx-no-comment-textnodes": "error",

        // disallow using React.render/ReactDOM.render's return value
        "react/no-render-return-value": "error",

        // require a shouldComponentUpdate method, or PureRenderMixin
        "react/require-optimization": ["off", { allowDecorators: [] }],

        // warn against using findDOMNode()
        "react/no-find-dom-node": "error",

        // Forbid certain props on Components
        "react/forbid-component-props": ["off", { forbid: [] }],

        // Forbid certain elements
        "react/forbid-elements": ["off", { forbid: [] }],

        // Prevent problem with children and props.dangerouslySetInnerHTML
        "react/no-danger-with-children": "error",

        // Prevent unused propType definitions
        "react/no-unused-prop-types": [
            "error",
            {
                customValidators: [],
                skipShapeProps: false,
            },
        ],

        // Require style prop value be an object or var
        "react/style-prop-object": "error",

        // Prevent invalid characters from appearing in markup
        "react/no-unescaped-entities": "error",

        // Prevent passing of children as props
        "react/no-children-prop": "error",

        // Validate whitespace in and around the JSX opening and closing brackets
        "react/jsx-tag-spacing": [
            "error",
            {
                closingSlash: "never",
                beforeSelfClosing: "always",
                afterOpening: "never",
                beforeClosing: "never",
            },
        ],

        // Prevent usage of Array index in keys
        "react/no-array-index-key": "error",

        // Enforce a defaultProps definition for every prop that is not a required prop
        "react/require-default-props": ["error", { forbidDefaultForRequired: true }],

        // Forbids using non-exported propTypes
        // original: "warn"
        "react/forbid-foreign-prop-types": ["error", { allowInPropTypes: false }],

        // Prevent void DOM elements from receiving children
        "react/void-dom-elements-no-children": "error",

        // Enforce all defaultProps have a corresponding non-required PropType
        "react/default-props-match-prop-types": [
            "error",
            { allowRequiredDefaults: false },
        ],

        // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        "react/no-redundant-should-component-update": "error",

        // Prevent unused state values
        "react/no-unused-state": "error",

        // Enforces consistent naming for boolean props
        // original: "off"
        "react/boolean-prop-naming": [
            "error",
            {
                propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
                rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
            },
        ],

        // Prevents common casing typos
        "react/no-typos": "error",

        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
        "react/jsx-curly-brace-presence": [
            "error",
            { props: "never", children: "never" },
        ],

        // One JSX Element Per Line
        "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],

        // Enforce consistent usage of destructuring assignment of props, state, and context
        "react/destructuring-assignment": ["error", "always"],

        // Prevent using this.state within a this.setState
        "react/no-access-state-in-setstate": "error",

        // Prevent usage of button elements without an explicit type attribute
        "react/button-has-type": ["error", { button: true, submit: true, reset: false }],

        // Ensures inline tags are not rendered without spaces between them
        "react/jsx-child-element-spacing": "off",

        // Prevent this from being used in stateless functional components
        "react/no-this-in-sfc": "error",

        // Validate JSX maximum depth
        "react/jsx-max-depth": "off",

        // Disallow multiple spaces between inline JSX props
        "react/jsx-props-no-multi-spaces": "error",

        // Prevent usage of UNSAFE_ methods
        "react/no-unsafe": "error",

        // Enforce shorthand or standard form for React fragments
        "react/jsx-fragments": ["error", "element"],

        // Enforce linebreaks in curly braces in JSX attributes and expressions.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
        "react/jsx-curly-newline": [
            "error",
            {
                multiline: "consistent",
                singleline: "consistent",
            },
        ],

        // Enforce state initialization style
        // TODO: set to "never" once babel-preset-airbnb supports public class fields
        "react/state-in-constructor": ["error", "always"],

        // Enforces where React component static properties should be positioned
        // TODO: set to "static public field" once babel-preset-airbnb supports public class fields
        "react/static-property-placement": ["error", "property assignment"],

        // Disallow JSX props spreading
        "react/jsx-props-no-spreading": [
            "error",
            {
                html: "enforce",
                custom: "ignore",
                explicitSpread: "ignore",
                exceptions: [],
            },
        ],

        // Enforce that props are read-only
        "react/prefer-read-only-props": "off",

        // Prevent usage of `javascript:` URLs
        "react/jsx-no-script-url": ["error", [{ name: "Link", props: ["to"] }]],

        // Disallow unnecessary fragments
        // original: "off"
        "react/jsx-no-useless-fragment": "error",

        // Prevent adjacent inline elements not separated by whitespace
        "react/no-adjacent-inline-elements": "error",

        // Enforce a specific function type for function components
        // original: "off"
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "function-declaration",
                unnamedComponents: "arrow-function",
            },
        ],

        // ---------------------------------------------------------------------- React-Hooks Plugin

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",

    },
};
