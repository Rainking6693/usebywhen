# Research: Adding Google AdSense Meta Tag to UseByWhen.com

## Task Overview
Add the Google AdSense meta tag `<meta name="google-adsense-account" content="ca-pub-8248403820035955">` to all HTML pages on usebywhen.com.

## Current State Analysis

### Existing AdSense Implementation
- The main `index.html` already has Google AdSense script implementation:
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8248403820035955"
       crossorigin="anonymous"></script>
  ```
- The publisher ID `ca-pub-8248403820035955` matches the one requested in the meta tag

### Site Structure
The site is a static HTML website with the following structure:

#### Root Directory HTML Files:
- `index.html` (main page)
- `contact.html`
- `privacy.html`
- `terms.html`
- `404.html`
- Multiple food-specific pages (e.g., `how-long-does-milk-last.html`, `how-long-does-cheese-last.html`, etc.)

#### Blog Directory:
- `blog/index.html`
- Multiple blog post HTML files
- `blog/BLOG-POST-TEMPLATE.html`

#### Src Directory:
- Contains duplicate versions of some pages (`contact.html`, `privacy.html`, `terms.html`)

### HTML Structure Pattern
All pages follow a similar structure:
1. `<!DOCTYPE html>`
2. `<html lang="en">`
3. `<head>` section with meta tags
4. `<body>` content

### Current Meta Tag Patterns
Pages typically include:
- Charset and viewport meta tags
- SEO meta tags (title, description, keywords)
- Open Graph and Twitter Card meta tags
- Canonical links
- Favicon links
- Some pages already have Google AdSense scripts

## Requirements
- Add `<meta name="google-adsense-account" content="ca-pub-8248403820035955">` to ALL HTML pages
- Place the meta tag within the `<head></head>` section
- Ensure consistency across all pages
- Maintain existing meta tag structure and order

## Files to Update
Based on directory listing, approximately 25+ HTML files need to be updated:

### Root Directory:
- index.html
- contact.html
- privacy.html
- terms.html
- 404.html
- All food-specific guide pages (how-long-does-*.html)
- All other HTML files in root

### Blog Directory:
- blog/index.html
- All blog post HTML files
- blog/BLOG-POST-TEMPLATE.html

### Src Directory:
- src/contact.html
- src/privacy.html
- src/terms.html

## Implementation Strategy
1. Get complete list of all HTML files
2. Read each file to understand current head structure
3. Add the meta tag in appropriate location within head section
4. Maintain existing formatting and structure
5. Verify all files are updated correctly