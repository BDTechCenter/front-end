import { useMsal } from "@azure/msal-react";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@radix-ui/react-menubar";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { cn } from "@/lib/utils";

export default function SignOutButton({ className }: { className?: string }) {
	const { instance } = useMsal();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleLogout = (logoutType: string) => {
		setAnchorEl(null);

		if (logoutType === "popup") {
			instance.logoutPopup({
				mainWindowRedirectUri: "/",
			});
		} else if (logoutType === "redirect") {
			instance.logoutRedirect();
		}
	};

	return (
		<div className={cn(className)}>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger onClick={(event) => setAnchorEl(event.currentTarget)}>
						<MdAccountCircle />
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem
							onClick={() => handleLogout("popup")}
							key="logoutPopup"
						>
							PopUp
						</MenubarItem>
						<MenubarItem
							onClick={() => handleLogout("redirect")}
							key="logoutRedirect"
						>
							Redirect
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</div>
	);
}
