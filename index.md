---
layout: page
title: Index
---



```
drawsocket.input({
    key: "svg",
    val: {
        new: "circle",
        cx: 100,
        cy: 100,
        r: 40,
        fill: blue
    }
})
```{: class="drawsocket_code" }


{% include drawsocket-web.html %}


<script>
    const snippet = document.querySelector(".drasocket_code");
    console.log(snippet.innerHTML);
</script>