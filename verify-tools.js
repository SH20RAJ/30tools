#!/usr/bin/env node

// Tool verification script to check the centralized tools configuration
const { getAllTools, getAllCategories, getPopularTools, searchTools } = require('./src/constants/tools-utils.js');

console.log('🔍 30tools Configuration Verification\n');

try {
    // Check tool counts
    const allTools = getAllTools();
    const allCategories = getAllCategories();
    const popularTools = getPopularTools();

    console.log(`✅ Total Tools: ${allTools.length}`);
    console.log(`✅ Total Categories: ${allCategories.length}`);
    console.log(`✅ Popular Tools: ${popularTools.length}`);

    // Check each category
    console.log('\n📂 Categories:');
    allCategories.forEach(category => {
        const toolsInCategory = allTools.filter(tool => tool.categoryKey === category.key);
        console.log(`  - ${category.name}: ${toolsInCategory.length} tools`);
    });

    // Check for duplicate routes
    console.log('\n🔄 Route Check:');
    const routes = allTools.map(tool => tool.route);
    const duplicateRoutes = routes.filter((route, index) => routes.indexOf(route) !== index);

    if (duplicateRoutes.length > 0) {
        console.log(`❌ Duplicate routes found: ${duplicateRoutes.join(', ')}`);
    } else {
        console.log('✅ No duplicate routes found');
    }

    // Test search functionality
    console.log('\n🔍 Search Test:');
    const imageSearchResults = searchTools('image', 'all');
    console.log(`  - Search "image": ${imageSearchResults.length} results`);

    const pdfSearchResults = searchTools('pdf', 'all');
    console.log(`  - Search "pdf": ${pdfSearchResults.length} results`);

    // Check popular tools distribution
    console.log('\n⭐ Popular Tools by Category:');
    allCategories.forEach(category => {
        const popularInCategory = allTools.filter(tool =>
            tool.categoryKey === category.key && tool.popular
        ).length;
        console.log(`  - ${category.name}: ${popularInCategory} popular tools`);
    });

    console.log('\n🎉 Configuration verification completed successfully!');

} catch (error) {
    console.error('❌ Configuration verification failed:', error.message);
    process.exit(1);
}
