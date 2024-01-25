import React from "react";
import { useTranslation } from "react-i18next";
import useWtxI18n from "@/hooks/use-wtx-i18n";

import { Separator } from "@/components/ui/separator";
const PresentaionListMobile: React.FC = () => {
	const { t } = useTranslation();
	useWtxI18n();
	return (
		<ul className="max-w-[600px] mx-auto text-3xl flex flex-col space-y-10 h-full">
			<li className="flex flex-col bg-yellow-500 space-y-16 py-10 items-center text-center rounded-3xl">
				<h1 className="font-bold">{t("presentaionlistheaderone")}</h1>
				<Separator />
				<p className="text-xl font-light">
					{t("presentaionlistdescriptionone")}
				</p>
			</li>
			<li className="flex flex-col bg-yellow-500 space-y-16 py-10 items-center text-center rounded-3xl">
				<h1 className="font-bold">{t("presentaionlistheadertwo")}</h1>
				<Separator />
				<p className="text-xl font-light">
					{t("presentaionlistdescriptiontwo")}
				</p>
			</li>

			<li className="flex flex-col text-white bg-slate-900 space-y-16 py-10 items-center text-center rounded-3xl">
				<h1 className="font-bold">{t("presentaionlistheaderthree")}</h1>
				<Separator />
				<p className="text-xl font-light">
					{t("presentaionlistdescriptionthree")}
				</p>
			</li>
			<li className="flex flex-col bg-yellow-500 space-y-16 py-10 items-center text-center rounded-3xl">
				<h1 className="font-bold">{t("presentaionlistheaderfour")}</h1>
				<Separator />
				<p className="text-xl font-light">
					{t("presentaionlistdescriptionfour")}
				</p>
			</li>
		</ul>
	);
};

export default PresentaionListMobile;