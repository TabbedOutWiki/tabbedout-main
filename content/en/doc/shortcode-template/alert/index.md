---
translationKey: 'alert'
title: 'Alert'
description: 'A shortcode that displays a clear and color-coded message to users.'
---

{{< shortcode alert >}} is a shortcode template that displays a clear and color-coded message to users. Typically placed at the top of the article as a warning or bit of preemptive information given to visitors, but may also indicate some success.

An example use would be warning visitors that downloadable content must be purchased before the subject of the page is accessible.

This template should be used sparingly, and not simply to highlight information that fits perfectly well within the page.

## Shortcode use

### Syntax

```
{{</* alert
	type="warn"
	title="Requires Downloadable Content"
	text="The content of this article is only accessible to owners of <downloadable content name>."
*/>}}
```

### Results

{{< alert
	type="warn"
	title="Requires Downloadable Content"
	text="The content of this article is only accessible to owners of <downloadable content name>."
>}}

## Arguments

| Arguments | Description                                         | Possible values    |
|-----------|-----------------------------------------------------|--------------------|
| Type      | The theme of the message being conveyed to visitors | empty/warn/success |
| Title     | Displayed title                                     |                    |
| Text      | Displayed text                                      |                    |
