const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            content = content.replace(/className="([^"]+)"/g, (match, classes) => {
                if (classes.includes('font-sans') || classes.includes('font-serif')) {
                    return match; 
                }
                
                let newClasses = classes;
                
                if (classes.includes('text-gray-600') || classes.includes('text-slate-600')) {
                    newClasses = newClasses.replace(/\btext-sm\b/g, 'text-base');
                    newClasses = newClasses.replace(/\btext-base\b/g, 'text-lg');
                    newClasses = newClasses.replace(/\btext-lg\b/g, 'text-2xl');
                    newClasses = newClasses.replace(/\btext-xl\b/g, 'text-3xl');
                    newClasses = newClasses.replace(/\btext-2xl\b/g, 'text-4xl');
                    
                    if (!/\btext-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)\b/.test(classes)) {
                        newClasses = newClasses + ' text-2xl';
                    }
                }
                
                return `className="${newClasses}"`;
            });
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

processDir('/home/theh4cker/Desktop/6_oct_2025/Apr16/websites/meditation/src');
