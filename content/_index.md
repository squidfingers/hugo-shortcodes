---
title: Hugo shortcodes
has_title: true
---

## alert

{{< alert >}}
  **Info:** This is an info alert
{{< /alert >}}

{{< alert severity="warning" size="small" >}}
  **Warning:** This is a small warning alert
{{< /alert >}}

## button

{{< button "https://github.com/" "primary" "small" >}}
  Primary
{{< /button >}}

{{< button href="https://github.com/" variant="secondary" >}}
  Secondary
{{< /button >}}

{{< button href="https://github.com/" variant="primary" size="large" disabled="true" >}}
  Disabled
{{< /button >}}

## figure

{{< figure "/images/placeholder.svg" "Alt text" "Caption of image" >}}

## icon

{{< icon "alert" "small" >}}

{{< icon "alert" >}}

{{< icon name="alert" size="large" >}}

## ifparam

The `title` param {{< ifparam "has_title" "is" "is not" >}} set

## img

{{< img src="/images/placeholder.svg" alt="Alt text" width="300" height="200" class="image" style="border: solid 1px red" >}}

## include

{{< include "includes/file.md" >}}

## param

The page title is "{{< param "title" >}}"

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
