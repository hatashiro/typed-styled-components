# typed-styled-components

TypeScript + styled-components in a simple way

## Do not use this!

You neither need [styled-components-ts](https://github.com/jacob-ebey/styled-components-ts),
because TypeScript 2.9 has been released and it adds support for type
variables with template literals! It means you can achieve the same thing
with plain styled-compoonents.

```typescript
const MyH1 = styled.h1<{ customProp: string }>`
  color: ${prop => prop.customProp}
`;
```

Please look into the following links for the detail.

- Announcing TypeScript 2.9: [Type arguments for tagged template strings](https://blogs.msdn.microsoft.com/typescript/2018/05/31/announcing-typescript-2-9/#type-arguments-tagged-template-strings)
- A pull request in styled-components: [styled-components/pull/#1777](https://github.com/styled-components/styled-components/pull/1777)

---

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
