import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"

export default function EventsPage() {
  // Mock data for events
  const events = [
    {
      id: 1,
      name: "Creator Summit 2025",
      image: "/placeholder.svg?height=200&width=400",
      date: "June 15-18, 2025",
      location: "Los Angeles, CA",
      description:
        "The largest gathering of content creators in North America, featuring workshops, panels, and networking opportunities.",
      attendees: 42,
      tags: ["Conference", "Networking", "Workshops"],
    },
    {
      id: 2,
      name: "African Content Festival",
      image: "/placeholder.svg?height=200&width=400",
      date: "July 22-24, 2025",
      location: "Lagos, Nigeria",
      description:
        "Celebrating African content creators with a focus on regional growth, monetization strategies, and cross-border collaborations.",
      attendees: 28,
      tags: ["Festival", "Regional", "Networking"],
    },
    {
      id: 3,
      name: "Digital Creators Conference",
      image: "/placeholder.svg?height=200&width=400",
      date: "August 5-7, 2025",
      location: "London, UK",
      description:
        "A premier event for digital content creators focusing on innovation, technology, and the future of content creation.",
      attendees: 35,
      tags: ["Conference", "Technology", "Innovation"],
    },
    {
      id: 4,
      name: "Asia Creator Expo",
      image: "/placeholder.svg?height=200&width=400",
      date: "September 10-12, 2025",
      location: "Tokyo, Japan",
      description:
        "The largest creator event in Asia, showcasing talent from across the continent with a focus on cross-cultural collaboration.",
      attendees: 50,
      tags: ["Expo", "Regional", "Collaboration"],
    },
    {
      id: 5,
      name: "Tech Content Summit",
      image: "/placeholder.svg?height=200&width=400",
      date: "October 3-5, 2025",
      location: "San Francisco, CA",
      description:
        "Focused on technology content creators, featuring the latest in tech trends, gadget reviews, and tutorial creation.",
      attendees: 22,
      tags: ["Summit", "Technology", "Education"],
    },
    {
      id: 6,
      name: "Middle East Creator Forum",
      image: "/placeholder.svg?height=200&width=400",
      date: "November 15-17, 2025",
      location: "Dubai, UAE",
      description:
        "Bringing together creators from across the Middle East to discuss regional trends, challenges, and opportunities.",
      attendees: 30,
      tags: ["Forum", "Regional", "Networking"],
    },
  ]

  return (
    <div className="container mx-auto py-2">
      <div className="flex flex-col gap-6">
        <Header title="Events" description="Explore upcoming and past events for content creators" />

            <div className="grid gap-6 md:grid-cols-4">
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Event Type</h3>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-conference" />
                          <label htmlFor="type-conference" className="text-sm">
                            Conference
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-summit" />
                          <label htmlFor="type-summit" className="text-sm">
                            Summit
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-expo" />
                          <label htmlFor="type-expo" className="text-sm">
                            Expo
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-festival" />
                          <label htmlFor="type-festival" className="text-sm">
                            Festival
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-workshop" />
                          <label htmlFor="type-workshop" className="text-sm">
                            Workshop
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Regions</h3>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="region-north-america" />
                          <label htmlFor="region-north-america" className="text-sm">
                            North America
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="region-europe" />
                          <label htmlFor="region-europe" className="text-sm">
                            Europe
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="region-asia" />
                          <label htmlFor="region-asia" className="text-sm">
                            Asia
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="region-africa" />
                          <label htmlFor="region-africa" className="text-sm">
                            Africa
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
                      <h3 className="text-sm font-medium">Date Range</h3>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label htmlFor="date-from" className="text-xs">
                              From
                            </label>
                            <Input id="date-from" type="date" className="mt-1" />
                          </div>
                          <div>
                            <label htmlFor="date-to" className="text-xs">
                              To
                            </label>
                            <Input id="date-to" type="date" className="mt-1" />
                          </div>
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
                      <Input placeholder="Search events..." className="pl-9" />
                    </div>
                    <Select defaultValue="date-asc">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date-asc">Date (Soonest)</SelectItem>
                        <SelectItem value="date-desc">Date (Latest)</SelectItem>
                        <SelectItem value="attendees-high">Most Attendees</SelectItem>
                        <SelectItem value="attendees-low">Least Attendees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {events.map((event) => (
                      <Link href={`/events/${event.id}`} key={event.id}>
                        <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                          <div className="relative h-40 w-full">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardHeader className="p-4">
                            <CardTitle className="text-xl">{event.name}</CardTitle>
                            <CardDescription className="flex flex-col gap-1">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
                            <div className="mt-3 flex items-center gap-2">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.attendees} creators attending</span>
                            </div>
                          </CardContent>
                          <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
                            {event.tags.map((tag) => (
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

            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
              <p className="text-muted-foreground">Past events will be displayed here</p>
            </div>

            <div className="flex h-96 items-center justify-center rounded-md border border-dashed">
              <p className="text-muted-foreground">Calendar view coming soon</p>
            </div>
      </div>
    </div>
  )
}
