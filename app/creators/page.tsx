import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Globe, Youtube, Twitch, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"

export default function CreatorsPage() {
  // Mock data for creators
  const creators = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "alexcreates",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "United States",
      mainPlatform: "youtube",
      followers: "2.5M",
      tags: ["Tech", "Reviews", "Tutorials"],
    },
    {
      id: 2,
      name: "Nala Osei",
      username: "nalabeauty",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Ghana",
      mainPlatform: "instagram",
      followers: "1.2M",
      tags: ["Beauty", "Lifestyle", "Fashion"],
    },
    {
      id: 3,
      name: "Carlos Rivera",
      username: "carlosgaming",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Mexico",
      mainPlatform: "twitch",
      followers: "800K",
      tags: ["Gaming", "Esports", "Commentary"],
    },
    {
      id: 4,
      name: "Sarah Kim",
      username: "sarahcooks",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "South Korea",
      mainPlatform: "youtube",
      followers: "3.1M",
      tags: ["Cooking", "Travel", "Vlogs"],
    },
    {
      id: 5,
      name: "Mohammed Al-Farsi",
      username: "motech",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "UAE",
      mainPlatform: "youtube",
      followers: "1.8M",
      tags: ["Tech", "Reviews", "Unboxing"],
    },
    {
      id: 6,
      name: "Priya Sharma",
      username: "priyamusic",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "India",
      mainPlatform: "instagram",
      followers: "2.2M",
      tags: ["Music", "Dance", "Culture"],
    },
    {
      id: 7,
      name: "David Chen",
      username: "davidfilms",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "Canada",
      mainPlatform: "youtube",
      followers: "950K",
      tags: ["Filmmaking", "Cinematography", "Tutorials"],
    },
    {
      id: 8,
      name: "Fatima Nkosi",
      username: "fatimacooks",
      avatar: "/placeholder.svg?height=100&width=100",
      country: "South Africa",
      mainPlatform: "youtube",
      followers: "750K",
      tags: ["Cooking", "African Cuisine", "Culture"],
    },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <Youtube className="h-4 w-4 text-red-500" />
      case "twitch":
        return <Twitch className="h-4 w-4 text-purple-500" />
      case "instagram":
        return <Instagram className="h-4 w-4 text-pink-500" />
      case "twitter":
        return <Twitter className="h-4 w-4 text-blue-500" />
      default:
        return <Globe className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto py-2">
      <div className="flex flex-col gap-6">
        <Header title="Creators Directory" description="Browse and discover content creators from around the world" />
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Regions</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="region-western" />
                      <label htmlFor="region-western" className="text-sm">
                        Western
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="region-africa" />
                      <label htmlFor="region-africa" className="text-sm">
                        Africa
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="region-asia" />
                      <label htmlFor="region-asia" className="text-sm">
                        Asia
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="region-middle-east" />
                      <label htmlFor="region-middle-east" className="text-sm">
                        Middle East
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Platforms</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-youtube" />
                      <label htmlFor="platform-youtube" className="text-sm">
                        YouTube
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-twitch" />
                      <label htmlFor="platform-twitch" className="text-sm">
                        Twitch
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-instagram" />
                      <label htmlFor="platform-instagram" className="text-sm">
                        Instagram
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-twitter" />
                      <label htmlFor="platform-twitter" className="text-sm">
                        Twitter
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Content Categories</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-tech" />
                      <label htmlFor="category-tech" className="text-sm">
                        Tech
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-gaming" />
                      <label htmlFor="category-gaming" className="text-sm">
                        Gaming
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-beauty" />
                      <label htmlFor="category-beauty" className="text-sm">
                        Beauty & Lifestyle
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-cooking" />
                      <label htmlFor="category-cooking" className="text-sm">
                        Cooking & Food
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-music" />
                      <label htmlFor="category-music" className="text-sm">
                        Music & Arts
                      </label>
                    </div>
                  </div>
                </div>

                <Button>Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search creators..." className="pl-9" />
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="followers-high">Most Followers</SelectItem>
                    <SelectItem value="followers-low">Least Followers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {creators.map((creator) => (
                  <Link href={`/creators/${creator.id}`} key={creator.id}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src={creator.avatar || "/placeholder.svg"}
                              alt={creator.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-base">{creator.name}</CardTitle>
                            <CardDescription>@{creator.username}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          <span>{creator.country}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          {getPlatformIcon(creator.mainPlatform)}
                          <span className="text-sm font-medium">{creator.followers} followers</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
                        {creator.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="px-4">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="px-4">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="px-4">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
