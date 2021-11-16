---
layout: post
---

Finding overflowing elements while building the frontend of your website or app can be an absolute nightmare but there is a little trick you can do to help yourself out. While viewing a page containing the offending elements, open the browser's developer tools and paste the below javascript snippet into the console to list out all the overflowing elements.

{% highlight javascript %}
document.querySelectorAll('\*').forEach(el => {
  if (el.offsetWidth > document.documentElement.offsetWidth) {
    console.log('Overflowing element: ', el);
  }
});
{% endhighlight%}


