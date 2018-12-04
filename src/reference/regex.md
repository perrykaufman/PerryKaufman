# Regular Expressions

## Cheatsheet

* `/abc/` A sequence of characters

* `/[abc]/` Any character from a set of characters

* `/[^abc]/` Any character not in a set of characters

* `/[0-9]/` Any character in a range of characters

* `/x+/` One or more occurrences of the pattern x

* `/x+?/` One or more occurrences, nongreedy

* `/x*/` Zero or more occurrences

* `/x?/` Zero or one occurrence

* `/x{2,4}/` Two to four occurrences

* `/(abc)/` A group

* `/a|b|c/` Any one of several patterns

* `/\d/` Any digit character

* `/\w/` An alphanumeric character (“word character”)

* `/\s/` Any whitespace character

* `/./` Any character except newlines

* `/\b/` A word boundary

* `/^/` Start of input

* `/$/` End of input

**Source**: [Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html#h_ErccPg/l98)

## Examples

* `/\b(0?[1-9]|1[012])-(0?[1-9]|[12]\d|3[01])-([1-2]\d{3})\b/`

  Validates a date in a string, and can be used to extract the month, day, and year with exec().

* `/^\/([^\/]+\/)*/`

  Matches the path to a directory of a page (used on this website).

## Guides
* [Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)

## Resources
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)