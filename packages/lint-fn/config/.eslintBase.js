const beforeAfterTrue = {
  before : true,
  after  : true,
}
const beforeFalse = {
  before : false,
  after  : true,
}
const keySpacing = {
  align       : 'colon',
  beforeColon : true,
}
const emptyLines = {
  max    : 1,
  maxEOF : 1,
}
const curlySpacing = {
  arraysInObjects  : true,
  objectsInObjects : true,
}
const memberSyntaxSortOrder = [ 'none', 'all', 'multiple', 'single' ]
const sortImports = {
  ignoreCase       : true,
  ignoreMemberSort : true,
  memberSyntaxSortOrder,
}
const functionParen = {
  anonymous  : 'never',
  named      : 'never',
  asyncArrow : 'never',
}
const linesClass = [
  1, 
  'always', 
  { exceptAfterSingleLine: true }
]
const betweenStatements = { 
  blankLine: 'always', 
  prev: '*', 
  next: 'return' 
}

module.exports = {
  'array-bracket-spacing'         : [ 1, 'always' ],
  'array-callback-return'         : 0,
  'arrow-body-style'              : [ 1, 'as-needed' ],
  'arrow-parens'                  : [ 1, 'as-needed' ],
  'arrow-spacing'                 : [ 1, beforeAfterTrue ],
  'async-await/space-after-async' : 1,
  'async-await/space-after-await' : 1,
  'block-spacing'                 : 1,
  'brace-style'                   : [ 1, '1tbs', { allowSingleLine : true } ],
  'capitalized-comments'          : 0,
  'callback-return'               : 0,
  'camelcase'                     : 0,
  'comma-dangle'                  : [ 1, 'always-multiline' ],
  'comma-spacing'                 : [ 1, beforeFalse ],
  'comma-style'                   : [ 1, 'last' ],
  'complexity'                    : [ 1, { max : 10 } ],
  'computed-property-spacing'     : [ 1, 'always' ],
  'consistent-return'             : 0,
  'curly'                         : 0,
  'default-case'                  : 1,
  'dot-location'                  : [ 1, 'property' ],
  'dot-notation'                  : 1,
  'eol-last'                      : [ 1, 'always' ],
  'eqeqeq'                        : 1,
  'func-call-spacing'             : [ 1, 'never' ],
  'func-style'                    : [ 0, 'expression' ],
  'getter-return'                 : 1,
  'id-length'                     : [ 1, { min : 1, max : 35} ],
  'indent'                        : [ 2, 2 ],
  'key-spacing'                   : [ 1, keySpacing ],
  'keyword-spacing'               : [ 1, beforeAfterTrue ],
  'linebreak-style'               : [ 1, 'unix' ],
  'lines-between-class-members'   :  linesClass,
  'lno-console'                   : 0,
  'max-depth'                     : [ 1, 4 ],
  'max-len'                       : [ 1, { ignoreTemplateLiterals : true } ],
  'max-lines-per-function'        : [1, { 'max': 70 }],
  'max-params'                    : [ 1, 3 ],
  'max-statements'                : [ 1, 50 ],
  'max-statements-per-line'       : [ 1, { max : 3 } ],
  'multiline-ternary'             : 0,
  'newline-before-return'         : 1,
  'newline-per-chained-call'      : 1,
  'no-await-in-loop'              : 0,
  'no-case-declarations'          : 1,
  'no-cond-assign'                : 1,
  'no-confusing-arrow'            : 1,
  'no-console'                    : 0,
  'no-const-assign'               : 1,
  'no-constant-condition'         : 1,
  'no-control-regex'              : 1,
  'no-debugger'                   : 0,
  'no-dupe-args'                  : 1,
  'no-dupe-class-members'         : 1,
  'no-dupe-keys'                  : 1,
  'no-duplicate-case'             : 1,
  'no-else-return'                : 1,
  'no-empty'                      : 1,
  'no-empty-pattern'              : 1,
  'no-extra-boolean-cast'         : 1,
  'no-extra-parens'               : 1,
  'no-fallthrough'                : 1,
  'no-implicit-coercion'          : 1,
  'no-inline-comments'            : 1,
  'no-invalid-this'               : 1,
  'no-irregular-whitespace'       : [ 1, { skipComments : true } ],
  'no-lonely-if'                  : 1,
  'no-magic-numbers'              : 0,
  'no-mixed-operators'            : 1,
  'no-mixed-spaces-and-tabs'      : 1,
  'no-multi-spaces'               : 1,
  'no-multiple-empty-lines'       : [ 1, emptyLines ],
  'no-negated-condition'          : 1,
  'no-nested-ternary'             : 1,
  'no-param-reassign'             : 1,
  'no-return-await'               : 1,
  'no-shadow'                     : 1,
  'no-shadow-restricted-names'    : 1,
  'no-throw-literal'              : 1,
  'no-trailing-spaces'            : 1,
  'no-undef'                      : 0,
  'no-unneeded-ternary'           : 1,
  'no-unreachable'                : 1,
  'no-unsafe-negation'            : 1,
  'no-unused-vars'                : 0,
  'no-use-before-define'          : 1,
  'no-useless-computed-key'       : 1,
  'no-useless-constructor'        : 1,
  'no-useless-escape'             : 1,
  'no-useless-rename'             : 1,
  'no-useless-return'             : 1,
  'no-var'                        : 1,
  'no-whitespace-before-property' : 1,
  'nonblock-statement-body-position': 0,
  'object-curly-newline'          : [ 1, { multiline : true } ],
  'object-curly-spacing'          : [ 1, 'always', curlySpacing ],
  'object-property-newline'       : 1,
  'object-shorthand'              : 0,
  'operator-assignment'           : 1,
  'operator-linebreak'            : [ 1, 'after' ],
  'padded-blocks'                 : 0,
  'padding-line-between-statements': [ 1, betweenStatements],
  'prefer-arrow-callback'         : 1,
  'prefer-const'                  : 1,
  'prefer-destructuring'          : 1,
  'prefer-rest-params'            : 1,
  'quote-props'                   : [ 1, 'consistent-as-needed' ],
  'quotes'                        : [ 1, 'single' ],
  'require-await'                 : 1,
  'require-jsdoc'                 : 0,
  'require-yield'                 : 1,
  'rest-spread-spacing'           : [ 1, 'never' ],
  'semi'                          : [ 1, 'never' ],
  'sort-imports'                  : [ 0, sortImports ],
  'sort-keys'                     : 1,
  'sort-vars'                     : 1,
  'space-before-blocks'           : [ 1, 'never' ],
  // 'space-before-function-paren'   : [ 1, functionParen ],
  'space-before-function-paren'   : 0,
  'space-in-parens'               : [ 1, 'never' ],
  'space-infix-ops'               : 1,
  'space-unary-ops'               : 1,
  'strict'                        : 0,
  'switch-colon-spacing'          : [1, {'after': true, 'before': false}],
  'template-curly-spacing'        : [ 1, 'always' ],
  'valid-jsdoc'                   : 0,
  'valid-typeof'                  : 1,
  'wrap-regex'                    : 1,
  'yield-star-spacing'            : [ 1, 'before' ],
  'yoda'                          : [ 1, 'never' ],
}
