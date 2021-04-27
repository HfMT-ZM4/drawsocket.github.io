---
layout: page
title: Index
---



```
{
    "key" : "svg",
    "val" : {
        "new" : "circle",
        "cx" : 100,
        "cy" : 100,
        "r" : 40,
        "fill" : blue
    }
}
```


{% include drawsocket-web.html %}


<script>
    const snippet = document.querySelector("code");
    console.log(JSON.parse(snippet.innerHTML));
</script>