import { Button } from "@/components/ui/button";
import { loginRequest } from "@/lib/sso/authConfig";
import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";

export default function SignInButton({ className }: { className?: string }) {
	const { instance } = useMsal();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleLogin = (loginType: string) => {
		setAnchorEl(null);

		if (loginType === "popup") {
			instance.loginPopup(loginRequest).catch((e) => {
				console.error(`loginPopup failed: ${e}`);
			});
		} else if (loginType === "redirect") {
			instance.loginRedirect(loginRequest).catch((e) => {
				console.error(`loginRedirect failed: ${e}`);
			});
		}
	};

	return (
		<div className={cn(className)}>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger onClick={(event) => setAnchorEl(event.currentTarget)}>
						Login
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem onClick={() => handleLogin("popup")} key="loginPopup">
							PopUp
						</MenubarItem>
						<MenubarItem
							onClick={() => handleLogin("redirect")}
							key="loginRedirect"
						>
							Redirect
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</div>
	);
}
