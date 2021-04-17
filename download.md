---
layout: default
title: download
---

# Download

[download](https://github.com/HfMT-ZM4/drawsocket)

Requires Max version >= 8.1.0, and is designed for use with [CNMAT's Odot library](https://github.com/CNMAT/CNMAT-odot/releases) and [MaxScore](http://www.computermusicnotation.com/?page_id=22).

The `hfmt.drawsocket` abstraction is a wrapper around the Node For Max's `node.script` object, and relies on a set of scripts found in the package's `code` folder. Once the package is installed in the Packages folder, the main server and client scripts will be automatically handled by the abstraction.

To install:
1. Place the `hfmt-drawsocket` repository in the `/Documents/Max 8/Packages` folder.
2. When running the `hfmt.drawsocket` server for the first time: click on the `script npm install` message to download the required packages and libraries (note that you will need to be connected to the internet for the download to work).

## Basic Usage

See the `hfmt.drawsocket.maxhelp` file for examples.

1. Start the server by sending the `script start` message.
2. On successful startup, an IP address and port number will be printed to the Max console, and the same information will be sent out of the right-most outlet of the abstraction.
3. Open a browser and type in the IP address and port specified in the Max patch, followed by a URL of your choosing. This address will be how you address the client browser from the Max server patch. 
    * For example, if the IP:Port is `192.168.1.1:3002`, and you wanted to use the address `/foo` for your OSC style messaging to the browser, you could type the following address into your browser: `192.168.1.1:3002/foo`. Note that if you are testing on the same computer, you can also use `localhost` instead of the IP address.

For usage with [MaxScore](http://www.computermusicnotation.com/?page_id=22), please see `Drawsocket` folder in the Max Extras menu, example number 8, `render2browser.maxscore`.


## Use in production

Note: Drawsocket has been used in large scale production, but as with all technology, **the system must be tested before use in prodution**. Users are advised to thoroughly test your production network and display devices before any live performance.