---
layout: page
title: Index
---

<style>
    .highlight pre:hover {
        background-color: pink !important;
    }

    code {
         background-color: inherit;
    }
</style>

```
{
    "key" : "svg",
    "val" : {
        "new" : "circle",
        "cx" : 100,
        "cy" : 100,
        "r" : 40,
        "fill" : "blue"
    }
}
```


{% include drawsocket-web.html %}


<script>
    const snippet_code = document.querySelector("code");
    
    const snippet = JSON.parse(snippet_code.innerHTML);

    snippet_code.addEventListener("click", ()=> {
        console.log("clicked and sending:", snippet);
        drawsocket.input(snippet);
    });

</script>