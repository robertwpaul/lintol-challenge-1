### Vehicle Registration Processor

> The Vehicle Registration processor: [source](https://www.regextester.com/97133)

- It consists of two letters, followed by two numbers that help identify the age of the vehicle, and three letters at the end.
- It consists of one letter that helps identify the age of the vehicle, followed by one, two or three numbers, and three letters at the end.
- It consists of three letters, followed by one, two or three numbers, and a single letter at the end that helps identify the age of the vehicle.
- It can consist of up to four numbers followed by up to three letters, or vice versa. The maximum number of characters is six.

```
(^[A-Z]{2}[0-9]{2} [A-Z]{3}$)|(^[A-Z][0-9]{1,3} [A-Z]{3}$)|(^[A-Z]{3} [0-9]{1,3}[A-Z]$)|(^[0-9]{1,4} [A-Z]{1,2}$)|(^[0-9]{1,3} [A-Z]{1,3}$)|(^[A-Z]{1,2} [0-9]{1,4}$)|(^[A-Z]{1,3} [0-9]{1,3}$)
```

== Valid Current Style ==
AB51 ABC
BC62 GJD
BA55 MAN
