import { NavigationClient, NavigationOptions } from "@azure/msal-browser";
import { useRouter } from "next/router";

/**
 * This is an example for overriding the default function MSAL uses to navigate to other urls in your webpage
 */
type NRouter = ReturnType<typeof useRouter>


export class CustomNavigationClient extends NavigationClient {
    router: NRouter;

    constructor(router: NRouter) {
        super();
        this.router = router;
    }

    /**
     * Navigates to other pages within the same web application
     * You can use the useRouter hook provided by next.js to take advantage of client-side routing
     * @param url
     * @param options
     */
    async navigateInternal(url: string, options: NavigationOptions) {
        const relativePath = url.replace(window.location.origin, "");
        if (options.noHistory) {
            this.router.replace(relativePath);
        } else {
            this.router.push(relativePath);
        }

        return false;
    }
}
