import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props: PropsType) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

//types

type PropsType = {
  children?: JSX.Element|JSX.Element[]
}
