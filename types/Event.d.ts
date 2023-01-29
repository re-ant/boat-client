import { ComponentProps, DOMAttributes } from "react";

type EventHanders<T> = Omit<
  DOMAttributes<T>,
  "children" | "dangerouslySetInnerHTML"
>;

type EventType<
  TElement extends keyof JSX.IntrinsicElements,
  TEventHandler extends keyof EventHanders<TElement>,
> = ComponentProps<TElement>[TEventHandler];

export default EventType;
