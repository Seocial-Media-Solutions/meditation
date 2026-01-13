'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, Sparkles } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.4
    }
  },
  hover: {
    y: -12,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  }
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

const tagVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const paginationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8
    }
  }
};

export default function AnimatedBlogGrid({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Sort blogs by date (latest first) and paginate
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [blogs]);

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return sortedBlogs.slice(startIndex, endIndex);
  }, [sortedBlogs, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of blog grid
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#F7F8ED] via-white to-[#F7F8ED] py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            variants={titleVariants}
          >
            <Sparkles className="w-8 h-8 text-[#C7DC49] mr-3" />
            <h1 className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Wisdom & Insights
            </h1>
            <Sparkles className="w-8 h-8 text-[#C7DC49] ml-3" />
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            variants={subtitleVariants}
          >
            Explore transformative teachings on meditation, mindfulness, and the journey within
          </motion.p>
          <motion.div
            className="mt-6 text-sm text-gray-500 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {sortedBlogs.length} {sortedBlogs.length === 1 ? 'article' : 'articles'} • Page {currentPage} of {totalPages}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentBlogs.map((blog, index) => (
              <motion.article
                key={`${blog.id}-${currentPage}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden cursor-pointer transition-shadow duration-500"
                variants={cardVariants}
                whileHover="hover"
                itemScope
                itemType="https://schema.org/BlogPosting"
                layout
              >
                <Link href={`/blog/${blog.slug}`} className="block">
                  <motion.div
                    className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100"
                    itemProp="image"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <motion.div
                      variants={imageVariants}
                      whileHover="hover"
                      className="w-full h-full"
                    >
                      <Image
                        src={blog.image || '/images/placeholder.jpg'}
                        alt={blog.alt || blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={index <= 2}
                      />
                    </motion.div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <meta itemProp="url" content={blog.image} />
                  </motion.div>

                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div
                      className="flex items-center gap-4 mb-4 text-sm text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#C7DC49]" />
                        <time
                          dateTime={new Date(blog.date).toISOString()}
                          itemProp="datePublished"
                        >
                          {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                      </div>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-[#C7DC49]" />
                        <span itemProp="author">
                          {blog.author || "Meditation Guide"}
                        </span>
                      </div>
                    </motion.div>

                    <motion.h2
                      className="text-2xl font-serif text-gray-900 mb-3 group-hover:text-[#C7DC49] transition-colors duration-300 line-clamp-2"
                      itemProp="headline"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      {blog.heading || blog.title}
                    </motion.h2>

                    <motion.p
                      className="text-gray-600 mb-5 line-clamp-3 leading-relaxed font-light"
                      itemProp="description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      {blog.excerpt || blog.content?.substring(0, 120)}...
                    </motion.p>

                    {blog.tags && blog.tags.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 mb-5"
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1, delayChildren: index * 0.1 + 0.9 }}
                      >
                        {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="inline-block bg-[#C7DC49]/10 text-gray-700 text-xs px-3 py-1.5 rounded-full border border-[#C7DC49]/20 font-light"
                            variants={tagVariants}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(199, 220, 73, 0.2)' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}

                    <motion.div
                      className="flex items-center text-[#C7DC49] font-light group-hover:gap-3 gap-2 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 1.0 }}
                    >
                      <span>Read Article</span>
                      <motion.span
                        className="text-xl"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center mt-16 space-x-3"
            variants={paginationVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Previous Button */}
            <motion.button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center px-5 py-3 rounded-full text-sm font-light transition-all duration-300 ${currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                  : 'text-gray-700 bg-white hover:bg-[#C7DC49] hover:text-white shadow-md hover:shadow-lg'
                }`}
              whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </motion.button>

            {/* Page Numbers */}
            <div className="flex space-x-2">
              {getPageNumbers().map((page, index) => (
                <motion.div key={index}>
                  {page === '...' ? (
                    <span className="px-4 py-3 text-gray-400">...</span>
                  ) : (
                    <motion.button
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-3 rounded-full text-sm font-light transition-all duration-300 min-w-[44px] ${currentPage === page
                          ? 'bg-[#C7DC49] text-white shadow-lg'
                          : 'text-gray-700 bg-white hover:bg-[#C7DC49]/20 shadow-md'
                        }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {page}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center px-5 py-3 rounded-full text-sm font-light transition-all duration-300 ${currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                  : 'text-gray-700 bg-white hover:bg-[#C7DC49] hover:text-white shadow-md hover:shadow-lg'
                }`}
              whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}