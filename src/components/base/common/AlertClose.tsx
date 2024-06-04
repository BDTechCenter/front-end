import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alertDialog";

import { Button } from "@/components/ui/button";

interface AlertLayoutProps {
	alert: {
		open: boolean;
		type?: "submit" | "reset" | "button" | undefined;
		title: string;
		description: string;
		nameButtonAction: string;
		action?: () => void;
		onClickCancel: (e: any) => void
		idForm?: string;
	};
}

export default function AlertClose({ alert }: AlertLayoutProps) {
	return (
		<AlertDialog open={alert.open}>
			<AlertDialogTrigger className="p-5 text-lg" />
			<span />
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{alert.title}</AlertDialogTitle>
					<AlertDialogDescription>{alert.description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={alert.onClickCancel}>Cancel</AlertDialogCancel>
					<AlertDialogAction className="bg-transparent hover:bg-transparent">
						<Button
							form={alert?.idForm}
							type={alert?.type}
							variant="default"
							onClick={alert?.action}
						>
							{alert.nameButtonAction}
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
