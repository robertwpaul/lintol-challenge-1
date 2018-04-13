### Email Address Processor

> The Email Address processor uses a more practical implementation of [RFC 2822](https://tools.ietf.org/html/rfc2822).

- It will match 99.99% of all email addresses in actual use today.
- A further change you could make is to allow any two-letter country code top level domain, and only specific generic top level domains.
- This regex filters dummy email addresses like asdf@adsf.adsf. It will need to update as new top-level domains are added.

```
[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|uk|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b
```
