

# requirsafe

require.js hook that makes require works if file exist even if the file created at runtime.



## Installation


In a browser:

    <script src="requirsafe.js"></script>

Using npm:

    $ npm i requirsafe

Note: add --save if you are using npm < 5.0.0

## usage

In js:
***Load the hook before any other require.***

    require('requirsafe');
    ... existing code ...
