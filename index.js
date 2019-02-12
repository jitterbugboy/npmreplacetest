import React from 'react';
import lessStyles from './styles.jsx.less';

class SomeModule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>this is all i do - now change my styles</h1>
      <style jsx>{lessStyles}</style>
    </div>);
  }
}

export default SomeModule;
