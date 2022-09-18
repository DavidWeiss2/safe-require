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
**_Load the hook before any other require._**

    require('requirsafe');
    ... existing code ...

## Credits

[@Zoltan Kochan](https://github.com/zkochan), [@Gilad Shoham](https://github.com/GiladShoham) and, [@David First](https://github.com/davidfirst) from [@bit](https://github.com/teambit/bit) and to myself - [@David Weiss](https://github.com/DavidWeiss2)
