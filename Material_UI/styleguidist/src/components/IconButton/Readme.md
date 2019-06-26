Button with Icon button:

```jsx
<IconButton icon="input">LOGIN</IconButton>
```

This **`Button with Icon`** is based on [Mui Button](https://material-ui.com/api/button/) and [Icon](https://material-ui.com/api/icon/). All `props` for `Mui Button` and `Icon` are applicable here.

_Primary button_:

```jsx
<IconButton color="primary">LOGIN</IconButton>
```

_Secondary button_:

```jsx
<IconButton color="secondary" icon="cancel_presentation">
  Cancel
</IconButton>
```

You can add `onClick` method of your choice as a prop:

```jsx
const [count, setCount] = React.useState(5);
<IconButton icon="add" onClick={() => setCount(count + 1)}>
  {count}
</IconButton>;
```
