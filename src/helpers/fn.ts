export type Fn<A, B> = (a: A) => B

export type Brand<T, Tag> = T & { __brand: Tag }
