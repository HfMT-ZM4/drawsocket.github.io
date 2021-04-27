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
        "r" : 20,
        "fill" : "pink"
    }
}
```

{% include drawsocket-web.html %}

```
{
    "key" : "clear",
    "val" : "*"
}
```

<style>
    .highlight pre:hover {
        background-color: pink !important;
    }

    code {
         background-color: inherit;
    }

    .drawsocket-web {
        height: 400px;
        overflow: hidden;
    }
</style>


<script>

    const snippet_code_block = document.querySelectorAll(".highlight");
   
    snippet_code_block.forEach( b => {
        const snippet_code = b.querySelector("code");
        const snippet = JSON.parse(snippet_code.innerHTML);
        b.addEventListener("click", ()=> {
            drawsocket.input(snippet);
        });
    })

</script>