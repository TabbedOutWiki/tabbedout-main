---
translationKey: 'youtube'
title: 'Youtube'
description: 'A shortcode that generates a clickable thumbnail linking to the specified youtube video ID'
---

{{< shortcode "youtube" >}} generates a clickable thumbnail linking to the specified youtube video. The video must be specified by its id with an optional start time.

If only one portion of the video is relevant to the section content, add an argument specifying the start time (in seconds).

## Example

{{< youtube id="emGri7i8Y2Y" start="87" >}}

## Syntax
`{{</* youtube id="emGri7i8Y2Y" start="87" */>}}`

## Arguments
| Arguments | Description                                                     | Required | Example     |
|-----------|-----------------------------------------------------------------|----------|-------------|
| id        | The video ID specified in the URL as a string of 11 characters. | Yes      | emGri7i8Y2Y |
| start     | The desired video start time measured in seconds.               | No       | 87          |
