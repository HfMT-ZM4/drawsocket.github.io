---
layout: page
title: Index
---

```
{
    "key" : "svg",
    "val" : {
        "new" : "circle",
        "id" : "foo",
        "cx" : 100,
        "cy" : 100,
        "r" : 40,
        "fill" : "blue"
    }
}
```

{% include drawsocket-web.html %}

<style>
    .highlight pre:hover {
        background-color: pink !important;
    }

    code {
         background-color: inherit;
    }

    .drawsocket-web {
        height: 400px;
    }
</style>


<script>
    const snippet_code_block = document.querySelector(".highlight");
   
    const snippet_code = snippet_code_block.querySelector("code");

    const snippet = JSON.parse(snippet_code.innerHTML);

    snippet_code_block.addEventListener("click", ()=> {
        console.log("clicked and sending:", snippet);
        drawsocket.input(snippet);
    });

</script>