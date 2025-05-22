import { SidebarTrigger } from "./ui/sidebar";


export default function Header({ title, description }: { title: string; description: string }) {

    return (
        <header className="flex flex-col shrink-0">
            <div className="flex gap-2 border-b">
                <div className="flex flex-1 items-center gap-2 px-3">
                    <SidebarTrigger className="-ms-4" />
                    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                </div>
            </div>
            <p className="text-muted-foreground mb-5">{description}</p>
        </header>
    )
}