# mofron-comp-link
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

link text component for mofron

jump to url when text clicked.


# Install
```
npm install mofron mofron-comp-linktxt
```

# Sample
```html
<setting>
    <tag load="mofron-comp-linktxt">Link</tag>
</setting>

<Link url="https://mofron.github.io/mofron/">Link Text</Link>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | url | string | link url |
| | | boolean | true: jump to url on new tab |
| | | | false: jump to url on current tab |

