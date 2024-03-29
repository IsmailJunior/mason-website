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
	caption: z.string().min(10, {
		message: "Caption must be at least 10 characters.",
	}),
	thumnail: z.string().min(5, {
		message: "You must provide thumnail.",
	}),
	firstImage: z.string().min(5, {
		message: "You must provide image.",
	}),
	secondImage: z.string().min(5, {
		message: "You must provide image.",
	}),
	thirdImage: z.string().min(5, {
		message: "You must provide image.",
	}),
});

const Page: NextPage = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			caption: "",
			thumnail: "",
			firstImage: "",
			secondImage: "",
			thirdImage: "",
		},
	});

	const isLoading = form.formState.isSubmitting;
	const router = useRouter();

	return (
		<Fragment>
			<Card className="lg:w-1/2 mx-auto">
				<CardHeader>
					<CardTitle className="text-base md:text-3xl">
						Create Project
					</CardTitle>
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
										<FormLabel className="font-bold text-base lg:text-3xl">
											Title
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
								name="caption"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-bold text-base lg:text-3xl">
											Caption
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Caption"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											This is the project public caption.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="thumnail"
								render={({ field }) => (
									<FormItem className="flex flex-col space-y-5">
										<FormLabel className="font-bold text-base lg:text-3xl">
											Upload Thumnail
										</FormLabel>
										<FormControl>
											<ImageUpload
												disabled={isLoading}
												onChange={field.onChange}
												value={field.value}
											/>
										</FormControl>
										<FormDescription>
											This is the project thumnail.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex flex-wrap xl:flex-nowrap justify-around space-x-3">
								<FormField
									control={form.control}
									name="firstImage"
									render={({ field }) => (
										<FormItem className="flex flex-col space-y-5">
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
								<FormField
									control={form.control}
									name="secondImage"
									render={({ field }) => (
										<FormItem className="flex flex-col space-y-5">
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
								<FormField
									control={form.control}
									name="thirdImage"
									render={({ field }) => (
										<FormItem className="flex flex-col space-y-5">
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
							</div>
							<CardFooter>
								<div className="mx-auto w-96 flex flex-col md:justify-between md:flex-row space-y-7 md:space-y-0">
									<Button
										className="w-block"
										size="lg"
										onClick={() => router.back()}
										variant="outline"
									>
										Cancel
									</Button>
									<Button
										size="lg"
										type="submit"
										disabled={isLoading}
									>
										Submit
									</Button>
								</div>
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
			caption: values.caption,
			thumnail: values.thumnail,
			firstImage: values.firstImage,
			secondImage: values.secondImage,
			thirdImage: values.thirdImage,
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
