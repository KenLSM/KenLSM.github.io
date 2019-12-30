---
title: Second Week
date: "2019-12-23T00:00:00.000Z"
description: Weekly - towards the new year
---

## TWIL

I always chance upon things that are interesting, but never consistently note them down for reference when I'm free.

- [x] Google search console
      Didn't know that there's a search console, which is similar to analytics console
- [ ] google's scrapping page preview site
      I vaguely recalled that there's google site that provided an interface to view how google's crawler view your site. Might be education in terms of how your website is displayed on the web
- [X] [shadow Dom: open/closed](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af)
      shadow Dom, prevents selectors from selecting them. I suppose it is meant to be used for third party widgets like implement of features. But current it requires quite a bit of work to create them.
      It offers two modes;
      Open: user can still access it by observing the structure from the Dom.
      Closed: user cannot access Dom elements from shadow root as it will always return null. But it can access the variables of this components. This if you know what variables are available, you can still reach the Dom elements.
