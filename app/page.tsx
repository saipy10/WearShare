"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Leaf, Users, Recycle, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

const categories = [
  { name: "Tops", count: 450, icon: "👕" },
  { name: "Bottoms", count: 320, icon: "👖" },
  { name: "Dresses", count: 180, icon: "👗" },
  { name: "Outerwear", count: 150, icon: "🧥" },
  { name: "Shoes", count: 200, icon: "👟" },
  { name: "Accessories", count: 100, icon: "👜" },
];

const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    size: "M",
    condition: "Excellent",
    image: "https://images.meesho.com/images/products/469364421/2i0ae_512.webp",
    points: 15,
    category: "Outerwear",
    uploader: "Sarah J.",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    size: "S",
    condition: "Like New",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMI846-wB8adraphhmESr4zU6IBEPMpkG15A&s",
    points: 12,
    category: "Dresses",
    uploader: "Emma W.",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Classic White Sneakers",
    size: "9",
    condition: "Good",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1lo8WAJlBXRMuu-7x-3iHDruSqUDDFQerA&s",
    points: 18,
    category: "Shoes",
    uploader: "Mike R.",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Wool Sweater",
    size: "L",
    condition: "Excellent",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_5lxKD7UEeu8SENiCYeQO3a0blLFi7sUkQ&s",
    points: 20,
    category: "Knitwear",
    uploader: "Lisa B.",
    rating: 4.8,
  },
];

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/browse?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Hero Section with Background Carousel */}
          <section className="relative h-[32rem] flex items-center justify-center text-center px-4">
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
              <div className="whitespace-nowrap animate-carousel flex items-center h-full">
                {[
                  "https://images.meesho.com/images/products/469364421/2i0ae_512.webp",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMI846-wB8adraphhmESr4zU6IBEPMpkG15A&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1lo8WAJlBXRMuu-7x-3iHDruSqUDDFQerA&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_5lxKD7UEeu8SENiCYeQO3a0blLFi7sUkQ&s",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`carousel-${i}`}
                    width={400}
                    height={400}
                    className="h-full w-auto object-cover mx-4 rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-20 text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sustainable Fashion Through{" "}
                <span className="text-green-400">Community Exchange</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Join WearShare and help reduce textile waste by swapping, sharing,
                and discovering pre-loved clothing in your community.
              </p>
            </div>
          </section>

          

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for clothing items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              />
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
              >
                Start Swapping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/browse">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900 text-lg px-8 py-3 bg-transparent"
              >
                Browse Items
              </Button>
            </Link>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                2,500+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Active Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Recycle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                15,000+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Items Exchanged
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                50 Tons
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Waste Prevented
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/browse?category=${category.name}`}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {category.count} items
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Items
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover amazing pieces from our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Link key={item.id} href={`/items/${item.id}`}>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-green-600">
                        {item.condition}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(item.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {item.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-600 font-semibold">
                          {item.points} points
                        </span>
                        <span className="text-sm text-gray-600">
                          Size {item.size}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        by {item.uploader}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/browse">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                View All Items
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How WearShare Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Simple, sustainable, and community-driven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                List Your Items
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload photos and details of clothes you no longer wear.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Browse & Request
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover amazing pieces and request swaps or use points.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Exchange & Enjoy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete the exchange and enjoy your new fashion finds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">WearShare</span>
              </div>
              <p className="text-gray-400">
                Building a sustainable future through community-driven fashion
                exchange.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/browse" className="hover:text-white">
                    Browse Items
                  </Link>
                </li>
                <li>
                  <Link href="/items/new" className="hover:text-white">
                    List an Item
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} WearShare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
