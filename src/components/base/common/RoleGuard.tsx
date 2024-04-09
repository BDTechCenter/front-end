"use client"

import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

export const RoleGuard = ({ ...props }) => {
	const { instance } = useMsal();
	const [isAuthorized, setIsAuthorized] = useState(false);

	const onLoad = async () => {
		const currentAccount = instance.getActiveAccount();

		if (currentAccount?.idTokenClaims?.roles) {
			setIsAuthorized(false);
		}

		if (currentAccount && currentAccount.idTokenClaims?.roles) {
			let intersection = props.roles.filter((role: string) =>
				currentAccount.idTokenClaims?.roles?.includes(role)
			);

			if (intersection.length > 0) {
				setIsAuthorized(true);
			}
		}
	};

	useEffect(() => {
		onLoad();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [instance]);

	return <>{isAuthorized ? <div>{props.children}</div> : null}</>;
};
