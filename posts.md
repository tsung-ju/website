---
title: Posts
layout: page
---

Posts
=====

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})

{% endfor %}