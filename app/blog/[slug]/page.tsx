import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import {
  blogs,
  importData,
  topOriginCountries,
  productCategories,
  tariffImpactData,
  complianceCosts,
  exportRegions,
  type BlogSection,
  type TableData,
  type ImageData,
  type FaqItem,
} from "../_data";

// Types and chart data are imported from ../_data

// Chart Components
function ImportGrowthChart({ data }: { data: typeof importData }) {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 my-8'>
      <div className='flex items-center gap-2 mb-4'>
        <LineChart className='w-5 h-5 text-blue-600' />
        <h4 className='font-semibold text-gray-900'>
          Import Growth Trend (2023-2025)
        </h4>
      </div>
      <div className='space-y-4'>
        {Object.entries(data).map(([year, info]) => (
          <div key={year} className='flex justify-between items-center'>
            <span className='font-medium'>{year}</span>
            <div className='flex items-center gap-4'>
              <span className='text-lg font-bold text-blue-600'>
                ${info.value}B
              </span>
              <span className='text-sm bg-green-100 text-green-800 px-2 py-1 rounded'>
                +{info.growth}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CountryChart({ data }: { data: typeof topOriginCountries }) {
  return (
    <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 my-8'>
      <div className='flex items-center gap-2 mb-4'>
        <BarChart3 className='w-5 h-5 text-purple-600' />
        <h4 className='font-semibold text-gray-900'>Top Origin Countries</h4>
      </div>
      <div className='space-y-3'>
        {data.map((country, index) => (
          <div
            key={country.country}
            className='flex justify-between items-center'
          >
            <div className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                {index + 1}
              </span>
              <span className='font-medium'>{country.country}</span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-lg font-bold text-purple-600'>
                ${country.value}B
              </span>
              <span className='text-sm text-gray-600 w-12 text-right'>
                {country.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCategoryDiagram({ data }: { data: typeof productCategories }) {
  return (
    <div className='bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 my-8'>
      <div className='flex items-center gap-2 mb-4'>
        <PieChart className='w-5 h-5 text-green-600' />
        <h4 className='font-semibold text-gray-900'>
          Product Category Performance
        </h4>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data.map((category) => (
          <div
            key={category.category}
            className='bg-white rounded-lg p-4 shadow-sm border border-green-200'
          >
            <h5 className='font-medium text-gray-900 mb-2'>
              {category.category}
            </h5>
            <div className='flex justify-between items-center'>
              <span className='text-xl font-bold text-green-600'>
                ${category.value}B
              </span>
              <span className='text-sm bg-green-100 text-green-800 px-2 py-1 rounded'>
                +{category.growth}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TariffImpactChart({ data }: { data: typeof tariffImpactData }) {
  return (
    <div className='bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 my-8'>
      <div className='flex items-center gap-2 mb-4'>
        <TrendingUp className='w-5 h-5 text-red-600' />
        <h4 className='font-semibold text-gray-900'>
          Tariff Impact on Pharmaceutical Exports
        </h4>
      </div>
      <div className='space-y-4'>
        {Object.entries(data).map(([year, info]) => (
          <div key={year} className='flex justify-between items-center'>
            <span className='font-medium'>{year}</span>
            <div className='flex items-center gap-4'>
              <span className='text-lg font-bold text-red-600'>
                ${info.value}B
              </span>
              <span className='text-sm bg-red-100 text-red-800 px-2 py-1 rounded'>
                {info.impact}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComplianceCostsChart({ data }: { data: typeof complianceCosts }) {
  return (
    <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 my-8'>
      <div className='flex items-center gap-2 mb-4'>
        <BarChart3 className='w-5 h-5 text-purple-600' />
        <h4 className='font-semibold text-gray-900'>
          Compliance Cost Distribution
        </h4>
      </div>
      <div className='space-y-3'>
        {data.map((item, index) => (
          <div
            key={item.category}
            className='flex justify-between items-center'
          >
            <div className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                {index + 1}
              </span>
              <span className='font-medium'>{item.category}</span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-lg font-bold text-purple-600'>
                ${item.value}M
              </span>
              <span className='text-sm text-gray-600 w-12 text-right'>
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExportRegionsChart({ data }: { data: typeof exportRegions }) {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 my-8'>
      <div className='flex items-center gap-2 mb-4'>
        <BarChart3 className='w-5 h-5 text-blue-600' />
        <h4 className='font-semibold text-gray-900'>
          Export Performance by Region
        </h4>
      </div>
      <div className='space-y-3'>
        {data.map((region, index) => (
          <div
            key={region.region}
            className='flex justify-between items-center'
          >
            <div className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                {index + 1}
              </span>
              <span className='font-medium'>{region.region}</span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-lg font-bold text-blue-600'>
                ${region.value}B
              </span>
              <span className='text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded'>
                {region.tariff}% tariff
              </span>
              <span className='text-sm text-gray-600'>{region.compliance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Rich Content Renderer
function RichContentRenderer({ content }: { content: BlogSection[] }) {
  return (
    <div className='space-y-6'>
      {content.map((section, index) => {
        switch (section.type) {
          case "heading":
            const level = section.level || 2;
            const className = `font-bold text-gray-900 mt-8 mb-4 ${
              level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : "text-xl"
            }`;

            if (level === 1) {
              return (
                <h1 key={index} className={className}>
                  {section.content}
                </h1>
              );
            } else if (level === 2) {
              return (
                <h2 key={index} className={className}>
                  {section.content}
                </h2>
              );
            } else {
              return (
                <h3 key={index} className={className}>
                  {section.content}
                </h3>
              );
            }

          case "text":
            return (
              <p key={index} className='text-gray-700 leading-relaxed mb-4'>
                {section.content}
              </p>
            );

          case "list":
            return (
              <ul
                key={index}
                className='list-disc list-inside space-y-2 text-gray-700 mb-4'
              >
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className='leading-relaxed'>
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className='border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg mb-6'
              >
                <p className='text-lg italic text-gray-800 font-medium leading-relaxed'>
                  &ldquo;{section.content}&rdquo;
                </p>
              </blockquote>
            );

          case "callout":
            return (
              <div
                key={index}
                className='bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6'
              >
                <div className='flex items-start gap-3'>
                  <TrendingUp className='w-5 h-5 text-yellow-600 mt-1 flex-shrink-0' />
                  <p className='text-gray-800 font-medium leading-relaxed'>
                    {section.content}
                  </p>
                </div>
              </div>
            );

          case "chart":
            if (section.chartType === "line") {
              // Check if it's tariff impact data
              if (
                section.chartData &&
                typeof section.chartData === "object" &&
                "2023" in section.chartData
              ) {
                const chartDataObj = section.chartData as Record<
                  string,
                  unknown
                >;
                if (
                  "2023" in chartDataObj &&
                  typeof chartDataObj["2023"] === "object" &&
                  chartDataObj["2023"] &&
                  "impact" in (chartDataObj["2023"] as Record<string, unknown>)
                ) {
                  return (
                    <TariffImpactChart
                      key={index}
                      data={section.chartData as typeof tariffImpactData}
                    />
                  );
                }
              }
              return (
                <ImportGrowthChart
                  key={index}
                  data={(section.chartData as typeof importData) || importData}
                />
              );
            } else if (section.chartType === "bar") {
              // Check if it's export regions data
              if (
                section.chartData &&
                Array.isArray(section.chartData) &&
                section.chartData.length > 0 &&
                "region" in section.chartData[0]
              ) {
                return (
                  <ExportRegionsChart
                    key={index}
                    data={section.chartData as typeof exportRegions}
                  />
                );
              }
              return (
                <CountryChart
                  key={index}
                  data={
                    (section.chartData as typeof topOriginCountries) ||
                    topOriginCountries
                  }
                />
              );
            }
            return null;

          case "diagram":
            // Check if it's compliance costs data
            if (
              section.chartData &&
              Array.isArray(section.chartData) &&
              section.chartData.length > 0 &&
              "category" in section.chartData[0] &&
              "percentage" in section.chartData[0]
            ) {
              return (
                <ComplianceCostsChart
                  key={index}
                  data={section.chartData as typeof complianceCosts}
                />
              );
            }
            return (
              <ProductCategoryDiagram
                key={index}
                data={
                  (section.chartData as typeof productCategories) ||
                  productCategories
                }
              />
            );

          case "table": {
            const table = section.table as TableData | undefined;
            if (
              !table ||
              !Array.isArray(table.headers) ||
              !Array.isArray(table.rows)
            )
              return null;
            return (
              <div
                key={index}
                className='my-6 overflow-x-auto rounded-lg border border-gray-200 bg-white'
              >
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      {table.headers.map((header) => (
                        <th
                          key={header}
                          scope='col'
                          className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600'
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {table.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className='hover:bg-gray-50'>
                        {row.map((cell, cellIdx) => (
                          <td
                            key={cellIdx}
                            className='whitespace-nowrap px-4 py-3 text-sm text-gray-700'
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          case "image": {
            const image = section.image as ImageData | undefined;
            if (!image) return null;
            return (
              <figure key={index} className='my-8'>
                <div className='relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg border border-gray-200'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw, 768px'
                    className='object-cover'
                  />
                </div>
                {image.caption && (
                  <figcaption className='mt-3 text-sm text-gray-600 flex items-center gap-2'>
                    <ImageIcon className='w-4 h-4 text-gray-500' />
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}

// Main Component
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Post not found" };
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.transdatanexus.com";
  const url = `${baseUrl}/blog/${blog.slug}`;
  const imageUrl = blog.image ? `${baseUrl}${blog.image}` : undefined;
  return {
    title: blog.title,
    description: blog.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.summary,
      images: imageUrl ? [imageUrl] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.transdatanexus.com";
  const imageUrl = blog.image
    ? `${baseUrl}${blog.image}`
    : `${baseUrl}/og-image.jpg`;

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-4xl mx-auto px-4 py-6'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Blog
          </Link>

          <div className='mb-6'>
            <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4'>
              <span className='flex items-center gap-1'>
                <Calendar className='w-4 h-4' />
                {blog.date}
              </span>
              <span className='flex items-center gap-1'>
                <User className='w-4 h-4' />
                {blog.author}
              </span>
              <span className='flex items-center gap-1'>
                <Clock className='w-4 h-4' />
                {blog.readTime}
              </span>
              <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'>
                {blog.category}
              </span>
            </div>

            <h1 className='text-4xl font-bold text-gray-900 leading-tight mb-4'>
              {blog.title}
            </h1>

            {(blog.tldr || blog.summary) && (
              <div className='mt-4'>
                <div className='bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-md'>
                  <p className='text-gray-800 text-base tldr'>
                    <span className='font-semibold mr-2'>TL;DR:</span>
                    {blog.tldr || blog.summary}
                  </p>
                </div>
              </div>
            )}

            <div className='flex flex-wrap gap-2 mt-6'>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-4xl mx-auto px-4 py-12'>
        <article className='bg-white rounded-lg shadow-lg p-8'>
          <div className='prose prose-lg max-w-none'>
            <script
              type='application/ld+json'
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: blog.title,
                  description: blog.summary,
                  image: [imageUrl],
                  author: [{ "@type": "Person", name: blog.author }],
                  datePublished: new Date(blog.date).toISOString(),
                  dateModified: new Date(blog.date).toISOString(),
                  mainEntityOfPage: `${baseUrl}/blog/${blog.slug}`,
                  keywords: blog.tags?.join(", ") ?? "",
                  speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: [".tldr"],
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "TransData Nexus",
                    logo: {
                      "@type": "ImageObject",
                      url: `${baseUrl}/logo.webp`,
                    },
                  },
                }),
              }}
            />
            <script
              type='application/ld+json'
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: `${baseUrl}/`,
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Blog",
                      item: `${baseUrl}/blog`,
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: blog.title,
                      item: `${baseUrl}/blog/${blog.slug}`,
                    },
                  ],
                }),
              }}
            />
            {blog.faq && blog.faq.length > 0 && (
              <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: blog.faq.map((f: FaqItem) => ({
                      "@type": "Question",
                      name: f.question,
                      acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                  }),
                }}
              />
            )}
            <p className='text-xl text-gray-700 leading-relaxed mb-8 font-medium'>
              {blog.content}
            </p>
            {blog.richContent && (
              <RichContentRenderer content={blog.richContent} />
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
