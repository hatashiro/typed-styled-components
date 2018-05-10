# typed-styled-components

TypeScript + styled-components in a simple way

## Why another?

There is already [styled-components-ts](https://github.com/jacob-ebey/styled-components-ts)
for using styled-components with TypeScript. The difference is just how prop
types are specified, so the choice is yours.

```typescript
// styled-components-ts
styledComponentsTS<Props>(styled.h1)

// typed-styled-components
tStyled<Props>().h1
```

To be honest, both of us becomes obsolte when TypeScript 2.9 is out, as it
will support generic tagged templates. Please enjoy this library before the
future!

- https://github.com/Microsoft/TypeScript/pull/23430

## Usage

```typescript
import tStyled from "typed-styled-components";

const Header = tStyled<{ mood?: string }>().h1`
  color: ${props => props.mood.includes("blue") ? "blue" : "black"}
`;

render() {
  return (
    <Header mood="I'm feeling blue">hello</Header>
  );
}
```

## Install

```shell
npm i --save typed-styled-components
```

## API

```typescript
import tStyled, { TypedStyledInterface } from "typed-styled-components";
```

typed-styled-components also exports all the named exports from
styled-components too.

```typescript
import { StyledInterface } from "typed-styled-components";
```

### `tStyled()`

It's a helper function similar to `styled` in styled-components, but with
an ability to define an additional prop type.

```typescript
function tStyled<P, O = P>(): TypedStyledInterface<P, O>
```

### `type TypedStyledInterface<P, O>`

A type returned by `tStyled()`.

```typescript
type TypedStyledInterface<P, O> = {
  [K in keyof StyledInterface]: StyledInterface[K] extends ThemedStyledFunction<
    infer P0,
    infer T0,
    infer O0
  >
    ? ThemedStyledFunction<P & P0, T0, O & O0>
    : StyledInterface[K]
};
```

## License

[MIT](LICENSE)
