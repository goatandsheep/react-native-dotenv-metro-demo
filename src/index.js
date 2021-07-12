import * as React from 'react';
import * as ReactDOM from 'react-dom';

function HelloWorld() {
    return (
        <h1>Javascript works</h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

console.log('Javascript works');