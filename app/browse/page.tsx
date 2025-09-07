"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search, Heart, Star, Grid, List, Leaf, Filter, Menu, X } from "lucide-react"
import { items } from "@/data/items"
import Link from "next/link"


const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories", "Knitwear"]
const conditions = ["All", "New", "Like New", "Excellent", "Good", "Fair"]
const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL", "6", "7", "8", "9", "10", "11", "12", "One Size"]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [selectedSize, setSelectedSize] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState("grid")
  const [likedItems, setLikedItems] = useState<number[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [user, setUser] = useState(null) // Mock user state

  const toggleLike = (itemId: number) => {
    setLikedItems((prev) => 
      prev.includes(itemId) 
        ? prev.filter((id) => id !== itemId) 
        : [...prev, itemId]
    )
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesCondition = selectedCondition === "All" || item.condition === selectedCondition
    const matchesSize = selectedSize === "All" || item.size === selectedSize

    return matchesSearch && matchesCategory && matchesCondition && matchesSize
  })

  // Sort items based on selected criteria
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "points-low":
        return a.points - b.points
      case "points-high":
        return b.points - a.points
      case "rating":
        return b.rating - a.rating
      case "oldest":
        return a.id - b.id
      default: // newest
        return b.id - a.id
    }
  })

  const FiltersContent = () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Category</label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Condition</label>
        <Select value={selectedCondition} onValueChange={setSelectedCondition}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {conditions.map((condition) => (
              <SelectItem key={condition} value={condition}>
                {condition}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Size</label>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Enhanced Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 dark:text-green-400" />
              <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">WearShare</span>
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for clothing items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/items/new" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors">
                List Item
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              {user ? (
                <Link href="/dashboard">
                  <Button className="bg-green-600 hover:bg-green-700 text-sm px-3 py-2">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <div className="flex gap-2">
                  <Link href="/login">
                    <Button variant="outline" className="text-sm px-3 py-2">Login</Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-green-600 hover:bg-green-700 text-sm px-3 py-2">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for clothing items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Desktop Sidebar Filters */}
          <div className="w-64 hidden lg:block">
            <Card className="p-4 sticky top-24">
              <h3 className="font-semibold mb-4">Filters</h3>
              <FiltersContent />
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters & Results Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Browse Items</h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{sortedItems.length} items found</p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Mobile Filters Button */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FiltersContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-36 sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="points-low">Points: Low to High</SelectItem>
                    <SelectItem value="points-high">Points: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex border rounded">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`rounded-r-none ${viewMode === "grid" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`rounded-l-none ${viewMode === "list" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Items Display */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {sortedItems.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Link href={`/items/${item.id}`}>
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-40 sm:h-48 object-contain rounded-t-lg"
                          />
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                          onClick={() => toggleLike(item.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              likedItems.includes(item.id ) ? "fill-red-500 text-red-500" : "text-gray-600"
                            }`}
                          />
                        </Button>
                        <Badge className="absolute top-2 left-2 bg-green-600 text-xs">{item.condition}</Badge>
                      </div>
                      <div className="p-3 sm:p-4">
                        <Link href={`/items/${item.id}`}>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors line-clamp-2 text-sm sm:text-base">
                            {item.title}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-1 mb-2">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">({item.reviewCount})</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm sm:text-lg font-bold text-green-600">{item.points} points</span>
                          <span className="text-xs sm:text-sm text-gray-600">Size {item.size}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">by {item.uploader}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <Link href={`/items/${item.id}`} className="shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded"
                          />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <Link href={`/items/${item.id}`}>
                            <h3 className="text-sm sm:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors mb-1 sm:mb-2 line-clamp-1">
                              {item.title}
                            </h3>
                          </Link>
                          <div className="flex items-center gap-1 mb-1 sm:mb-2">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                    i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs sm:text-sm text-gray-600">({item.reviewCount})</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-2 flex-wrap">
                            <span className="text-sm sm:text-xl font-bold text-green-600">{item.points} points</span>
                            <Badge className="bg-green-600 text-xs">{item.condition}</Badge>
                            <span className="text-xs sm:text-sm text-gray-600">Size {item.size}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 truncate">
                            by {item.uploader} • {item.location}
                          </p>
                        </div>
                        <div className="flex flex-col justify-between items-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleLike(item.id)}
                            className="p-2"
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                likedItems.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                              }`}
                            />
                          </Button>
                          <Link href={`/items/${item.id}`}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                              View
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {sortedItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 text-lg">No items found matching your criteria.</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}