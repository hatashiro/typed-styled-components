import orig, { StyledInterface as SI, ThemedStyledFunction as TSF } from "styled-components";

export type TypedStyledInterface<P, O> = {
  [K in keyof SI]: SI[K] extends TSF<infer P0, infer T0, infer O0> ? TSF<P & P0, T0, O & O0> : SI[K]
} & SI;

function styled<P = {}, O = P>(): TypedStyledInterface<P, O> {
  return orig as any;
}

export default styled;

// export everything from styled-components
export * from "styled-components";
