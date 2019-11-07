import { lazy } from "react";

const ForkEvent = lazy(() => import(`./ForkEvent`));
const NullEvent = lazy(() => import(`./NullEvent`));
const PushEvent = lazy(() => import(`./PushEvent`));
const WatchEvent = lazy(() => import(`./WatchEvent`));

export { ForkEvent, NullEvent, PushEvent, WatchEvent };
