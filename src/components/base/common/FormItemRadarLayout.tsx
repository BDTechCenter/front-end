import { FormTypeItem } from "@/api/types/all/type";

interface ModalCreateItemRadarProps {
	formData: FormTypeItem;
}

export function FormItemRadarLayout({ formData }: ModalCreateItemRadarProps) {
	return <div>{formData.defaultValues?.title}</div>;
}
