---
layout: api
---

some introductory text here

## Assets
{: class="api_key"}

If you wish to serve file assets to your client browsers (e.g. images, pdfs, sound files, html files, etc.), the files must be in a known folder to the server, commonly referred to as a root "public" folder. The public folder path is set relative to the location of the Max patch containing the `drawsocket` abstraction, and therefore you need to save your patch before any assets can be found (so that the patch has a folder location).

By default, the public folder is set to be the same folder that contains the Max patch. 
```
    someFolder
    |-- yourPatch.maxpatch
    |-- image.png
    |-- score.pdf

```

Alternatively, to keep the folders a little neater, the `drawsocket` abstraction can be initialized with an argument of the folder path relative to the Max patch location. For example, if you initialize `drawsocket` with the relative path `public`, it will expect the folder `public` to be at the same folder level:
```
    someFolder
    |-- yourPatch.maxpatch
    |-- public
        |-- image.png
        |-- score.pdf

```

# Default HTML and CSS files
{: class="api_key"}


By default the `drawsocket` server responds to all URL requests with the template HTML page, `drawsocket-page.html` which loads the required Javascript files, sets up the basic HTML objects, layers, and imports the `drawsocket-default.css` which sets up some default display properties.

If desired, a different template HTML page may be used by sending the `drawsocket` object the `html_template` message followed by a relative path to the template HTML file to use.

# Message Format
{: class="api_key"}

All messages in the `drawsocket` API are formatted as an object, enclosed by curly braces `{ }`. Messages can be encoded as Odot nested sub-bundles, or nested JSON objects. In the examples below we will be using OSC (odot) formatting, however you may also use a Max Dictionary, which will be exactly the same, except that address names will not have the leading `/` character.

Odot:
```
/bundle : {
    /subbundle : {
        /foo : 1
    }
}
```
Max Dictionary (JSON):
```
"bundle" : {
    "subbundle" : {
        "foo" : 1
    }
}
```

## Addressing the Client Browser
{: class="api_key"}

The URL used by the client to log into the server IP address and port is used by the Max patch as an OSC address to route messages to all clients logged into a given URL. For example, any users logged into the example above, `192.168.1.1:3002/foo`, will receive OSC messages with the address `/foo`.

## `key` and `val`
{: class="api_key"}

Messages to the client are formatted as objects with `key` and `val` addresses
* The `key` value is a switch key which tells the client how it should interpret the messages in the `val` field. For example, valid `key` values include `svg`, `html`, `tween`, and so on. See below for more details on these options.
* The `val` value, stores one or more objects to be handled by the client. 
 
For example, with a `svg` key, the `val` object might create a new SVG object. In this example, we ask all clients logged into `/foo` to create a new SVG `rect`, using the drawsocket-SVG `new` keyword:

``` 
/foo : {
    /key : "svg",
    /val : {
        /new : "rect",
        /id : "rectangular",
        /x : 100,
        /y : 100,
        /width : 25,
        /height : 25
    }
}
```

The wildcard `*` will match all URL clients, so for example if you replace `/foo` above with the address `/*` the above example would be sent to all clients.

## Unique ID Reference
{: class="api_key"}

Each drawn object needs to have a unique name to identify the object. The name can be any combination of numbers and letters, but needs to be unique. This id can be used to identify the object in situations where you want to change the color, position or other attributes.

For example, in the above example, we we set the `id` to be the name "rectangular". If we have already created the object (in this case using the drawsocket-SVG `new` keyword), we can alter attributes of the rectangle, by referring to the `id`. Here we change the width of the rectangle:

``` 
/foo : {
    /key : "svg",
    /val : {
        /id : "rectangular",
        /width : 50
    }
}
```
