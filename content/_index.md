---
title: Hugo shortcodes and render hooks
has_title: true
---

# Render hooks

## Blockquotes

> Quote

> Most human beings have an almost infinite capacity for taking things for granted.
{author="Aldous Huxley" cite="https://www.huxley.net/bnw/" caption="Brave New World"}

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

## Code blocks

```bash
declare a=1
echo "$a"
exit
```

## Images

### Inline

This is an inline ![Alt text](image.png "Image title") image.

### Block

![Alt text](image.png "Image caption")

## Links

This is a [link](/).

This is an [external link](https://github.com/).

## Tables

| Month    | Amount |
| :------- | -----: |
| January  | $10    |
| February | $100   |
| March    | $1000  |

# Shortcodes

## accordion

{{< accordion name="my-accordion" >}}
  {{< details summary="**Accordion 1**" open="true" >}}
    Lorem ipsum dolor sit amet.
  {{< /details >}}
  {{< details summary="**Accordion 2**" >}}
    Lorem ipsum dolor sit amet.
  {{< /details >}}
{{< /accordion >}}

## alert

{{< alert "success" >}}
  **Success:** This is a success alert.
{{< /alert >}}

{{< alert severity="warning" size="small" >}}
  **Warning:** This is a small warning alert.
{{< /alert >}}

{{< alert hideIcon="true" >}}
  This alert doesn't have an icon.
{{< /alert >}}

## blockquote

{{< blockquote author="Aldous Huxley" cite="https://www.huxley.net/bnw/" caption="Brave New World" >}}
  Most human beings have an almost infinite capacity for taking things for granted.
{{< /blockquote >}}

## button

{{< button "https://github.com/" >}}
  Button
{{< /button >}}

{{< button "https://github.com/" "primary" "small" >}}
  Primary Small
{{< /button >}}

{{< button "https://github.com/" "primary" >}}
  Primary
{{< /button >}}

{{< button "https://github.com/" "primary" "large" >}}
  Primary Large
{{< /button >}}

{{< button href="https://github.com/" variant="secondary" >}}
  Secondary
{{< /button >}}

{{< button href="https://github.com/" variant="error" disabled="true" >}}
  Disabled
{{< /button >}}

## collapse

{{< collapse "80" >}}
  ```
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  ```
{{< /collapse >}}

{{< collapse "120" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.

{{< /collapse >}}

## details

{{< details summary="Summary" name="my-details" title="My Details" >}}
  Lorem ipsum dolor sit amet.
{{< /details >}}

## file-list

{{< file-list >}}
- [Page 1](#page-1)
- [Page 2](#page-2)
- [Page 3](#page-3)
{{< /file-list >}}

## icon

{{< icon "alert" "primary" "small" >}}

{{< icon "alert" "secondary" >}}

{{< icon name="alert" variant="warning" size="large" >}}

## ifparam

The `title` param {{< ifparam "has_title" "is" "is not" >}} set

## img

{{< img "Alt text" "image.png" "resize 300x200 jpg q80 lanczos" >}}

{{< img src="image.png" alt="Alt text" width="300" height="200" class="image" style="border: solid 1px red" process="resize 300x200 jpg q80 lanczos" >}}

## include

{{< include "_includes/file.md" >}}

## labeled-highlight

{{< labeled-highlight label="users.json" lang="json" options="lineNos=true" >}}
[
  {
    "name": "John",
    "age": 30
  }
]
{{< /labeled-highlight >}}

{{< labeled-highlight "users.yaml" >}}
```yaml {lineNos=true}
- name: John
  age: 30
```
{{< /labeled-highlight >}}

## param

The page title is "{{< param "title" >}}"

The page description is {{< param "description" "not set" >}}

## resource

{{< resource "image.png" "resize 300x200 jpg q80 lanczos" >}}

```javascript {lineNos=false}
{{% resource "script.js" %}}
```

## siteparam

{{< siteparam "some_param" >}}

## tabpane

{{< tabpane >}}
  {{< tab "Tab 1" >}}
    This is content for **tab 1**
  {{< /tab >}}
  {{< tab "Tab 2" "selected" >}}
    This is content for **tab 2**
  {{< /tab >}}
  {{< tab "Tab 3" >}}
    This is content for **tab 3**
  {{< /tab >}}
{{< /tabpane >}}
