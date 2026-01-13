import fs from "fs";
import path from "path";
import AboutHero from "@/components/AboutHero";
import AnimatedBlogGrid from "@/components/AnimatedBlogGrid";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title:
    "Meditation & Yoga Blog | Insights on Inner Peace, Mindfulness & Spiritual Growth",
  description:
    "Explore expert articles on meditation techniques, yoga practices, mindfulness, spiritual awakening, and holistic wellness. Discover the path to inner peace and transformation.",
  keywords: [
    "meditation blog",
    "yoga insights",
    "mindfulness articles",
    "spiritual growth",
    "inner peace guide",
    "meditation techniques",
    "yoga practice tips",
    "holistic wellness",
    "meditation for beginners",
    "spiritual transformation",
  ].join(", "),
  openGraph: {
    title: "Meditation & Yoga Blog | Journey to Inner Peace",
    description:
      "Expert insights on meditation, yoga, mindfulness and spiritual practices for a more peaceful and balanced life",
    type: "website",
    url: "https://yoursite.com/blog",
    images: [
      {
        url: "/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meditation & Yoga Blog - Journey to Inner Peace",
      },
    ],
    siteName: "Meditation & Yoga Sanctuary",
  },
  alternates: {
    canonical: "https://yoursite.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Meditation & Yoga Blog | Journey to Inner Peace",
    description:
      "Expert insights on meditation, yoga, mindfulness and spiritual practices",
    images: ["/images/blog-og.jpg"],
  },

  // Additional structured data
  other: {
    "application-name": "Meditation & Yoga Sanctuary",
    author: "Meditation Guide",
    generator: "Next.js",
    "theme-color": "#C7DC49",
  },
};

export default function BlogPage() {
  const blogs = getBlogs();

  // Generate schema.org markup for better SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogs.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.excerpt,
        url: `https://yoursite.com/blog/${blog.slug}`,
        datePublished: blog.date,
        author: {
          "@type": "Person",
          name: blog.author || "Meditation Guide",
        },
        image: blog.image || "/images/placeholder.jpg",
      },
    })),
  };

  return (
    <>
      <AboutHero
        bannerImage="/images/gallery/slide2.jpeg"
        title="Meditation & Yoga Insights"
        subtitle="Discover wisdom, practices, and guidance for your journey to inner peace and spiritual awakening"
        breadcrumbs={[{ label: "Blog", path: "/blog" }]}
      />

      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Animated Blog Grid - Client Component */}
      <AnimatedBlogGrid blogs={blogs} />
    </>
  );
}
