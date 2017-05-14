#React SVG Bubble

A dropdown/tooltip-style navigation component in a fluid svg container.

####Props

#####speechDirection

Sets the location of the focal point of the speech bubble.
Choose from: 'top-right', 'top-left', 'right-top', 'right-bottom', 'bottom-right', 'bottom-left', 'left-bottom', 'left-top' Set to top-right by default.

#####characterWidth

```jsx

<Bubble characterwidth='10' />

```

Size in px of the average character width. Defaults to 10.

#####minTextWidth

```jsx

<Bubble minTextWidth='108' />

```

Minimum total width of the text area. Off by default.

#####textHeight

```jsx

<Bubble textHeight='36' />

```

Height in px of text. Defaults to 36.

#####textMargin

```jsx

<Bubble textMargin='9' />

```

Vertical leading space in px. Defaults to 9.

#####textColumns

```jsx

<Bubble textColumns='3' />

```

The number of columns which text should be divided into. Defaults to 1.

#####svgDimensions

```jsx

<Bubble svgDimensions='{ x: 180, y: 54 }' />

```

The viewbox dimensions of the SVG background.

#####maskOrigin

```jsx

<Bubble maskOrigin='{ x: 144, y: 0 }' />

```

The origin of the circular mask which creates an open/close transition.

#####thresholds

```jsx

<Bubble thresholds='{ x: 36, y: 36 }' />

```

The minimum coordinate value at which offsets will be applied to the background SVG path in order to fit around the text. This is needed to avoid skewing the original path details, such as the corners or speech bubble focal point.

#####dividerWidth

```jsx

<Bubble dividerWidth='4' />

```

When multiple columns are specified - set the width of the vertical dividing line. Defaults to 2.5

#####textboxOrigin

```jsx

<Bubble textboxOrigin='{ x: 36, y: 36 }' />

```

Origin coordinates of the text group.

####Dependencies

- `"styled-components": "next"`
- `"react": "^15.5.0"`
- `"recompose": "^0.22.0"`

*Please note* this component uses styled-components v2 (attrs constructor) and therefore should not be used in a production environment the next dependency is removed.
