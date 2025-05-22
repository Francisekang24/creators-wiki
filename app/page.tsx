import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Globe, Youtube, Twitch, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"

export default function Home() {

	// Mock data for featured creators
	const featuredCreators = [
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
	]

	// Mock data for upcoming events
	const upcomingEvents = [
		{
			id: 1,
			name: "Creator Summit 2025",
			date: "June 15-18, 2025",
			location: "Los Angeles, CA",
			attendees: 42,
		},
		{
			id: 2,
			name: "African Content Festival",
			date: "July 22-24, 2025",
			location: "Lagos, Nigeria",
			attendees: 28,
		},
		{
			id: 3,
			name: "Digital Creators Conference",
			date: "August 5-7, 2025",
			location: "London, UK",
			attendees: 35,
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
			default:
				return <Globe className="h-4 w-4" />
		}
	}

	return (

				<div className="flex flex-col gap-4 h-screen py-2">
					<Header 
						title="Content Creators Wiki" 
						description="Discover and explore digital creators from around the world" 
					/>
					<main className="flex-1">
						<div className="flex flex-col gap-4 md:flex-row">
							<div className="relative flex-1">
								<Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
								<Input placeholder="Search by name, country, or platform..." className="pl-9" />
							</div>
							<Button variant="outline" className="gap-2">
								<Filter className="h-4 w-4" />
								<span>Filters</span>
							</Button>
							<Button>
								<span>Search</span>
							</Button>
						</div>
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-5">
							{featuredCreators.map((creator) => (
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
						<div className="mt-4 flex justify-center">
							<Button variant="outline" asChild>
								<Link href="/creators">View All Creators</Link>
							</Button>
						</div>
						<div className="grid gap-4 md:grid-cols-3 mt-5">
							{upcomingEvents.map((event) => (
								<Link href={`/events/${event.id}`} key={event.id}>
									<Card className="h-full transition-all hover:shadow-md">
										<CardHeader>
											<CardTitle className="text-xl">{event.name}</CardTitle>
											<CardDescription>{event.date}</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<Globe className="h-4 w-4" />
												<span>{event.location}</span>
											</div>
											<div className="mt-2 text-sm">
												<span>{event.attendees} creators attending</span>
											</div>
										</CardContent>
										<CardFooter>
											<Button variant="outline" size="sm" className="w-full">
												View Details
											</Button>
										</CardFooter>
									</Card>
								</Link>
							))}
						</div>
						<div className="mt-4 flex justify-center mb-2">
							<Button variant="outline" asChild>
								<Link href="/events">View All Events</Link>
							</Button>
						</div>
					</main>
					<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

					</footer>
				</div>
	);
}

