the title of page like https://30tools.com/image-resizer is geting using generateToolMetadata func. that is not good its showing title = "Image Resizer - Free Image Tool | 30tools | 30Tools" which is very high competion 
so edit titles of all the page.js files in the codebase with low hanging fruit strategy and delete seo-helper.ts and export metadata from the page.js itself add it as a rule in Agents.md also
from tools.json remove all everything except imp things like 

  "id":      "name":  "description": "route": "/ico-to-png-converter",
          "extraSlugs": 
          "popular":    
          "category":   


          just keep these things in tools.json and remove faqs, features and other things , you should directly hardcode this in page.js    
          of each tool thats why I have added page.js files , and never make a page.js or layout.js a client component because we have to export metadata

          organise the whole codebase delete useless files like src/constants/seo src/constants/tools-directory.json src/constants/*.json and only keep useful files


