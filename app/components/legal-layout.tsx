import Link from "next/link";
import { ReactNode } from "react";

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated: string;
  tableOfContents?: Array<{
    id: string;
    title: string;
    subsections?: Array<{
      id: string;
      title: string;
    }>;
  }>;
}

export function LegalLayout({ children, title, lastUpdated, tableOfContents }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              ← Back to ReplyFan
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop */}
          {tableOfContents && (
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-8">
                <nav className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                    Table of Contents
                  </h3>
                  {tableOfContents.map((section) => (
                    <div key={section.id} className="space-y-1">
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        {section.title}
                      </a>
                      {section.subsections && (
                        <div className="ml-4 space-y-1">
                          {section.subsections.map((subsection) => (
                            <a
                              key={subsection.id}
                              href={`#${subsection.id}`}
                              className="block text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            >
                              {subsection.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className={`${tableOfContents ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Questions about this document? Contact us at{" "}
              <a 
                href="mailto:replyfanapp@gmail.com" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                replyfanapp@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
