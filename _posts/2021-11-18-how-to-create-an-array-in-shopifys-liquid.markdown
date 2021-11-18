---
layout: post
title: "How to create an array in Shopify\'s Liquid"
tags: shopify liquid
comments: true
---

### The problem

If you're stepping in to Shopify theme development with previous experience in programming languages such asUnfortunas PHP and Javascripts, you may be surprised to learn it isn't possible to create arrays in Liquid using a syntax you're already familiar with.

### This won't work:
{% highlight liquid %}
{% raw %}
{% assign animals = ["cow", "sheep", "chicken"] %}
{% endraw %}
{% endhighlight %}

### Then how do we do it?
We can't create multidimensional arrays or new objects in Liquid but it's very simple to create a one-dimensional array, all we need to do is use Liquid's "split" filter on a delimited string. The delimiter can be any character and/or any number of characters. For the purposes of this example I'll use a single comma.
{% highlight liquid %}
{% raw %}
{% assign animals = "cow,sheep,chicken" | split: "," %}
{% endraw %}
{% endhighlight %}

Once we have our array we can loop through it and output each item.
{% highlight liquid %}
{% raw %}
{% for animal in animals %}
  {{ animal }}
{% endfor %}
{% endraw %}
{% endhighlight %}

Doing this, we can add the items to a list or insert them into any other HTML we need:
{% highlight liquid %}
{% raw %}
<ul class="animals">
{% for animal in animals %}
  <li class="animal {{ animal }}">{{ animal }}</li>
{% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

The HTML this produces:
{% highlight html %}
{% assign animals = "cow,sheep,chicken" | split: "," %}
<ul class="animals">
{% for animal in animals %}  <li class="animal animal-{{ animal }}">{{ animal }}</li>
{% endfor %}</ul>
{% endhighlight %}

The final result:
<ul class="animals">
{% for animal in animals %}  <li class="animal animal-{{ animal }}">{{ animal }}</li>
{% endfor %}</ul>

### Practical use case
Let's say we have a contact form and we want the customer to select a "Subject" from a select element rather than entering a subject themselves. We hae a number of options:

1. Hard code the options into the form 
2. Hard code the delimited string and split it into an array to loop through in the form
3. Store delimited options in a theme translation in Shopify
4. Store delimited options in a section, block or theme setting
5. Store delimeted options in a text metafield

Options 1 and 2 will work just fine but the store manager will need knowledge of HTML and possibly Liquid / Shopify theme development to be able to update the options. 

Options 3, 4 and 5 all enable the store manager to manage the options themselves.

If we use a theme translation, we'll need the code below to display the options in an HTML select box. The translation key is just an example:
{% highlight liquid %}
{% raw %}
{% assign subjects = "pages.contact.subjects" | t | split: "," %}
<select name="contact[subject]">
  <option disabled selected>Subject</option>
  {% for subject in subjects %}
    <option value="{{ subject }}">{{ subject }}</option>
  {% endfor %}
</select>
{% endraw %}
{% endhighlight %}

Have an interesting use case? Let me know by commenting below.