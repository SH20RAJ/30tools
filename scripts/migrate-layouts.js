const fs = require('fs');
const path = require('path');

const layoutsDir = path.join(__dirname, '../src/app');
const layouts = fs.readdirSync(layoutsDir).filter(f => fs.lstatSync(path.join(layoutsDir, f)).isDirectory());

layouts.forEach(layout => {
    const layoutPath = path.join(layoutsDir, layout, 'layout.js');
    if (!fs.existsSync(layoutPath)) return;
    
    // Skip landing page if it's already done (but script won't hurt)
    let content = fs.readFileSync(layoutPath, 'utf8');
    
    // Replace Navbars
    content = content.replace(/import .*Navbar from "@\/components\/navigation\/.*;/g, 'import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";');
    content = content.replace(/<.*Navbar \/>/g, '<GoogleNavbar />');
    
    // Replace Footers
    content = content.replace(/import .*Footer from "@\/components\/footers\/.*;/g, 'import { GoogleFooter } from "@/components/footers/GoogleFooter";');
    content = content.replace(/<.*Footer \/>/g, '<GoogleFooter />');
    
    // Special case for selection styling if not present
    if (!content.includes('selection:bg-primary/10')) {
        content = content.replace(/className="min-h-screen flex flex-col bg-background"/g, 'className="min-h-screen flex flex-col bg-background selection:bg-primary/10"');
    }

    fs.writeFileSync(layoutPath, content);
    console.log(`Updated ${layoutPath}`);
});
