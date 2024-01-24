"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import LogosMarquee from "@/components/logos-marquee/logos-marquee";
import ContactCardDesktop from "@/components/contact-card-desktop";
import ContactCardMobile from "@/components/contact-card-mobile";
const Agencies: React.FC = () => {
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });

	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [isMinWidthMedium, mediaQuery]);
	return (
		<section className="relative mb-56 mt-36 h-[900px]">
			<div className="bg-gray-100 p-10 h-[700px]">
				<div className="container">
					<LogosMarquee />
					{renderResponsiveContactCard()}
				</div>
			</div>
		</section>
	);

	function renderResponsiveContactCard() {
		if (isMinWidthMedium) return <ContactCardMobile />;
		return <ContactCardDesktop />;
	}
};

export default Agencies;
