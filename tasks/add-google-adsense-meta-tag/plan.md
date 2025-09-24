# Implementation Plan: Adding Google AdSense Meta Tag

## Objective
Add `<meta name="google-adsense-account" content="ca-pub-8248403820035955">` to all HTML pages on usebywhen.com.

## Implementation Strategy

### Phase 1: Discovery and Inventory
1. **Get complete list of all HTML files** in the project
   - Use directory listing to identify all .html files
   - Include root directory, blog directory, and src directory
   - Create comprehensive inventory

### Phase 2: Analysis and Preparation
1. **Analyze current head structure** of representative files
   - Identify optimal placement for the meta tag
   - Ensure consistency with existing meta tag patterns
   - Determine if any files already have the tag

### Phase 3: Implementation
1. **Batch update all HTML files**
   - Add the meta tag to each file's `<head>` section
   - Place it logically within existing meta tags (after charset/viewport, before SEO tags)
   - Maintain existing formatting and indentation
   - Use edit_file function for precise modifications

### Phase 4: Verification
1. **Verify all files were updated correctly**
   - Spot-check several files to ensure proper placement
   - Confirm no files were missed
   - Ensure no syntax errors were introduced

## Technical Details

### Meta Tag to Add
```html
<meta name="google-adsense-account" content="ca-pub-8248403820035955">
```

### Placement Strategy
- Insert after basic meta tags (charset, viewport)
- Insert before SEO meta tags (title, description, keywords)
- Maintain consistent indentation (4 spaces based on existing pattern)

### File Categories to Update

#### Root Directory Files:
- index.html ✓ (already has AdSense script, needs meta tag)
- contact.html
- privacy.html
- terms.html
- 404.html
- All food guide pages (how-long-does-*.html)
- Any other .html files

#### Blog Directory Files:
- blog/index.html
- All blog post .html files
- blog/BLOG-POST-TEMPLATE.html

#### Src Directory Files:
- src/contact.html
- src/privacy.html
- src/terms.html

### Implementation Approach
1. **Use edit_file function** for each HTML file
2. **Target the head section** specifically
3. **Find appropriate insertion point** (after viewport meta tag)
4. **Insert with proper formatting**

### Example Edit Pattern
For each file, find:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

And add after it:
```html
<meta name="google-adsense-account" content="ca-pub-8248403820035955">
```

## Risk Mitigation
- Use precise text matching to avoid breaking existing structure
- Test on a few files first before batch processing
- Maintain backup awareness (git repository provides version control)
- Verify syntax after each edit

## Success Criteria
- All HTML files contain the Google AdSense meta tag
- Meta tag is properly placed within head section
- No syntax errors introduced
- Existing functionality preserved
- Consistent formatting maintained across all files