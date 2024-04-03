"use client";

import RouteGuard from "@/components/base/common/RouteGuard";
import { msalInstance } from "@/lib/sso/msalInstance";
import { MsalProvider } from "@azure/msal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<MsalProvider instance={msalInstance}>
			<RouteGuard>
				<ToastContainer />
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</RouteGuard>
		</MsalProvider>
	);
}
