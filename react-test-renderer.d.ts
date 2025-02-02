declare module 'react-test-renderer' {
    import * as React from 'react';
  
    export interface TestRendererOptions {
      createNodeMock?: (element: React.ReactElement) => any;
    }
  
    export interface ReactTestRendererJSON {
      type: string;
      props: { [propName: string]: any };
      children: null | ReactTestRendererNode[];
    }
  
    export type ReactTestRendererNode = ReactTestRendererJSON | string;
  
    export interface ReactTestInstance {
      // Métodos comunes para acceder a nodos e instancias
      find(predicate: (node: ReactTestInstance) => boolean): ReactTestInstance;
      findByType(type: React.ElementType): ReactTestInstance;
      findByProps(props: { [key: string]: any }): ReactTestInstance;
    }
  
    export function create(
      element: React.ReactElement,
      options?: TestRendererOptions
    ): ReactTestInstance;
  }
  