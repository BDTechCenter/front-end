"use client";

import { MsalProvider } from "@azure/msal-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { msalInstance } from "@/lib/sso/msalInstance";
import RouteGuard from "@/components/base/common/RouteGuard";
import { queryClient } from "./queryClient";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<MsalProvider instance={msalInstance}>
			{/* <RouteGuard> */}
			<Toaster />
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools />
			</QueryClientProvider>
			{/* </RouteGuard> */}
		</MsalProvider>
	);
}
