### Normal characters

Expression | Description
:--|:--
`.` or `[^\n\r]` | any character *excluding* a newline or carriage return
`[A-Za-z]` | alphabet (any letter case)
`[a-z]` | lowercase alphabet
`[A-Z]` | uppercase alphabet
`\d` or `[0-9]` | digit
`\D` or `[^0-9]` | non-digit
`_` | underscore
`\w` or `[A-Za-z0-9_]` | alphabet, digit or underscore (handy for variable/user names)
`\W` or `[^A-Za-z0-9_]` | inverse of `\w`
`\S` | inverse of `\s`

> Tip: by default `.` does not match a newline in most engines. To match across lines, enable the `s` (dotAll) flag.

### Whitespace characters

Expression | Description
:--|:--
` ` | space
`\t` | tab
`\n` | newline
`\r` | carriage return
`\s` | space, tab, newline or carriage return (use `\s+` to match consecutive whitespace)

### Character set

Expression | Description
:--|:--
`[xyz]` | either `x`, `y` or `z`
`[^xyz]` | neither `x`, `y` nor `z`
`[1-3]` | either `1`, `2` or `3`
`[^1-3]` | neither `1`, `2` nor `3`

- Think of a character set as an `OR` operation on the single characters enclosed between the square brackets.
- Use `^` after the opening `[` to “negate” the character set.
- Within a character set, `.` means a literal period (no escaping needed).

### Characters that require escaping

#### Outside a character set

Expression | Description
:--|:--
`\.` | period
`\^` | caret
`\$` | dollar sign
`\|` | pipe
`\\` | back slash
`\/` | forward slash
`\(` | opening bracket
`\)` | closing bracket
`\[` | opening square bracket
`\]` | closing square bracket
`\{` | opening curly bracket
`\}` | closing curly bracket

#### Inside a character set

Expression | Description
:--|:--
`\\` | back slash
`\]` | closing square bracket

- A `^` must be escaped only if it occurs immediately after the opening `[` of the character set.
- A `-` must be escaped only if it occurs between two alphabets or two digits (where it denotes a range).

### Quantifiers

Expression | Description
:--|:--
`{2}` | exactly 2
`{2,}` | at least 2
`{2,7}` | at least 2 but no more than 7
`*` | 0 or more (same as `{0,}`)
`+` | 1 or more (same as `{1,}`)
`?` | exactly 0 or 1 (same as `{0,1}`)

- The quantifier goes *after* the expression to be quantified.
- Add `?` after a quantifier (e.g. `*?`, `+?`) to make it *lazy* (non-greedy), matching as few characters as possible.

### Boundaries

Expression | Description
:--|:--
`^` | start of string
`$` | end of string
`\b` | word boundary

- How word boundary matching works:
    - At the beginning of the string if the first character is `\w`.
    - Between two adjacent characters within the string, if the first character is `\w` and the second character is `\W`.
    - At the end of the string if the last character is `\w`.

> Tip: in multiline mode (the `m` flag), `^` and `$` match the start and end of *each* line, not just the whole string.

### Matching

Expression | Description
:--|:--
`foo\|bar` | match either `foo` or `bar`
`foo(?=bar)` | lookahead: match `foo` only if it is followed by `bar` (does not consume `bar`)
`foo(?!bar)` | negative lookahead: match `foo` only if it is *not* followed by `bar`
`(?<=bar)foo` | lookbehind: match `foo` only if it is preceded by `bar`
`(?<!bar)foo` | negative lookbehind: match `foo` only if it is *not* preceded by `bar`

> Tip: lookarounds only assert position and do not consume characters, which is useful for locating text without altering it.

### Grouping and capturing

Expression | Description
:--|:--
`(foo)` | capturing group; match and capture `foo`
`(?:foo)` | non-capturing group; match `foo` but *without* capturing it (improves performance, avoids extra numbering)
`(foo)bar\1` | `\1` is a backreference to the 1st capturing group; matches `foobarfoo`

- Capturing groups are only relevant in the following methods:
    - `string.match(regexp)`
    - `string.matchAll(regexp)`
    - `string.replace(regexp, callback)`
- `\N` is a backreference to the `Nth` capturing group. Capturing groups are numbered starting from 1.

## References and tools

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [RegExplained](https://leaverou.github.io/regexplained/)
