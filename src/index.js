import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TEST_VAL } from 'react-native-dotenv';

function HelloWorld() {
    return (
        <h1>Javascript works { TEST_VAL }.</h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

console.log('Javascript works');