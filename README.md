# Convert Selection

This extension will surround one or more selections with cursors.  Demo:

<img src="https://github.com/ArturoDent/convert-selection/blob/master/images/surroundSelection.gif?raw=true" width="400" height="200" alt="surround selection with multiple cursors demo"/>  

It does not matter whether the selection is creates left-to-right or right-to-left. 
 
----------------

## Extension Command and Keybinding

This extension contributes the following command:

* `convert-selection.surround`: "Surround selection(s) with multi-cursors"

The default keybinding (which can be changed) is:

```jsonc
{
  "command": "convert-selection.surround",
  "key": "alt+s",
  "mac": "alt+s",
  "when": "editorHasSelection"    // only works if there is at least one selection
}
```
-------------

## Release Notes

* 0.0.1 Initial release

