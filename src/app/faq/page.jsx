import React from 'react';
import Image from 'next/image';
import FAQFullList from '@/components/faq/FAQFullList';

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="relative pt-20   md:pt-40  bg-[#10551F] overflow-hidden">


                {/* Bottom wave decoration - optional, using negative margin on next section or SVG here */}
            </div>

            {/* List Section */}
            <div>
                <FAQFullList />
            </div>
        </main>
    );
}
