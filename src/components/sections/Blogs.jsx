import React from 'react';
import { BLOG_POSTS } from '../../utils/data';
import { FaSearch, FaThLarge, FaList, FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
    const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
    const trendingPosts = BLOG_POSTS.filter(p => !p.featured);

    return (
        <section id="blogs" className="py-24 bg-[#F5F2EA]">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Blog & Insights</h2>
                    <p className="text-gray-500">A magazine-style feed for design, product thinking, and calm UX decisions.</p>
                </div>

                {/* Controls */}
                <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 mb-12">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by title, idea, or tag..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-100 bg-transparent focus:outline-none focus:border-gray-300 transition-colors"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {['All', 'Product', 'Design', 'Workflow', 'Technical'].map((filter, idx) => (
                                <button key={filter} className={`px-5 py-2 rounded-full text-sm font-medium border whitespace-nowrap ${idx === 0 ? 'bg-gray-100 border-gray-200 text-gray-900' : 'bg-white border-white hover:border-gray-200 text-gray-500'}`}>
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* View Toggle */}
                        <div className="flex gap-2">
                            <button className="p-3 rounded-lg bg-[#EBE7DD] text-gray-800"><FaThLarge /></button>
                            <button className="p-3 rounded-lg hover:bg-gray-50 text-gray-400"><FaList /></button>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Featured Post - Large Left */}
                    <div className="lg:col-span-2 bg-[#EBE7DD]/30 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px] border border-[#EBE7DD]">
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full bg-[#DBCBB1]/30 text-[#8C7356] text-xs font-bold uppercase tracking-wider mb-6">
                                {featuredPost.category}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6 leading-tight">
                                {featuredPost.title}
                            </h3>
                            <p className="text-xl text-gray-600 max-w-xl">
                                {featuredPost.excerpt}
                            </p>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Featured</span>
                        </div>
                    </div>

                    {/* Trending - Right Sidebar */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="font-bold text-lg">Trending</h4>
                            <span className="text-xs text-blue-500 font-medium cursor-pointer">Top picks</span>
                        </div>

                        <div className="flex flex-col gap-6">
                            {trendingPosts.map((post, index) => (
                                <div key={post.id} className="p-6 bg-[#F9F9F4] rounded-2xl group hover:bg-[#F0EEE6] transition-colors cursor-pointer relative">
                                    <span className="text-xs font-bold text-gray-400 mb-2 block">#{index + 1}</span>
                                    <h5 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h5>
                                    <span className="text-xs text-gray-500">{post.category}</span>

                                    <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:scale-110 transition-transform">
                                        <FaArrowRight size={10} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Blogs;
