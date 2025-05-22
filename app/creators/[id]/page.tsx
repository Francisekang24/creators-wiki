import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Globe, Youtube, Twitch, Instagram, Twitter, Calendar, MapPin, Flag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { creators } from "@/lib/mockData"

export default function CreatorProfilePage({ params }: { params: { id: string } }) {

    // Find the creator by ID
    const creator = creators.find((creator) => creator.id === params.id)
    if (!creator) {
        return <div className="container mx-auto py-6">Creator not found</div>
    }

    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case "youtube":
                return <Youtube className="h-5 w-5 text-red-500" />
            case "twitch":
                return <Twitch className="h-5 w-5 text-purple-500" />
            case "instagram":
                return <Instagram className="h-5 w-5 text-pink-500" />
            case "twitter":
                return <Twitter className="h-5 w-5 text-blue-500" />
            default:
                return <Globe className="h-5 w-5" />
        }
    }

    return (
        <div className="container mx-auto py-6">
            <div className="flex flex-col gap-6">
                {/* Cover Image and Profile */}
                <div className="relative">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg md:h-64">
                        <Image src={creator.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" priority />
                    </div>

                    <div className="relative mx-auto -mt-16 flex w-full max-w-4xl flex-col gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm md:flex-row md:p-6">
                        <div className="flex flex-col items-center gap-4 md:flex-row">
                            <Avatar className="h-24 w-24 border-4 border-background md:h-32 md:w-32">
                                <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
                                <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl font-bold md:text-3xl">{creator.name}</h1>
                                    <span className="text-xl" title={creator.country}>
                                        {creator.flag}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <span>@{creator.username}</span>
                                    <span>•</span>
                                    <span>{creator.country}</span>
                                </div>
                                <div className="mt-1 flex flex-wrap gap-2">
                                    {creator.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-col gap-2 md:ml-auto md:mt-0 md:justify-center">
                            <Button className="gap-2" asChild>
                                <a href={creator.mainPlatformUrl} target="_blank" rel="noopener noreferrer">
                                    {getPlatformIcon(creator.mainPlatform)}
                                    Follow on {creator.mainPlatform.charAt(0).toUpperCase() + creator.mainPlatform.slice(1)}
                                </a>
                            </Button>
                            <div className="text-center text-sm text-muted-foreground">{creator.followers} followers</div>
                        </div>
                    </div>
                </div>

                {/* Bio and Details */}
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="md:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>About</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">{creator.bio}</p>

                                <Separator className="my-4" />

                                <div className="grid gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span>Joined {creator.joined}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Flag className="h-4 w-4 text-muted-foreground" />
                                        <span>From {creator.country}</span>
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                <h3 className="mb-2 text-sm font-medium">Social Platforms</h3>
                                <div className="grid gap-2">
                                    {creator.socialLinks.map((link) => (
                                        <a
                                            key={link.platform}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between rounded-md p-2 text-sm transition-colors hover:bg-muted"
                                        >
                                            <div className="flex items-center gap-2">
                                                {getPlatformIcon(link.platform)}
                                                <span>{link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}</span>
                                            </div>
                                            <div className="text-xs text-muted-foreground">{link.followers}</div>
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-2">
                        <Tabs defaultValue="events">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="events">Events</TabsTrigger>
                                <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
                                <TabsTrigger value="comments">Comments</TabsTrigger>
                            </TabsList>

                            <TabsContent value="events" className="mt-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Events</CardTitle>
                                        <CardDescription>Events {creator.name} has participated in</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4">
                                            {creator.events.map((event) => (
                                                <div key={event.id} className="flex flex-col gap-2 rounded-lg border p-4">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="font-medium">{event.name}</h3>
                                                        <Badge variant={event.role === "Speaker" ? "default" : "outline"}>{event.role}</Badge>
                                                    </div>
                                                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="h-4 w-4" />
                                                            <span>{event.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="h-4 w-4" />
                                                            <span>{event.location}</span>
                                                        </div>
                                                        {event.topic && (
                                                            <div className="mt-1">
                                                                <span className="font-medium">Topic:</span> {event.topic}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline" className="w-full">
                                            View All Events
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>

                            <TabsContent value="collaborations" className="mt-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Collaborations</CardTitle>
                                        <CardDescription>Creators {creator.name} has collaborated with</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {creator.collaborations.map((collab) => (
                                                <Link href={`/creators/${collab.id}`} key={collab.id}>
                                                    <div className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-muted">
                                                        <Avatar className="h-10 w-10">
                                                            <AvatarImage src={collab.avatar || "/placeholder.svg"} alt={collab.name} />
                                                            <AvatarFallback>{collab.name.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1">
                                                            <div className="font-medium">{collab.name}</div>
                                                            <div className="text-xs text-muted-foreground">@{collab.username}</div>
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {collab.count} {collab.count === 1 ? "collab" : "collabs"}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-4">
                                        <Button variant="outline" className="w-full">
                                            View All Collaborations
                                        </Button>
                                        <div className="w-full rounded-lg border p-4">
                                            <h3 className="mb-2 text-center text-sm font-medium">Collaboration Network</h3>
                                            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                                                <p className="text-sm text-muted-foreground">Network visualization coming soon</p>
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TabsContent>

                            <TabsContent value="comments" className="mt-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Comments</CardTitle>
                                        <CardDescription>Community feedback and discussions</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4">
                                            {creator.comments.map((comment) => (
                                                <div key={comment.id} className="flex gap-3 rounded-lg border p-4">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                                                        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <div className="font-medium">{comment.user.name}</div>
                                                            <div className="text-xs text-muted-foreground">{comment.date}</div>
                                                        </div>
                                                        <p className="mt-1 text-sm">{comment.content}</p>
                                                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                                                            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="h-4 w-4"
                                                                >
                                                                    <path d="M7 10v12" />
                                                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                                                </svg>
                                                                <span>{comment.likes}</span>
                                                            </Button>
                                                            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="h-4 w-4"
                                                                >
                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                </svg>
                                                                <span>Reply</span>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-4">
                                        <div className="w-full">
                                            <textarea
                                                className="w-full rounded-md border p-2 text-sm"
                                                placeholder="Add a comment..."
                                                rows={3}
                                            />
                                            <div className="mt-2 flex justify-end">
                                                <Button>Post Comment</Button>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full">
                                            View All Comments
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
