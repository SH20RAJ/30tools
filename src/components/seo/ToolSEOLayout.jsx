import { getToolById } from '@/constants/tools-utils';
import StructuredData from '@/components/shared/StructuredData';
import {

  BreadcrumbsEnhanced,
  ToolFeatures,
  FAQSection,
  RelatedTools,
  UserComments,
  ReviewSnippets
} from '@/components/seo';

export default function ToolSEOLayout({ toolId, children, faqs, features, reviews }) {
  const tool = getToolById(toolId);

  if (!tool) {
    return <>{children}</>;
  }

  // Merge props with tool data, preferring props if provided
  const mergedTool = {
    ...tool,
    faqs: faqs || tool.faqs,
    features: features || tool.features,
    reviews: reviews || tool.reviews
  };

  return (
    <div className="tool-page-container">
      <StructuredData tool={mergedTool} />
      
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbsEnhanced tool={mergedTool} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          <div className="lg:col-span-12">
            {/* Main Tool Area */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
              {children}
            </div>

            {/* Tool Features */}
            <ToolFeatures tool={mergedTool} />
            
            {/* Reviews/Trust */}
            <ReviewSnippets tool={mergedTool} />
            
            {/* FAQs */}
            <FAQSection faqs={mergedTool.faqs} title={`${mergedTool.name} FAQs`} />
            
            {/* Comments */}
            <UserComments tool={mergedTool} />
          </div>
          
          {/* <div className="lg:col-span-4 space-y-8">
            <RelatedTools currentToolId={mergedTool.id} category={mergedTool.category} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
