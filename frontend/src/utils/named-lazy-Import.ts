import * as React from 'react';

const namedLazyImport = <
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I,
>(
  factory: () => Promise<I>,
  name: K,
): I => {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then((module) => ({ default: module[name] })),
    ),
  });
};

export default namedLazyImport;

// Usage
// const { Home } = lazyImport(() => import('./Home.component.tsx'), 'Home');
