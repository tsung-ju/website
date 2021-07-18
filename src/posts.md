---
title: Posts
layout: page
---

Posts
=====

{% for post in collections.posts | reverse %}
[{{ post.data.title }}]({{ post.url }})

{% endfor %}