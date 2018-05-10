import { StyledInterface as SI, ThemedStyledFunction as TSF } from "styled-components";
export declare type TypedStyledInterface<P, O> = {
    [K in keyof SI]: SI[K] extends TSF<infer P0, infer T0, infer O0> ? TSF<P & P0, T0, O & O0> : SI[K];
} & SI;
declare function styled<P = {}, O = P>(): TypedStyledInterface<P, O>;
export default styled;
export * from "styled-components";
