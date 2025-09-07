"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, X, Search, Eye, Trash2, Users, Package, AlertTriangle, TrendingUp, Leaf } from "lucide-react"

type Item = {
  id: number
  title: string
  uploader: string
  category: string
  condition?: string
  status?: string
  views?: number
  likes?: number
  uploadDate: string
  image?: string
}

type User = {
  id: number
  name: string
  email: string
  joinDate: string
  totalItems: number
  totalSwaps: number
  rating: number
  status: string
  avatar: string
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const [pendingItems, setPendingItems] = useState<Item[]>([
    {
      id: 1,
      title: "Vintage Leather Jacket",
      uploader: "John Doe",
      category: "Outerwear",
      condition: "Excellent",
      uploadDate: "2024-01-22",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Designer Handbag",
      uploader: "Sarah Smith",
      category: "Accessories",
      condition: "Like New",
      uploadDate: "2024-01-22",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Summer Dress",
      uploader: "Emma Wilson",
      category: "Dresses",
      condition: "Good",
      uploadDate: "2024-01-21",
      image: "/placeholder.svg",
    },
  ])

  const [allItems, setAllItems] = useState<Item[]>([
    {
      id: 4,
      title: "Blue Denim Jeans",
      uploader: "Mike Johnson",
      category: "Bottoms",
      status: "Active",
      views: 45,
      likes: 12,
      uploadDate: "2024-01-20",
    },
    {
      id: 5,
      title: "White Sneakers",
      uploader: "Lisa Brown",
      category: "Shoes",
      status: "Swapped",
      views: 67,
      likes: 23,
      uploadDate: "2024-01-18",
    },
  ])

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joinDate: "2023-12-15",
      totalItems: 5,
      totalSwaps: 12,
      rating: 4.8,
      status: "Active",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      joinDate: "2023-11-20",
      totalItems: 8,
      totalSwaps: 15,
      rating: 4.9,
      status: "Active",
      avatar: "/placeholder.svg",
    },
  ])

  // ✅ LOGIN FUNCTION
  const handleLogin = () => {
    if (password === "admin123") setIsLoggedIn(true)
    else alert("Incorrect admin password.")
  }

  // ✅ APPROVE FUNCTION
  const handleApprove = (itemId: number) => {
    const item = pendingItems.find((i) => i.id === itemId)
    if (item) {
      const updatedPending = pendingItems.filter((i) => i.id !== itemId)
      setPendingItems(updatedPending)
      setAllItems([{ ...item, status: "Active", views: 0, likes: 0 }, ...allItems])
    }
  }

  // ✅ REJECT FUNCTION
  const handleReject = (itemId: number) => {
    const updatedPending = pendingItems.filter((i) => i.id !== itemId)
    setPendingItems(updatedPending)
  }

  // ✅ DELETE ITEM FUNCTION
  const handleDeleteItem = (itemId: number) => {
    const updatedItems = allItems.filter((i) => i.id !== itemId)
    setAllItems(updatedItems)
  }

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    setIsLoggedIn(false)
    setPassword("")
  }

  // ✅ LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Admin Login</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Enter the admin password to access the dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="dark:bg-gray-700 dark:text-white"
            />
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              <span className="text-xl font-bold text-green-800 dark:text-green-400">WearShare Admin</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 h-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <Button variant="outline" onClick={() => setIsLoggedIn(false)}>Logout</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">2,547</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                  <Package className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">15,234</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Total Items</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{pendingItems.length}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">8,456</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Total Swaps</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">Pending Items ({pendingItems.length})</TabsTrigger>
            <TabsTrigger value="items">All Items</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Items Pending Review</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Review and approve or reject items submitted by users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingItems.map((item) => (
                    <Card key={item.id} className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={item.image || "/placeholder.svg"} alt={item.title} />
                            <AvatarFallback>
                              <Package className="h-8 w-8 text-gray-400" />
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                              <CardContent className="p-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">by {item.uploader}</p>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                                    {item.category}
                                  </Badge>
                                  <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-300">
                                    {item.condition}
                                  </Badge>
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Uploaded {item.uploadDate}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleApprove(item.id)}
                            >
                              <Check className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => handleReject(item.id)}>
                              <X className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="items">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">All Items</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Manage all items in the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-900 dark:text-white">Title</TableHead>
                      <TableHead className="text-gray-900 dark:text-white">Uploader</TableHead>
                      <TableHead className="text-gray-900 dark:text-white">Category</TableHead>
                      <TableHead className="text-gray-900 dark:text-white">Status</TableHead>
                      <TableHead className="text-gray-900 dark:text-white">Views</TableHead>
                      <TableHead className="text-gray-900 dark:text-white">Likes</TableHead>
                      <TableHead className="text-gray-900 dark:text-white">Upload Date</TableHead>
                      <TableHead className="text-gray-900 dark:text-white">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium text-gray-900 dark:text-white">{item.title}</TableCell>
                        <TableCell className="text-gray-600 dark:text-gray-300">{item.uploader}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            {item.category}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={item.status === "Active" ? "bg-green-600" : "bg-gray-600"}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600 dark:text-gray-300">{item.views}</TableCell>
                        <TableCell className="text-gray-600 dark:text-gray-300">{item.likes}</TableCell>
                        <TableCell className="text-gray-600 dark:text-gray-300">{item.uploadDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => handleDeleteItem(item.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">User Management</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  View and manage platform users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <Card key={user.id} className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                              <CardContent className="p-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{user.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{user.email}</p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400">Joined: </span>
                                    <span className="text-gray-900 dark:text-white">{user.joinDate}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400">Items: </span>
                                    <span className="text-gray-900 dark:text-white">{user.totalItems}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400">Swaps: </span>
                                    <span className="text-gray-900 dark:text-white">{user.totalSwaps}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400">Rating: </span>
                                    <span className="text-gray-900 dark:text-white">{user.rating}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button variant="outline" size="sm">
                              Send Message
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
