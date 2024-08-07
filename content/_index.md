---
title: Hugo shortcodes
has_title: true
---

## alert

{{< alert "success" >}}
  **Success:** This is a success alert
{{< /alert >}}

{{< alert severity="warning" size="small" >}}
  **Warning:** This is a small warning alert
{{< /alert >}}

{{< alert hideIcon="true" >}}
  This alert doesn't have an icon
{{< /alert >}}

## blockquote

{{< blockquote author="Aldous Huxley" cite="Brave New World" url="https://www.huxley.net/bnw/" >}}
  Most human beings have an almost infinite capacity for taking things for granted.
{{< /blockquote >}}

## button

{{< button "https://github.com/" >}}
  Button
{{< /button >}}

{{< button "https://github.com/" "primary" "small" >}}
  Primary
{{< /button >}}

{{< button href="https://github.com/" variant="secondary" >}}
  Secondary
{{< /button >}}

{{< button href="https://github.com/" variant="error" size="large" disabled="true" >}}
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

## figure

{{< figure "/images/placeholder.svg" "Alt text" "Image caption" >}}

## file list

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

{{< img src="/images/placeholder.svg" alt="Alt text" width="300" height="200" class="image" style="border: solid 1px red" >}}

## include

{{< include "includes/file.md" >}}

## labeled-highlight

{{< labeled-highlight lang="json" label="users.json" options="lineNos=true" >}}
{
  "name": "John",
  "age": 30
}
{{< /labeled-highlight >}}

## param

The page title is "{{< param "title" >}}"

The page description is {{< param "description" "not set" >}}

## siteparam

{{< siteparam "some_param" >}}

## tabpane

{{< tabpane >}}
{{< tab name="Tab 1" >}}
  This is content for **tab 1**
{{< /tab >}}
{{< tab name="Tab 2" >}}
  This is content for **tab 2**
{{< /tab >}}
{{< tab name="Tab 3" >}}
  This is content for **tab 3**
{{< /tab >}}
{{< /tabpane >}}
