"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { ImageIcon } from "lucide-react";

interface ImageUploadProps {
	value: string;
	onChange: (src: string) => void;
	disabled?: boolean;
}

export const ImageUpload = ({
	value,
	onChange,
	disabled,
}: ImageUploadProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return false;
	}

	return (
		<div className="space-y-4 w-full flex flex-col justify-center items-center">
			<CldUploadButton
				options={{ maxFiles: 1 }}
				onUpload={(result: any) => onChange(result.info.secure_url)}
				uploadPreset="uxvsxycu"
			>
				<div
					className="
            p-4 
            border-4 
            border-dashed
            border-primary/10 
            rounded-lg 
            hover:opacity-75 
            transition 
            flex 
            flex-col 
            space-y-2 
            items-center 
            justify-center
          "
				>
					<div className="relative h-40 w-40 flex justify-center items-center">
						{value && (
							<Image
								unoptimized
								fill
								alt="Upload"
								src={value}
								className="rounded-lg object-cover"
							/>
						)}
						<ImageIcon size={60} />
					</div>
				</div>
			</CldUploadButton>
		</div>
	);
};

export default ImageUpload;