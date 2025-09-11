---
translationKey: 'alert'
title: 'Alert'
description: 'A shortcode that displays a clear and color-coded message to users.'
---

{{< shortcode alert >}} is a shortcode template that displays a clear and color-coded message to users. Typically placed at the top of the article as a warning or bit of preemptive information given to visitors, but may also indicate some success.

An example use would be warning visitors that downloadable content must be purchased before the subject of the page is accessible.

This template should be used sparingly, and not simply to highlight information that fits perfectly well within the page.

{{< quote "This particular variant has all the bells and whistles befitting an entire front line unit: folding sight, capacity to split into two parts for easier carrying, and a stock that can be comfortably used by one in every 500 soldiers." "Liberty Launcher publicity blurb" >}}

## Examples

### Default
{{< alert
	title="Informal message"
	text="This message should provide important information regarding the article."
>}}

### Warn
{{< alert
	type="warn"
	title="Warning message"
	text="This message should provide a necessary warning regarding the article."
>}}

## Syntax

```
{{</* alert
	type="warn"
	title="Requires Downloadable Content"
	text="The content of this article is only accessible to owners of x downloadable content."
*/>}}
```

## Arguments

| Arguments | Description                                         | Possible values |
|-----------|-----------------------------------------------------|-----------------|
| Type      | The theme of the message being conveyed to visitors | empty/warn      |
| Title     | Displayed title                                     |                 |
| Text      | Displayed text                                      |                 |
