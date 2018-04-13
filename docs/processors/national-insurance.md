### National Insurance Processor

> The National Insurance processor is based on the following rules

 - The format is two letters, six digits, and one letter;
 - Spaces are optional, so either `NN 12 34 56 A` or `NN123456A` are valid;
 - Neither of the first two letters can be D, F, I, Q, U, or V, and the second letter may not be O;
 - The following two letter prefixes are not used: BG, GB, NK, KN, TN, NT and ZZ;
 - The last letter may be either A, B, C, D, F, M, or P.

```
((?=[^bg|gb|nk|kn|tn|nt|zz])((?=[^dfiquv])[a-z])(?=[^dfioquv])[a-z])\s?[0-9]{2}\s?[0-9]{2}\s?[0-9]{2}\s?[a-d|f|m|p]{1}/i
```
