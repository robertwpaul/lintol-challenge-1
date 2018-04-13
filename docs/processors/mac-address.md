### MAC Address Processor

> The MAC Address processor enforces a specific format and value range.

- Enforce either all colons or all dashes for your MAC notation.
- Matches on upper/lower case addresses

```
(?:[A-Fa-f0-9]{2}[:-]){5}(?:[A-Fa-f0-9]{2})
```
