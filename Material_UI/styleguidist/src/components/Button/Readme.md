This **`Button`** is based on [Mui Button](https://material-ui.com/api/button/). All `props` for `Mui Button` are applicable here.

_Primary button_:

```jsx
<Button color="primary">LOGIN</Button>
```

_Secondary button_:

```jsx
<Button color="secondary">Cancel</Button>
```

You can add `onClick` method of your choice as a prop:

```jsx
const [count, setCount] = React.useState(5);
<Button onClick={() => setCount(count + 1)}>{count}</Button>;
```
