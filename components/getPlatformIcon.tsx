import { Globe } from "lucide-react"
import { InstagramIcon, TwitchIcon, TwitterIcon, YoutubeIcon } from "./socialmediaIcons"


const getPlatformIcon = (platform: string) => {

    switch (platform) {
        case "youtube":
            return <YoutubeIcon className="h-5 w-5 text-red-500" />
        case "twitch":
            return <TwitchIcon className="h-5 w-5 text-purple-500" />
        case "instagram":
            return <InstagramIcon className="h-5 w-5 text-pink-500" />
        case "twitter":
            return <TwitterIcon className="h-5 w-5 text-blue-500" />
        default:
            return <Globe className="h-5 w-5" />
    }
}

export default getPlatformIcon;