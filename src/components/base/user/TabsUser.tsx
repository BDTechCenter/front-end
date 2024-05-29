"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { appRoles } from "@/lib/sso/authConfig";
import { capitalize } from "@/lib/utils";
import { RoleGuard } from "../common/RoleGuard";
import { CommentsUserList } from "./CommentsUserList";
import { ArticleUserList } from "./ArticleUserList";

export function TabsUser() {
	const tabsContent = [
		{
			name: "articles",
			content: (
				<TabsContent key="articles" value="articles">
					<ArticleUserList />
				</TabsContent>
			),
			roles: [appRoles.Admin, appRoles.BDUser],
		},
		{
			name: "comments",
			content: (
				<TabsContent key="comments" value="comments">
					<CommentsUserList />
				</TabsContent>
			),
		},
		{
			name: "tech",
			content: (
				<TabsContent key="tech" value="tech">
					Tech Content
				</TabsContent>
			),
			roles: [appRoles.Admin, appRoles.BDUser],
		},
		{
			name: "revision",
			content: (
				<TabsContent key="revision" value="revision">
					Revision Content
				</TabsContent>
			),
			roles: [appRoles.Admin],
		},
	];

	return (
		<Tabs defaultValue={tabsContent[0].name} className="w-full">
			<TabsList className="w-full">
				{tabsContent.map((tab) => {
					return tab.roles ? (
						<RoleGuard roles={tab.roles} key={tab.name + "-trigger"}>
							<TabsTrigger className="w-full" key={tab.name} value={tab.name}>
								{capitalize(tab.name)}
							</TabsTrigger>
						</RoleGuard>
					) : (
						<TabsTrigger className="w-full" key={tab.name} value={tab.name}>
							{capitalize(tab.name)}
						</TabsTrigger>
					);
				})}
			</TabsList>
			{tabsContent.map((tab) => {
				return tab.roles ? (
					<RoleGuard roles={tab.roles} key={tab.name + "-content"}>
						{tab.content}
					</RoleGuard>
				) : (
					tab.content
				);
			})}
		</Tabs>
	);
}
