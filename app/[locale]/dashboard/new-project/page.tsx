"use client";
import { Fragment } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createProject } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ImageUpload from "@/components/image-upload";
const formSchema = z.object({
	title: z.string().min(5, {
		message: "Title must be at least 5 characters.",
	}),
	image: z.string().min(5, {
		message: "Image is required",
	}),
});

const Page: NextPage = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			image: "",
		},
	});

	const isLoading = form.formState.isSubmitting;
	const router = useRouter();

	return (
		<Fragment>
			<Card className="lg:w-1/2 mx-auto">
				<CardHeader>
					<CardTitle>Create Project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-3xl">
											Ttile
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Title"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											This is the project public title.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="image"
								render={({ field }) => (
									<FormItem className="flex flex-col space-y-5">
										<FormLabel className="font-bold text-3xl">
											Upload Image
										</FormLabel>
										<FormControl>
											<ImageUpload
												disabled={isLoading}
												onChange={field.onChange}
												value={field.value}
											/>
										</FormControl>
										<FormDescription>
											This is the project image.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<CardFooter className="flex justify-between">
								<Button
									onClick={() => router.back()}
									variant="outline"
								>
									Cancel
								</Button>
								<Button type="submit" disabled={isLoading}>
									Submit
								</Button>
							</CardFooter>
						</form>
					</Form>
				</CardContent>
			</Card>
		</Fragment>
	);
	async function onSubmit(values: z.infer<typeof formSchema>) {
		await createProject({
			title: values.title,
			file: values.image,
		});
		form.reset();
		window.location.replace("/dashboard/projects");
		toast({
			variant: "success",
			title: "You successfuly added a new project.",
		});
	}
};

export default Page;