"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/logo";

const DesktopFooter: React.FC = () => {
	const { t } = useTranslation();
	const navLinks = [
		"07753506070",
		"07853506070",
		"info@masaknalbilad.com",
		"Iraq, Baghdad, Karrada",
	];
	const navTabs = [
		{
			text: t("common:serviceoffers"),
			func: redirectService,
		},
		{
			text: t("common:projects"),
			func: redirectProjects,
		},
		{
			text: t("common:commercialagencies"),
			func: redirectAgencies,
		},
	];
	return (
		<div className="flex flex-col w-screen space-y-16">
			<div className="flex justify-between">
				<div className="flex flex-col space-y-5">
					<Logo />
					<p className="w-52 text-gray-500 font-extralight">
						{t("common:logodescription")}
					</p>
				</div>
				<div className="flex space-x-10">
					<Separator
						orientation="vertical"
						className="ltr:mr-7 rtl:ml-7"
					/>
					<ul className="space-y-3">
						<li className="font-bold">{t("common:home")}</li>
						{navTabs.map((tab, i) => (
							<li
								className="cursor-pointer"
								onClick={tab.func}
								key={i}
							>
								{tab.text}
							</li>
						))}
					</ul>
				</div>
				<div className="flex">
					<Separator
						orientation="vertical"
						className="ltr:mr-7 rtl:ml-7"
					/>
					<ul className="flex flex-col justify-between">
						{navLinks.map((link, i) => (
							<li key={i}>{link}</li>
						))}
					</ul>
				</div>
				<div className="flex">
					<Separator
						orientation="vertical"
						className="ltr:mr-7 rtl:ml-7"
					/>
					<div className="space-y-10">
						<h1>{t("common:footerfollow")}</h1>
						<div className="flex space-x-5">
							<Facebook fill="black" />
							<Instagram color="white" fill="black" />
							<Linkedin fill="black" />
							<Twitter fill="black" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center py-6 space-y-6 font-light text-gray-500">
				<Separator />

				<p>{t("common:copyright")}</p>
			</div>
		</div>
	);

	function redirectService() {
		window.location.replace("/services");
	}
	function redirectProjects() {
		window.location.replace("/projects");
	}
	function redirectAgencies() {
		window.location.replace("/agencies");
	}
};

export default DesktopFooter;
