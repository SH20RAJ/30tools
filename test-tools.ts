import { getAllTools, getAllCategories } from "./src/lib/tools.ts";

try {
    const tools = getAllTools();
    const categories = getAllCategories();
    console.log(`Tools count: ${tools.length}`);
    console.log(`Categories count: ${categories.length}`);
} catch (error) {
    console.error("Error fetching tools:", error);
}
