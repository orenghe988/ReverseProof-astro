import { Text, Button } from "@mantine/core";
import { useCounter } from "@mantine/hooks";

export default function Counter(props: any) {
  const [count, handlers] = useCounter(props.default, {
    min: props.min,
    max: props.max,
  });
  return (
    <>
      <Text>{count}</Text>
      <Button onClick={handlers.increment}>+</Button>
      <Button onClick={handlers.decrement}>-</Button>
    </>
  );
}
