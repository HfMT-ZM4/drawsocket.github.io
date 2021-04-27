---
layout: page
title: Index
---

<style>
    .highlight pre:hover, code:hover {
        background-color: pink !important;
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
    
    const snippet = JSON.parse(snippet_txt.innerHTML);

    snippet_code.addEventListener("click", ()=> drawsocket.input(snippet) );

</script>