# Research: Add Google AdSense Code to UseByWhen.com

## Task Overview
Add the following Google AdSense code to each page of usebywhen.com:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8248403820035955"
     crossorigin="anonymous"></script>
```

## Current State Analysis

### Existing AdSense Implementation
- **Current Client ID**: `ca-pub-8455742387516671`
- **New Client ID**: `ca-pub-8248403820035955`
- **Location**: Already placed in `<head>` section of HTML files
- **Implementation**: Consistent across examined files

### Website Structure
The website consists of multiple HTML files in the root directory:

#### Main Pages
- `index.html` - Main homepage with food database
- `contact.html` - Contact page
- `privacy.html` - Privacy policy
- `terms.html` - Terms of service

#### Food-Specific Guide Pages
- `how-long-does-milk-last.html`
- `how-long-do-eggs-last.html`
- `how-long-does-cheese-last.html`
- `how-long-does-chicken-last.html`
- `how-long-does-ground-beef-last.html`
- `how-long-does-fish-last.html`
- `how-long-do-apples-last.html`
- `how-long-do-bananas-last.html`
- `how-long-do-tomatoes-last.html`
- `how-long-does-bread-last.html`
- `how-long-does-lettuce-last.html`
- `how-long-does-yogurt-last.html`
- `dairy-storage-guide.html`
- `food-storage-guides.html`
- `food-storage-videos.html`
- `holiday-food-storage-guide.html`
- `404.html`

### Current AdSense Code Pattern
All examined files have this pattern in the `<head>` section:
```html
<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8455742387516671"
     crossorigin="anonymous"></script>
```

## Key Findings

1. **Existing Implementation**: The website already has Google AdSense implemented with a different client ID
2. **Consistent Placement**: AdSense code is consistently placed in the `<head>` section after meta tags and before schema markup
3. **Multiple Files**: Need to update approximately 25+ HTML files
4. **Pattern Recognition**: All files follow similar structure with AdSense code in the same location

## Decision Required
Since there's already an existing AdSense implementation, I need to determine if this is:
1. **Replacement**: Replace the old client ID with the new one
2. **Addition**: Add the new AdSense code alongside the existing one
3. **Migration**: Complete migration from old to new AdSense account

**Assumption**: Based on the user request to "copy and paste this code between the <head></head> tags on each page", I will **replace** the existing AdSense code with the new client ID, as having two AdSense codes from different accounts could violate AdSense policies.

## Implementation Strategy

1. **Search and Replace**: Use the existing AdSense code pattern to locate and replace with new client ID
2. **Batch Processing**: Process all HTML files systematically
3. **Verification**: Ensure the replacement maintains the same formatting and placement
4. **Quality Check**: Verify no files are missed and all replacements are successful

## Files to Update
All HTML files in the root directory that contain the old AdSense code.