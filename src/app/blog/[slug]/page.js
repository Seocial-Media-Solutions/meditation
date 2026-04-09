import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

// import { useEffect } from 'react';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

// Generate metadata for each blog page
export async function generateMetadata({ params }) {
  // We need to await the params object first
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const blogs = getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title}`,
    description:
      blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
    keywords: blog.tags,
    openGraph: {
      title: blog.title,
      description:
        blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
      type: "article",
      url: `https://meditation-site.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.image || "/images/placeholder.jpg",
          width: 1200,
          height: 730,
          alt: blog.alt || blog.title,
        },
      ],
    },
    canonical: `https://meditation-site.com/blog/${blog.slug}`,
    alternates: {
      canonical: `https://meditation-site.com/blog/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description:
        blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
      images: [blog.image || "/images/placeholder.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "application-name": "Meditation & Yoga Sanctuary",
      author: blog.author || "Meditation Guide",
      publisher: "Meditation & Yoga Sanctuary",
      generator: "Next.js",
      "theme-color": "#C7DC49",
    },
  };
}

// Custom blog content renderer component
function BlogContent({ content }) {
  // Add custom styles directly to avoid relying just on Tailwind's prose
  const customStyles = `
    .blog-content h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #374151; /* Dark gray for a more grounded feel */
      line-height: 1.2;
    }
    
    .blog-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #C7DC49; /* Meditation green for subheadings */
      line-height: 1.3;
    }
    
    .blog-content p {
      margin-bottom: 1.25rem;
      line-height: 1.8;
      color: #4B5563; /* Softer gray for readability */
    }

    .blog-content {
      color: #1F2937;
    }
  `;

  return (
    <div className="blog-content">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default async function SingleBlogPage({ params }) {
  // We need to await the params object first
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Get all blogs
  const blogs = getBlogs();

  // Find the blog with the matching slug
  const blog = blogs.find((blog) => blog.slug === slug);

  // If no blog is found, return a not found message
  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F7F8ED] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-12">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">
              Blog Not Found
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find the blog you're looking for. It may have been moved or removed.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center bg-[#C7DC49] text-white px-8 py-4 rounded-full hover:bg-[#b5ca42] transition-colors duration-300 font-medium"
            >
              Back to Insights
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Format the date
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero section with image */}
      <div className="relative w-full aspect-[3/2] max-w-6xl mx-auto mt-0">
        <Image
          src={blog.image || "/images/placeholder.jpg"}
          alt={blog.alt || blog.title}
          fill
          priority
          className="object-cover rounded-2xl "
        />
        
        
      </div>

      {/* Content section */}
      <div className="max-w-6xl mx-auto  py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-10">
          {/* Author and date info */}
          <div className="flex items-center mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="mr-5 w-16 h-16 relative flex items-center justify-center bg-[#C7DC49]/10 rounded-full">
                <User className="w-8 h-8 text-[#C7DC49]" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{blog.author}</p>
                <p className="text-sm text-gray-500">
                  Published on {formattedDate}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {blog.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Using our custom BlogContent component */}
          
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-2">
            {blog.heading}
          </h1>
       
          <BlogContent content={blog.content} />

          {/* Back button */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#C7DC49] hover:gap-3 gap-2 transition-all duration-300 font-medium group"
            >
              <span className="text-xl transition-transform group-hover:-translate-x-1">←</span>
              <span>Back to All Blogs</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// Generate static paths for all blogs
export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
