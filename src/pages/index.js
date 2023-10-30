import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Icon, Strong, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { IoLogoDropbox, IoIosArrowRoundForward, IoMdPeople, IoIosTrash } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="40px 0 40px 0" background="#1E1F24" quarkly-title="Description-11">
			<Override
				slot="SectionContent"
				flex-wrap="wrap"
				max-width="1440px"
				align-items="flex-start"
				flex-direction="row"
			/>
			<Box border-color="--color-light" width="100%" border-width="0px 0px 1px 0px" border-style="solid">
				<Text margin="0px 0px 2vh 0px" color="--light" font="--lead">
					Capabilities & Process
				</Text>
			</Box>
			<Box width="100%" margin="3vw 0px 0px 0px">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--light"
					letter-spacing="-.05em"
					lg-font="normal 400 70px/1.1em &quot;Inter&quot;, sans-serif"
					sm-font="normal 400 40px/1.1em &quot;Inter&quot;, sans-serif"
				>
					User experience
					<br />
					Strategy
					<br />
					User interface
					<br />
					Leadership
				</Text>
			</Box>
			<Box
				margin="156px 0px 100px 0px"
				lg-margin="56px 0px 30px 0px"
				md-display="none"
				width="33.333%"
				padding="20px 20px 20px 20px"
			/>
			<Box
				width="33.333%"
				padding="20px 20px 20px 20px"
				margin="156px 0px 100px 0px"
				lg-margin="56px 0px 30px 0px"
				md-width="50%"
				sm-margin="20px 0px 20px 0px"
				sm-width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
					Human-centric
					<br />
				</Text>
				<Text margin="40px 0px 0px 0px" font="--base" color="--light">
					No matter what the context, all design activity is social in nature, and any social innovation will bring us back to the human-centric point of view
				</Text>
			</Box>
			<Box
				sm-width="100%"
				width="33.333%"
				padding="20px 20px 20px 20px"
				margin="156px 0px 100px 0px"
				lg-margin="56px 0px 30px 0px"
				md-width="50%"
				sm-margin="20px 0px 20px 0px"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
					The tangibility rule
				</Text>
				<Text margin="40px 0px 0px 0px" font="--base" color="--light">
					Making ideas tangible in the form of prototypes enables people to communicate  more effectively throughout the design process
					<br />
				</Text>
			</Box>
			<Box
				md-width="50%"
				sm-margin="20px 0px 20px 0px"
				sm-width="100%"
				width="33.333%"
				padding="20px 20px 20px 20px"
				margin="156px 0px 100px 0px"
				lg-margin="56px 0px 30px 0px"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
					All design is a redesign
				</Text>
				<Text font="--base" color="--light" margin="40px 0px 0px 0px">
					While technology and social circumstances may change and evolve, basic human needs remain unchanged. Essentially only redesign the means of fulfilling these needs or reaching desired outcomes
				</Text>
			</Box>
			<Box
				md-width="50%"
				sm-margin="20px 0px 20px 0px"
				sm-width="100%"
				width="33.333%"
				padding="20px 20px 20px 20px"
				margin="156px 0px 100px 0px"
				lg-margin="56px 0px 30px 0px"
			>
				<Text color="--light" margin="0px 0px 0px 0px" font="--headline3">
					Business driven
				</Text>
				<Text margin="40px 0px 0px 0px" font="--base" color="--light">
					Measure business success and transform customer experience  in fact is a matter to be able to connect and communicate with stakeholders in order to understand the most important business needs
					<br />
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="40px 0"
			sm-min-height="auto"
			display="flex"
			background="--color-darkL2"
			quarkly-title="Advantages/Features-10"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 64px 0px"
				lg-justify-content="flex-start"
			>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					text-align="left"
				>
					We're here to help
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--lightD2"
					width="60%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					text-align="left"
					lg-width="100%"
					lg-max-width="720px"
				>
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam

voluptatum cupiditate veritatis in accusamus quisquam.
				</Text>
			</Box>
			<Box
				width="100%"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="1fr"
				lg-grid-gap="48px"
			>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoLogoDropbox}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--light" margin="0px 0px 6px 0px">
							<Strong>
								Unlimited inboxes
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--lightD2">
							Non quo aperiam repellendus quas est est. Eos
aut dolore aut ut sit nesciunt. Ex tempora quia. Sit
nobis consequatur dolores incidunt
						</Text>
					</Box>
					<LinkBox
						flex-direction="row"
						align-items="center"
						justify-content="flex-start"
						color="--red"
						hover-opacity="0.7"
						transition="--opacityOut"
					>
						<Text margin="0px 0px 0px 0px" letter-spacing="0.3px">
							<Strong>
								Learn more
							</Strong>
						</Text>
						<Icon category="io" icon={IoIosArrowRoundForward} size="24px" />
					</LinkBox>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoMdPeople}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--light" margin="0px 0px 6px 0px">
							<Strong>
								Manage team members
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--lightD2">
							Vero eum voluptatem aliquid nostrum voluptatem.

Vitae esse natus. Earum nihil deserunt eos quasi
cupiditate. A inventore et molestiae natus.
						</Text>
					</Box>
					<LinkBox
						flex-direction="row"
						align-items="center"
						justify-content="flex-start"
						color="--red"
						hover-opacity="0.7"
						transition="--opacityOut"
					>
						<Text margin="0px 0px 0px 0px" letter-spacing="0.3px">
							<Strong>
								Learn more
							</Strong>
						</Text>
						<Icon category="io" icon={IoIosArrowRoundForward} size="24px" />
					</LinkBox>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoIosTrash}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--light" margin="0px 0px 6px 0px">
							<Strong>
								Spam report
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--lightD2">
							Et quod quaerat dolorem quaerat architecto
aliquam accusantium. Ex adipisci et doloremque
autem quia quam. Quis eos molestiae at ure
impedit.
						</Text>
					</Box>
					<LinkBox
						flex-direction="row"
						align-items="center"
						justify-content="flex-start"
						color="--red"
						hover-opacity="0.7"
						transition="--opacityOut"
					>
						<Text margin="0px 0px 0px 0px" letter-spacing="0.3px">
							<Strong>
								Learn more
							</Strong>
						</Text>
						<Icon category="io" icon={IoIosArrowRoundForward} size="24px" />
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"653f8adabf8f48001f73a945"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});