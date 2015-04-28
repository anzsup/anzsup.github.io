--------------
ANZSUP website
--------------

This is a static website generated using Jekyll.

To generate content (will be placed in ``_site`` subfolder): type ``jekyll build``.
To test locally: type ``jekyll serve --watch``.


Website locations
-----------------

The client insisted on having the current year's website as the landing page for the domain. Unfortunately, Github does not seem to be able to handle one of the project pages connected to the main domain and the other to subdomains; the main domain must be connected to the organization page. Otherwise all the subdomain pages are only accessible as ``anzsup.github.io/<year>`` and not as ``anzsup.org/<year>``. Therefore instead of keeping the current year's website in ``github.com/anzsup/<year>``, I have to keep it in ``github.com/anzsup.github.io``.

This means that some relocation work will be required each year:

* The contents of ``anzsup.github.io``'s ``master`` branch must be moved to ``<year>``'s ``gh-pages`` branch (don't forget to change ``CNAME`` accordingly).

* The ``anzsup.github.io``'s ``master`` branch must be cleared and replaced with the stub of the next year's website, or with the ``index.html.off-season`` page (appropriately modified).

* Since the deletion of the organization page will make Github forget all the subdomain associations (at least that's what it does now), the previous years' pages must be rebuilt by making an empty commit as::

    git commit -m 'rebuild pages' --allow-empty
