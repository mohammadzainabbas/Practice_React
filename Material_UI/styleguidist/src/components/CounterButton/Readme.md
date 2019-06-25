```js
import NormalButton from "../NormalButton";
let ref;
<div>
  <CounterButton ref={r => (ref = r)} />
  <NormalButton size="small" onClick={() => ref.set(0)}>
    Reset
  </NormalButton>
</div>;
```
