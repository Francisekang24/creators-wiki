"use client"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Search from "./search"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Home, Users, Calendar, Network, Globe, Youtube, Twitch, Instagram, Twitter, LogIn, ChevronDown, Combine } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { LanguageSelector } from "@/components/language-selector"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

	const pathname = usePathname()
	const { dictionary } = useLanguage()

	const mainNavItems = [
		{ name: dictionary.navigation.home, href: "/", icon: Home },
		{ name: dictionary.navigation.creators, href: "/creators", icon: Users },
		{ name: dictionary.navigation.events, href: "/events", icon: Calendar },
		{ name: dictionary.navigation.collaborations, href: "/collaborations", icon: Network },
	]

	const regionNavItems = [
		{ name: dictionary.regions.western, href: "/regions/western", icon: Globe },
		{ name: dictionary.regions.africa, href: "/regions/africa", icon: Globe },
		{ name: dictionary.regions.asia, href: "/regions/asia", icon: Globe },
		{ name: dictionary.regions.middleEast, href: "/regions/middle-east", icon: Globe },
	]

	const platformNavItems = [
		{ name: dictionary.platforms.youtube, href: "/platforms/youtube", icon: Youtube },
		{ name: dictionary.platforms.twitch, href: "/platforms/twitch", icon: Twitch },
		{ name: dictionary.platforms.instagram, href: "/platforms/instagram", icon: Instagram },
		{ name: dictionary.platforms.twitter, href: "/platforms/twitter", icon: Twitter },
	]

	return (
		<Sidebar {...props} collapsible="icon" className="flex flex-col">
			<SidebarHeader>
				<div className="flex items-center gap-2">
					<Link
						href="/"
						className="flex items-center gap-2 group-data-[collapsible=icon]:flex-col"
						aria-label="Text0 Home"
					>
						<div className="flex items-center justify-center rounded-lg bg-foreground p-2 transition-colors duration-150 hover:bg-foreground/80">
							<Combine
								className="h-4 w-4 text-primary group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4"
							/>
						</div>
						<span className="font-semibold text-foreground group-data-[collapsible=icon]:hidden">
							CCWiki
						</span>
					</Link>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<Search />
				</SidebarGroup>
				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Home
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent>
								<SidebarMenu>
									{mainNavItems.map((item) => (
										<SidebarMenuItem key={item.name}>
											<SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
												<Link href={item.href}>
													<item.icon className="h-4 w-4" />
													<span>{item.name}</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Region
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent>
								<SidebarMenu>
									{regionNavItems.map((item) => (
										<SidebarMenuItem key={item.name}>
											<SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
												<Link href={item.href}>
													<item.icon className="h-4 w-4" />
													<span>{item.name}</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
