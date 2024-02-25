# Hugo shortcodes

- [alert](#alert)
- [button](#button)
- [figure](#figure)
- [icon](#icon)
- [ifparam](#ifparam)
- [img](#img)
- [include](#include)
- [param](#param)
- [tabpane](#tabpane)

## alert

If you want to add an alert banner to your content, you can you the `alert` shortcode.

You can use positional parameters:

```
{{< alert "warning" >}}
  Markdown
{{< /alert >}}
```

Or named parameters:

```
{{< alert severity="warning" size="small" >}}
  Markdown
{{< /alert >}}
```

All parameters are optional:

- `severity`: `info` (default), `success`, `warning`, or `error`
- `size`: `small`

##### Output

```html
<div class="alert alert--info alert--small">
  <div class="alert__icon">
    <svg class="icon icon--info icon--small">...</svg>
  </div>
  <div class="alert__body">
    Markdown
  </div>
</div>
```

## button

If you want to add a button to your content, you can you the `button` shortcode.

You can use positional parameters:

```
{{< button "https://github.com/" "primary" "small" "disabled" >}}
  Markdown
{{< /button >}}
```

Or named parameters:

```
{{< button href="https://github.com/" variant="primary" size="small" disabled="true" >}}
  Markdown
{{< /button >}}
```

All parameters are optional except for `href`:

- `href`: URL
- `variant`: `primary`, `secondary`, `info`, `success`, `warning`, or `error`
- `size`: `small` or `large`
- `disabled`: `disabled` or `true`

##### Notes

If `href` begins with "http", then the link will open in a new window.

##### Output

```html
<a class="button button--primary button--small button--disabled">
  Markdown
</a>
```

## figure

If you want to add an image with a caption to your content, you can use the `figure` shortcode.

You can use positional parameters:

```
{{< figure "/path/to/image.jpg" "Alt text" "Image caption" >}}
```

Or named parameters:

```
{{< figure src="/path/to/image.jpg" alt="Alt text" title="Image caption" >}}
```

All parameters are optional except for `src`:

- `src`: Image filepath
- `alt`: Image alt
- `title`: Caption to display under the image

##### Output

```html
<figure>
  <img src="/path/to/image.jpg" alt="Alt text">
  <figcaption>Image caption</figcaption>
</figure>
```

## icon

If you want to add an icon to your content, you can use the `icon` shortcode.

You can use positional parameters:

```
{{< icon "alert" "primary" "small" >}}
```

Or named parameters:

```
{{< icon name="alert" variant="primary" size="small" >}}
```

All parameters are optional except for `name`:

- `name`: Icon name
- `variant`: `primary`, `secondary`, `info`, `success`, `warning`, or `error`
- `size`: `small` or `large`

##### Notes

The icon file must be an svg, located in the `/assets/icons/` directory.

##### Output

```html
<svg class="icon icon--primary icon--small">...</svg>
```

## ifparam

If you want to conditionally print some text based on a **boolean** parameter set in `frontmatter`, you can use the `ifparam` shortcode.

Let's say you have this parameter set in your `frontmatter`...

```
---
some_param: true
---
```

In your Markdown, you can conditionally print some text based on this parameter.

```
{{< ifparam "some_param" "enabled" "disabled" >}}
```

You can also leave the false value empty, and the shortcode will only print the text if the parameter is true.

## img

If you want to add an image in your content, but need to set additional attributes not supported by Markdown image syntax, you can use the `img` shortcode.

```
{{< img src="/path/to/image.jpg" alt="Alt text" width="600" height="400" class="image" style="border: solid 1px red" >}}
```

All parameters are optional except for `src`:

- `src`: Image path 
- `alt`: Image alt
- `width`: Image width
- `height`: Image height
- `class`: CSS class name
- `style`: Inline CSS

##### Output

```html
<img src="/path/to/image.jpg" alt="Alt text" width="600" height="400" class="image" style="border: solid 1px red">
```

## include

If you have HTML or Markdown that you would like to externally include in your content files, you can place the file under the current working directory. Then, you can use the `include` shortcode to pull in this file into your content.

```
{{< include "includes/file.md" >}}
```

##### Notes

- You must use `{{< >}}` shortcode delimiters to render the included content correctly.
- All included files under the `content` directory must have `draft:true` set in their `frontmatter`.
- Only relative paths **under** the page including the file are supported. Relative paths traversing up the directory are **not** supported. For files outside the current working directory you can use an absolute path starting with `/`.
- When editing an **included** file in local development, the page **including** the file is not automatically updated. Restarting the server is required to see any changes.
- The headings of included files will **not** be displayed in Hugo's `TableOfContents`.

## param

If you need to print a `frontmatter` parameter in your Markdown, you can use the `param` shortcode.

Let's say you have this param set in your `frontmatter`:

```
---
title: Hugo shortcodes
---
```

Then in your Markdown, you can print the value of this parameter:

```
{{< param "title" >}}
```

You can also pass a second optional value that will only be returned if the parameter is empty.

```
{{< param "param_name" "default value" >}}
```

## tabpane

If you want to add tabs to your content, you can use the `tabpane` shortcode.

```
{{< tabpane >}}
{{< tab name="Tab 1" >}}
  Markdown
{{< /tab >}}
{{< tab name="Tab 2" >}}
  Markdown
{{< /tab >}}
{{< tab name="Tab 3" >}}
  Markdown
{{< /tab >}}
{{< /tabpane >}}
```

##### Notes

- On page load, the first tab will be active. At this time, there is not a parameter to set which tab is active by default.

##### Output

```html
<div class="tabpane">
  <input type="radio" name="tabpane-00" id="tabpane-00-00" class="tabpane__input">
  <label class="tabpane__label" for="tabpane-00-00">
    Tab 1
  </label>
  <div class="tabpane__panel">
    Markdown
  </div>
  <input type="radio" name="tabpane-00" id="tabpane-00-01" class="tabpane__input">
  <label class="tabpane__label" for="tabpane-00-01">
    Tab 2
  </label>
  <div class="tabpane__panel">
    Markdown
  </div>
  <input type="radio" name="tabpane-00" id="tabpane-00-02" class="tabpane__input">
  <label class="tabpane__label" for="tabpane-00-02">
    Tab 3
  </label>
  <div class="tabpane__panel">
    Markdown
  </div>
</div>
```
