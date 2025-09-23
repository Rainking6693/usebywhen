# Plan: Add Google AdSense Code to UseByWhen.com

## Objective
Replace the existing Google AdSense code with the new client ID across all HTML pages on usebywhen.com.

## Current vs New AdSense Code

### Current Code (to be replaced):
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8455742387516671"
     crossorigin="anonymous"></script>
```

### New Code (to be implemented):
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8248403820035955"
     crossorigin="anonymous"></script>
```

## Implementation Steps

### Step 1: Identify All HTML Files
- Get complete list of HTML files in the root directory
- Verify which files contain the existing AdSense code
- Document any files that might have different patterns

### Step 2: Create Search and Replace Strategy
- **Search Pattern**: `ca-pub-8455742387516671`
- **Replace Pattern**: `ca-pub-8248403820035955`
- This approach ensures we only change the client ID while preserving all other formatting

### Step 3: Execute Replacements
- Process each HTML file systematically
- Use exact text replacement to maintain formatting
- Verify each replacement is successful

### Step 4: Quality Assurance
- Verify all files have been updated
- Check that no files were missed
- Ensure the new AdSense code is properly formatted
- Confirm placement remains in the `<head>` section

### Step 5: Documentation
- Document all changes made
- Create summary of files updated
- Note any issues or exceptions encountered

## Files to Process
Based on directory listing, the following HTML files need to be updated:

1. `index.html` ✓ (confirmed has AdSense)
2. `contact.html` ✓ (confirmed has AdSense)  
3. `privacy.html` ✓ (confirmed has AdSense)
4. `terms.html`
5. `404.html`
6. `how-long-does-milk-last.html` ✓ (confirmed has AdSense)
7. `how-long-do-eggs-last.html` ✓ (confirmed has AdSense)
8. `how-long-does-cheese-last.html`
9. `how-long-does-chicken-last.html`
10. `how-long-does-ground-beef-last.html`
11. `how-long-does-fish-last.html`
12. `how-long-do-apples-last.html`
13. `how-long-do-bananas-last.html`
14. `how-long-do-tomatoes-last.html`
15. `how-long-does-bread-last.html`
16. `how-long-does-lettuce-last.html`
17. `how-long-does-yogurt-last.html`
18. `dairy-storage-guide.html`
19. `food-storage-guides.html`
20. `food-storage-videos.html`
21. `holiday-food-storage-guide.html`

## Risk Mitigation
- **Backup Strategy**: Git version control provides backup
- **Incremental Approach**: Process files one by one to catch any issues
- **Verification**: Check each file after modification
- **Rollback Plan**: Can revert changes if needed using git

## Success Criteria
- All HTML files contain the new AdSense client ID (`ca-pub-8248403820035955`)
- No HTML files contain the old AdSense client ID (`ca-pub-8455742387516671`)
- AdSense code placement and formatting remains consistent
- All files maintain their existing structure and functionality

## Timeline
- **Step 1**: 5 minutes - File identification
- **Step 2**: 2 minutes - Strategy setup  
- **Step 3**: 15 minutes - Execute replacements
- **Step 4**: 5 minutes - Quality assurance
- **Step 5**: 3 minutes - Documentation
- **Total**: ~30 minutes