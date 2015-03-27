---
layout: default
content_type: md
title: News
---

<h1>News ({{ site.posts | size }} posts)</h1>
<ul class="posts">
  {% for post in site.posts %}
  <li>
    <span>{{ post.date | date: "%d-%m-%Y" }}</span>&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
