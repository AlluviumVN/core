import React, { Component } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import ErrorBoundary from 'src/shared/error/error-boundary';
import { RouteChildrenProps, RouteProps } from 'react-router';

export const ErrorBoundaryRoute = ({ component: Component, ...rest }: RouteProps) =>{
  if (!Component) return null;
  const encloseInErrorBoundary = (props: any) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);

  return <Route {...rest} render={encloseInErrorBoundary} />;
};

export default ErrorBoundaryRoute;
