# Hugo shortcodes and render hooks

This collection of Hugo [shortcodes](https://gohugo.io/templates/shortcode/) and [render hooks](https://gohugo.io/render-hooks/) is not meant to be an exhaustive list of components you might need in your Markdown content, rather it's a few examples that illustrate various techinques that will help you build out your own system. These techinques include: validating parameters ([button](#button)), handling arbitrary parameters ([img](#img)), using a partial within the shortcode so layout and content can use the component ([icon](#icon)), using conditional content ([ifparam](#ifparam)), and passing parameters from a child shortcode to the parent for rendering ([tabpane](#tabpane)).

To see the output of these shortcodes and render hooks, run:

```bash
hugo server
```

Then visit http://localhost:1313 in your browser.

Requires Hugo v0.134.0 or later.

---

## Render hooks

- [Blockquotes](#blockquotes)
- [Code blocks](#code-blocks)
- [Headings](#headings)
- [Images](#images)
- [Links](#links)
- [Tables](#tables)

### Blockquotes

This render hook overrides the rendering of Markdown blockquotes to HTML.

```markdown
> Quote
```

#### Blockquote with citation and caption

In the render hook example, you can add a citation or caption to your blockquote by passing them as Markdown attributes.

```markdown
> Most human beings have an almost infinite capacity for taking things for granted.
{cite="https://www.huxley.net/bnw/" caption="Brave New World"}
```

#### Blockquote rendered as an alert

To add an alert to your Markdown content, you can add an alert designator consisting of an exclamation point followed by the alert type, wrapped within brackets.

```markdown
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.
```

Learn more about the [blockquote render hook](https://gohugo.io/render-hooks/blockquotes/).

### Code blocks

This render hook overrides the rendering of Markdown code blocks to HTML.

In the render hook example, all code blocks will have line numbers by default.

````markdown
```bash
declare a=1
echo "$a"
exit
```
````

Learn more about the [codeblock render hook](https://gohugo.io/render-hooks/code-blocks/).

### Headings

This render hook overrides the rendering of Markdown headings to HTML.

In the render hook example, headings `h1` through `h4` will automatically have an anchor link injected.

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

Learn more about the [heading render hook](https://gohugo.io/render-hooks/headings/).

### Images

This render hook overrides the rendering of Markdown images to HTML.

```markdown
This is an inline ![Alt text](/images/icon.svg "Image title") image.
```

#### Standalone images

In the render hook example, standalone images will be rendered within a `figure` element. 

```markdown
![Alt text](/images/placeholder.svg "Image caption")
```

Learn more about the [image render hook](https://gohugo.io/render-hooks/images/).

### Links

This render hook overrides the rendering of Markdown links to HTML.

In the render hook example, links with external destinations will automatically open in a new window.

```markdown
This is a [link](/).

This is an [external link](https://github.com/).
```

Learn more about the [link render hook](https://gohugo.io/render-hooks/links/).

### Tables

This render hook overrides the rendering of Markdown tables to HTML.

In the render hook example, tables will automatically be striped.

```markdown
| Month    | Amount |
| :------- | -----: |
| January  | $10    |
| February | $100   |
| March    | $1000  |
```

Learn more about the [table render hook](https://gohugo.io/render-hooks/tables/).

---

## Shortcodes

- [alert](#alert)
- [blockquote](#blockquote)
- [button](#button)
- [collapse](#collapse)
- [file-list](#file-list)
- [icon](#icon)
- [ifparam](#ifparam)
- [img](#img)
- [include](#include)
- [labeled-highlight](#labeled-highlight)
- [param](#param)
- [resource](#resource)
- [siteparam](#siteparam)
- [tabpane](#tabpane)

### alert

If you want to add an alert banner to your content, you can use the `alert` shortcode.

```markdown
{{< alert severity="warning" size="small" >}}
  **Warning:** This is a small warning alert.
{{< /alert >}}
```

#### Parameters

| Name          | Value                                           | Description                     |
| ------------- | ----------------------------------------------- | ------------------------------- |
| 0: `severity` | `info` (default), `success`, `warning`, `error` | Variant of alert                |
| 1: `size`     | `small`                                         | Size of alert; Defaults to none |
| 2: `hideIcon` | `true`                                          | Hides icon; Defaults to false   |

#### Output

```html
<div class="alert alert--warning alert--small">
  <div class="alert__icon">
    <svg class="icon icon--alert icon--small">...</svg>
  </div>
  <div class="alert__body">
    <strong>Warning:</strong> This is a small warning alert.
  </div>
</div>
```

### blockquote

If you want to add a blockquote to your content, you can use the `blockquote` shortcode.

```markdown
{{< blockquote author="Aldous Huxley" cite="https://www.huxley.net/bnw/" caption="Brave New World" >}}
  Most human beings have an almost infinite capacity for taking things for granted.
{{< /blockquote >}}
```

#### Parameters

| Name         | Value  | Description |
| ------------ | ------ | ----------- |
| 0: `author`  | String | Author name |
| 1: `cite`    | URL    | Source URL  |
| 2: `caption` | String | Source name |

#### Output

```html
<figure>
  <blockquote cite="https://www.huxley.net/bnw/">
    <p>
      Most human beings have an almost infinite capacity for taking things for granted.
    </p>
    <figcaption>
      Aldous Huxley, <cite><a href="https://www.huxley.net/bnw/">Brave New World</a></cite>
    </figcaption>
  </blockquote>
</figure>
```

### button

If you want to add a button to your content, you can use the `button` shortcode.

```markdown
{{< button href="https://github.com/" variant="primary" size="large" >}}
  Learn more
{{< /button >}}
```

#### Parameters

| Name                 | Value                                                         | Description                          |
| -------------------- | ------------------------------------------------------------- | ------------------------------------ |
| 0: `href` (Required) | URL                                                           | Page link                            |
| 1: `variant`         | `primary`, `secondary`, `info`, `success`, `warning`, `error` | Variant of button; Defaults to none  |
| 2: `size`            | `small`, `medium`, `large`                                    | Size of button; Defaults to `medium` |
| 3: `disabled`        | `disabled` or `true`                                          | Disable button; Defaults to none     |
| 4: `class`           | String                                                        | Additional class name                |

#### Notes

If `href` begins with "http", then the link will open in a new window.

#### Output

```html
<a class="button button--primary button--small button--disabled">
  Learn more
</a>
```

### collapse

If you want to collapse a block of content and show an expand button to reveal the full content, you can use the `collapse` shortcode.

```markdown
{{< collapse maxHeight="100" >}}
  Markdown
{{< /collapse >}}
```

#### Parameters

| Name           | Value  | Description                                                          |
| -------------- | ------ | -------------------------------------------------------------------- |
| 0: `maxHeight` | Number | The max-height of the content when it's collapsed; Defaults to 200px |

#### Output

```html
<div class="collapse">
  <input class="collapse__input" type="checkbox" id="collapse-00">
  <label class="collapse__label" for="collapse-00"></label>
  <div class="collapse__content">
    Markdown
  </div>
</div>
```

#### Caveats

The `collapse` shortcode doesn't reliably work when nested in a `tabpane` shortcode. The expand button may still be visible when it's not needed. This is because the CSS `display` property of the inactive `tabpane` panel is set to `none`, so the height of the content cannot be determined on page load.

### file-list

If you want to display a list of links as a file list, you can use the `file-list` shortcode.

```markdown
{{< file-list >}}
- [Page 1](page-1)
- [Page 2](page-2)
- [Page 3](page-3)
{{< /file-list >}}
```

#### Parameters

| Name         | Value  | Description                           |
| ------------ | ------ | ------------------------------------- |
| 0: `icon`    | String | Icon name, defaults to "file"         |
| 1: `variant` | String | Icon variant, defaults to "secondary" |

#### Notes

The shortcode inner content must be an unordered list of anchor links.

#### Output

```html
<ul class="file-list">
  <li>
    <a href="page-1"><svg class="icon">...</svg> Page 1</a>
  </li>
  <li>
    <a href="page-2"><svg class="icon">...</svg> Page 2</a>
  </li>
  <li>
    <a href="page-3"><svg class="icon">...</svg> Page 3</a>
  </li>
</ul>
```

### icon

If you want to add an icon to your content, you can use the `icon` shortcode.

```markdown
{{< icon name="alert" variant="primary" size="small" >}}
```

#### Parameters

| Name                 | Value                                                                    | Description                        |
| -------------------- | ------------------------------------------------------------------------ | ---------------------------------- |
| 0: `name` (Required) | String                                                                   | Icon name                          |
| 1: `variant`         | `primary`, `secondary`, `info`, `success`, `warning`, `error`, `current` | Variant of icon; Defaults to none  |
| 2: `size`            | `small`, `medium` `large`                                                | Size of icon; Defaults to `medium` |
| 3: `class`           | String                                                                   | Additional class name              |

#### Notes

The icon file must be an svg, located in the `/assets/icons/` directory.

#### Output

```html
<svg class="icon icon--primary icon--small">...</svg>
```

## ifparam

If you want to conditionally print some text based on a **boolean** parameter set in `frontmatter`, you can use the `ifparam` shortcode.

Let's say you have this parameter set in your `frontmatter`...

```yaml
---
some_param: true
---
```

In your Markdown, you can conditionally print some text based on this parameter.

```markdown
{{< ifparam "some_param" "enabled" "disabled" >}}
```

You can also leave the false value empty, and the shortcode will only print the text if the parameter is true.

### img

If you want to add an image in your content, but need to set additional attributes not supported by Markdown image syntax, or you want to apply a [Hugo .Process](https://gohugo.io/methods/resource/process/#process-specification) to the image, you can use the `img` shortcode. When using positional parameters, only `alt`, `src`, and `process` parameters are supported. To set additional attributes, set each attribute as a named parameter. 

#### Positional parameters

```markdown
{{< img "Alt text" "image.png" "resize 600x" >}}
```

#### Named parameters

```markdown
{{< img src="image.png" alt="Alt text" width="300" height="200" class="image" style="border: solid 1px red" process="fit 600x400" >}}
```

#### Parameters

| Name                | Value     | Description           |
| ------------------- | --------- | --------------------- |
| 0: `alt` (Required) | String    | Image alt             |
| 1: `src` (Required) | URL       | Image path            |
| 2: `process`        | String    | Process specification |

#### Notes

To use image processing, the image must be a page resource, not a global resource or a static image.

#### Output

```html
<img src="/image_xxx.png" alt="Alt text" width="300" height="200" class="image" style="border: solid 1px red">
```

### include

If you have HTML or Markdown that you would like to externally include in your content files, you can place the file under the current working directory. Then, you can use the `include` shortcode to pull in this file into your content.

```markdown
{{< include "includes/file.md" >}}
```

#### Notes

- You must use `{{< >}}` shortcode delimiters to render the included content correctly.
- All included files under the `content` directory must have `draft:true` set in their `frontmatter`.
- Only relative paths **under** the page including the file are supported. Relative paths traversing up the directory are **not** supported. For files outside the current working directory you can use an absolute path starting with `/`.
- When editing an **included** file in local development, the page **including** the file is not automatically updated. Restarting the server is required to see any changes.
- The headings of included files will **not** be displayed in Hugo's `TableOfContents`.

### labeled-highlight

Hugo automatically highlights content in code fences, and also provides a built-in [`highlight`](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode) shortcode.

However, Hugo does not provide an [option](https://gohugo.io/functions/transform/highlight/#options) to display a title or filename.

If you need to label the code block, you can use the `labeled-highlight` shortcode.

```markdown
{{< labeled-highlight label="users.json" lang="json" options="lineNos=true" >}}
{
  "name": "John",
  "age": 30
}
{{< /labeled-highlight >}}
```

You can also use a code fence as the content of the shortcode. The language and options of the code fence will be honored, and the `lang` and `options` parameters will be ignored.

````markdown
{{< labeled-highlight "users.yaml" >}}
```yaml
name: "John"
age: 30
```
{{< /labeled-highlight >}}
````

#### Parameters

| Name         | Value  | Description                                                 |
| ------------ | ------ | ----------------------------------------------------------- |
| 0: `label`   | String | The text to display above the code block                    |
| 1: `lang`    | String | The language of the code to highlight                       |
| 2: `options` | String | Additional options, formatted as "lineNos=table, style=api" |

#### Output

```html
<div class="labeled-highlight">
  <div class="labeled-highlight__label">
    <code>Label</code>
  </div>
  <div class="highlight">
    ...
  </div>
</div>
```

#### Alternate method

Rather than using a shortcode, an alternate solution is to add a title with Markdown attribute syntax to the code fence:

```
json {title="users.json",linenos=true}
```

Then add styles to display the title attribute:

```scss
.highlight[title] {
  &::before {
    content: attr(title);
    ...
  }
}
```

While this method avoids needing to use a shortcode, the shortcode allows for more control of the markup used to display the label.

### param

If you need to print a `frontmatter` parameter in your Markdown, you can use the `param` shortcode.

Let's say you have this param set in your `frontmatter`:

```yaml
---
title: Hugo shortcodes and render hooks
---
```

Then in your Markdown, you can print the value of this parameter:

```markdown
{{< param "title" >}}
```

You can also pass a second optional value that will only be returned if the parameter is empty.

```markdown
{{< param "param_name" "default value" >}}
```

### resource

If you want to include a [page resource](https://gohugo.io/content-management/page-resources/) in your Markdown, you can use the `resource` shortcode.

```markdown
{{< resource "image.svg" >}}
```

#### Raster images

If the resource is a raster image (webp, jpg, png, ...), then you can pass an optional [process specification](https://gohugo.io/methods/resource/process/#process-specification).

```markdown
{{< resource "image.webp" "fill 200x200 jpg q80 lanczos" >}}
```

#### JavaScript and stylesheets

If the resource is a JavaScript or stylesheet file, the file contents will be printed on the page as text. If you would like to link to the file as an external resource, then you can pass an optional "external" param.

```markdown
{{< resource "script.js" "external" >}}
```

**Output**

```html
<script src="script.js"></script>
```

#### Supported resource types

| Type                          | Description                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| application (json, yaml, ...) | Renders raw content of resource; to nest output in a codeblock, use `{{% %}}` shortcode delimiters |
| audio (mp3, ogg, ...)         | Renders `audio` tag referencing resource URL                                                       |
| video (mp4, ogg, ...)         | Renders `video` tag referencing resource URL                                                       |
| image (jpg, png, svg, ...)    | Renders `img` tag referencing resource URL                                                         |
| page (Markdown, HTML)         | Renders resource content as HTML                                                                   |
| javascript                    | Renders raw content or `script` tag referencing resource URL                                       |
| stylesheet                    | Renders raw content or `link` tag referencing resource URL                                         |
| text                          | Renders raw content of resource                                                                    |

### siteparam

If you need to print a site parameter in your Markdown, you can use the `siteparam` shortcode.

```markdown
{{< siteparam "param_name" >}}
```

You can also pass a second optional value that will only be returned if the site parameter is empty.

```markdown
{{< siteparam "param_name" "default value" >}}
```

You can also access the site parameter by chaining the identifiers

```markdown
{{< siteparam "a.b.c" >}}
```

### tabpane

If you want to add tabs to your content, you can use the `tabpane` shortcode.

```markdown
{{< tabpane >}}
{{< tab label="Tab 1" >}}
  Markdown
{{< /tab >}}
{{< tab label="Tab 2" selected="true" >}}
  Markdown
{{< /tab >}}
{{< tab label="Tab 3" >}}
  Markdown
{{< /tab >}}
{{< /tabpane >}}
```

#### `tab` Parameters

| Name          | Value   | Description                          |
| ------------- | ------- | ------------------------------------ |
| 0: `label`    | String  | The text displayed in the tab button |
| 1: `selected` | Boolean | Defaults to `false`                  |

#### Output

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

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
