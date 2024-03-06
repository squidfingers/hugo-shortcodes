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

## figure

{{< figure "/images/placeholder.svg" "Alt text" "Image caption" >}}

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
