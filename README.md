# typed-styled-components

TypeScript + styled-components in a simple way

## Why another?

There is already [styled-components-ts](https://github.com/jacob-ebey/styled-components-ts)
for using styled-components with TypeScript. The difference is just how prop
types are specified, so the choice is yours. One major difference is that
typed-styled-components has styled-components as its dependency and exports
everything from it, so that you don't need to install both.

```typescript
// styled-components-ts
styledComponentsTS<Props>(styled.h1)

// typed-styled-components
styled<Props>().h1
```

To be honest, both of us becomes obsolte when TypeScript 2.9 is out, as it
will support generic tagged templates. Please enjoy this library before the
future!

- https://github.com/Microsoft/TypeScript/pull/23430

## Quick usage

```typescript
import styled from "typed-styled-components";

const Header = styled<{ mood?: string }>().h1`
  color: ${props => props.mood.includes("blue") ? "blue" : "black"}
`;

render() {
  return (
    <Header mood="I'm feeling blue">hello</Header>
  );
}
```

`styled()` from typed-styled-components is just the original `styled` from
styled-components, only typed. Thus you can use it just like how `styled`
works.

```typescript
// beware that it should be styled() instead of styled
const StyledLink = styled()(Link)`
  color: palevioletred;
  font-weight: bold;
`;
```

## Install

```shell
npm i --save typed-styled-components
```

## API

```typescript
import styled from "typed-styled-components";
```

typed-styled-components also exports all the named exports from
styled-components too, so it needn't be installed.

```typescript
import { StyledInterface } from "typed-styled-components";
```

### `styled<Props>()`

It's a helper function similar to `styled` in styled-components, but with
an ability to define an additional prop type.

Example:

```typescript
const Text = styled<{ foo: string }>().h1`
  color: ${props => f(props.foo)}
`;
```

## License

[MIT](LICENSE)
