---
translationKey: 'Plans'
title: 'Plans'
description: 'Planned features to be added to TabbedOut Wikis'
---

This page is deprecated and should be transferred over toward GitHub issues.

## Major changes

These are full features we wish to add to the site. These might take a bit of effort to get right, and we need to be careful not to bloat. The site is primarily an information portal, we don't want to bog it down or take away from that.

### Full wiki offline downloads

A compressed and regularly updated download of each wiki for offline, ad-free use. Assuming the site isn't running on such slim margins that this somehow presents an issue, let's offer cool stuff to people.

### Search

- [Pagefind](https://pagefind.app/)

## Minor changes

Minor changes are minor in size, not importance. Size matters.

### Site
- Split partials up to cache as much as possible (static stuff separate & cached, logic stuff separate & not cached)
- Fix hamburger menu on mobile
- Add start time to youtube video link
- Port checklist code from RW

### Legal
- Create an email with the @tabbedout.wiki domain and include it in Privacy Policy
- Finish the site TOS

## Editing
- Set up `front-matter-config.json` and configs like it to keep consistent formatting between edits.

## General tips

- **Testing the most current Quetzal branch**: `HUGO_MODULE_WORKSPACE=go.work hugo server --ignoreVendorPaths "**"`
- **Updating sites to a new version of Quetzal**: First, delete the `_vendor` directory containing the site's local version of Quetzal, then run the following:
```bash
# Get the latest version (or get a tagged version)
hugo mod get -u

# Clean up go.sum and go.mod files
hugo mod tidy

# Create a new _vendor directory containing a local install of the files
hugo mod vendor

# Test the site and audit
hugo server
```
- **Audit**: Run the following to audit the project for errors:
```bash
HUGO_MINIFY_TDEWOLFF_HTML_KEEPCOMMENTS=true HUGO_ENABLEMISSINGTRANSLATIONPLACEHOLDERS=true hugo && grep -inorE "<\!-- raw HTML omitted -->|ZgotmplZ|\[i18n\]|\(<nil>\)|(&lt;nil&gt;)|hahahugo" public/
```
