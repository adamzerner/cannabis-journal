import { CodeBlock } from "rfui";

export default () => {
  return (
    <div>
      Hello world <CodeBlock language="tsx" code={`<div>hello world</div>`} />
    </div>
  );
};
