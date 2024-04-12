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
import { AlertType } from "@/api/types/all/type";

interface AlertLayoutProps {
	alert: AlertType;
}

export default function AlertLayout({ alert }: AlertLayoutProps) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild className="p-5 text-lg">
				<Button variant={alert.variantButton} className="rounded-sm mt-2 border p-2 font-semibold text-base">{alert.nameButton}</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{alert.title}</AlertDialogTitle>
					<AlertDialogDescription>{alert.description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction className="bg-transparent hover:bg-transparent">
						<Button form={alert?.idForm} type={alert?.type} variant="default" onClick={alert?.Action}>{alert.nameButtonAction}</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
