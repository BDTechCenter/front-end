"use client";

import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { appRoles } from "@/lib/sso/authConfig";
import { capitalize } from "@/lib/utils";
import { RoleGuard } from "../common/RoleGuard";
import { CommentsUserList } from "./comment/CommentsUserList";
import { ArticleUserList } from "./article/ArticleUserList";
import { TechUserTable } from "./radar/TechUserTable";

export function TabsUser() {
	const searchParams = useSearchParams();
	const status = searchParams.get("status");
	const filterStatus = status !== null ? status : "published";

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
			only: "published",
		},
		{
			name: "tech",
			content: (
				<TabsContent key="tech" value="tech">
					{/* <TechUserList /> */}
					<TechUserTable />
				</TabsContent>
			),
			roles: [appRoles.Admin, appRoles.BDUser],
		},
		{
			name: "review",
			content: (
				<TabsContent key="review" value="review">
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
					if (!tab.only || tab.only === filterStatus) {
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
					}
				})}
			</TabsList>
			{tabsContent.map((tab) => {
				if (!tab.only || tab.only === filterStatus) {
					return tab.roles ? (
						<RoleGuard roles={tab.roles} key={tab.name + "-content"}>
							{tab.content}
						</RoleGuard>
					) : (
						tab.content
					);
				}
			})}
		</Tabs>
	);
}
