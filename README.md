# Hugo shortcodes

This collection of Hugo shortcodes is not meant to be an exhaustive list of components you might need in your Markdown content, rather it's a few examples that illustrate various techinques that will help you build out your own shortcodes. These techinques include: validating parameters ([button](#button)), using a partial within the shortcode so layout and content can use the component ([icon](#icon)), using conditional content ([ifparam](#ifparam)), and passing parameters from a child shortcode to the parent for rendering ([tabpane](#tabpane)).

- [alert](#alert)
- [blockquote](#blockquote)
- [button](#button)
- [collapse](#collapse)
- [figure](#figure)
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

To see the output of these shortcodes, run:

```bash
hugo server
```

Then visit http://localhost:1313 in your browser.

Requires Hugo v0.121.2 or later.

## alert

If you want to add an alert banner to your content, you can use the `alert` shortcode.

```markdown
{{< alert severity="warning" size="small" >}}
  Markdown
{{< /alert >}}
```

#### Parameters

| Name          | Value                                           | Description                     |
| ------------- | ----------------------------------------------- | ------------------------------- |
| 0: `severity` | `info` (default), `success`, `warning`, `error` | Variant of alert                |
| 1: `size`     | `small`                                         | Size of alert; Defaults to none |
| 2: `hideIcon` | `true`                                          | Hides icon; Default to false    |

#### Output

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

## blockquote

If you want to add a blockquote to your content, you can use the `blockquote` shortcode.

```markdown
{{< blockquote author="Author" cite="Source" url="https://www.huxley.net/" >}}
  Markdown
{{< /blockquote >}}
```

#### Parameters

| Name        | Value  | Description |
| ----------- | ------ | ----------- |
| 0: `author` | String | Author name |
| 1: `cite`   | String | Source name |
| 2: `url`    | URL    | Source URL  |

#### Output

```html
<blockquote cite="https://www.huxley.net/bnw/">
  <p>
    Markdown
  </p>
  <footer>
    —Author, <cite><a href="https://www.huxley.net/bnw/">Source</a></cite>
  </footer>
</blockquote>
```

## button

If you want to add a button to your content, you can use the `button` shortcode.

```markdown
{{< button href="https://github.com/" variant="primary" size="small" disabled="true" >}}
  Markdown
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
  Markdown
</a>
```

## collapse

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

## figure

If you want to add an image with a caption to your content, you can use the `figure` shortcode.

```markdown
{{< figure src="/path/to/image.jpg" alt="Alt text" title="Image caption" >}}
```

#### Parameters

| Name                | Value    | Description                        |
| ------------------- | -------- | ---------------------------------- |
| 0: `src` (Required) | URL      | Image filepath                     |
| 1: `alt`            | String   | Image alt                          |
| 2: `title`          | Markdown | Caption to display under the image |

#### Output

```html
<figure>
  <img src="/path/to/image.jpg" alt="Alt text">
  <figcaption>Image caption</figcaption>
</figure>
```

## file-list

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

## icon

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

## img

If you want to add an image in your content, but need to set additional attributes not supported by Markdown image syntax, you can use the `img` shortcode.

```markdown
{{< img src="/path/to/image.jpg" alt="Alt text" width="600" height="400" class="image" style="border: solid 1px red" >}}
```

#### Parameters

| Name                | Value     | Description       |
| ------------------- | --------- | ----------------- |
| 0: `src` (Required) | URL       | Image path        |
| 1: `alt`            | String    | Image alt         |
| 2: `width`          | Number    | Image width       |
| 3: `height`         | Number    | Image height      |
| 4: `class`          | String    | CSS class name    |
| 5: `style`          | CSS rules | Inline CSS styles |

#### Output

```html
<img src="/path/to/image.jpg" alt="Alt text" width="600" height="400" class="image" style="border: solid 1px red">
```

## include

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

## labeled-highlight

Hugo automatically highlights content in code fences, and also provides a built-in [`highlight` shortcode](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode).

However, Hugo does not provide an [option](https://gohugo.io/functions/transform/highlight/#options) to display a title or filename.

If you need to label the code block, you can use the `labeled-highlight` shortcode.

```
{{< labeled-highlight label="users.json" lang="json" options="lineNos=true" >}}
{
  "name": "John",
  "age": 30
}
{{< /labeled-highlight >}}
```

#### Parameters

| Name         | Value  | Description                                                 |
| ------------ | ------ | ----------------------------------------------------------- |
| 0: `label`   | String | Teh text to display above the code block                    |
| 1: `lang`    | String | The language of the code to highlight                       |
| 2: `options` | String | Additional options, formatted as "lineNos=table, style=api" |

#### Output

```html
<div class="highlight__label">
  <code>Label</code>
</div>
<div class="highlight">
  ...
</div>
```

## param

If you need to print a `frontmatter` parameter in your Markdown, you can use the `param` shortcode.

Let's say you have this param set in your `frontmatter`:

```yaml
---
title: Hugo shortcodes
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

## resource

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
| image (jpg, png, svg, ...)    | Renders `figure` with `img` tag referencing resource URL                                           |
| page (Markdown, HTML)         | Renders resource content as HTML                                                                   |
| javascript                    | Renders raw content or `script` tag referencing resource URL                                       |
| stylesheet                    | Renders raw content or `link` tag referencing resource URL                                         |
| text                          | Renders raw content of resource                                                                    |

## siteparam

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

## tabpane

If you want to add tabs to your content, you can use the `tabpane` shortcode.

```markdown
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

#### Notes

On page load, the first tab will be active. At this time, there is not a parameter to set which tab is active by default.

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
