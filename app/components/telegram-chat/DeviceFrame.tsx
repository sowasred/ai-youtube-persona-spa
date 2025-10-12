"use client"

import { useId } from "react"
import clsx from "clsx"

interface DeviceFrameProps {
	width?: number
	height?: number
	src?: string
	className?: string
	children?: React.ReactNode
}

const VIEWBOX_WIDTH = 433
const VIEWBOX_HEIGHT = 882

export function DeviceFrame({
	width = VIEWBOX_WIDTH,
	height = VIEWBOX_HEIGHT,
	src,
	className,
	children,
}: DeviceFrameProps) {
	const clipPathId = `${useId().replace(/:/g, "_")}-roundedCorners`

	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={clsx("drop-shadow-[0_28px_60px_rgba(15,23,42,0.35)]", className)}
		>
			<path
				d="M10 73C10 32.6832 42.6832 0 83 0H349C389.317 0 422 32.6832 422 73V809C422 849.317 389.317 882 349 882H83C42.6832 882 10 849.317 10 809V73Z"
				className="fill-[#0B0B0F]"
				fill="#0B0B0F"
			/>
			<path
				d="M0 172C0 171.448 0.447715 171 1 171H7C7.55228 171 8 171.448 8 172V202C8 202.552 7.55228 203 7 203H1C0.447715 203 0 202.552 0 202V172Z"
				className="fill-[#0B0B0F]"
				fill="#0B0B0F"
			/>
			<path
				d="M1 235C1 234.448 1.44772 234 2 234H8C8.55228 234 9 234.448 9 235V299C9 299.552 8.55228 300 8 300H2C1.44772 300 1 299.552 1 299V235Z"
				className="fill-[#0B0B0F]"
				fill="#0B0B0F"
			/>
			<path
				d="M1 320C1 319.448 1.44772 319 2 319H8C8.55228 319 9 319.448 9 320V384C9 384.552 8.55228 385 8 385H2C1.44772 385 1 384.552 1 384V320Z"
				className="fill-[#0B0B0F]"
				fill="#0B0B0F"
			/>
			<path
				d="M424 280C424 279.448 424.448 279 425 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H425C424.448 385 424 384.552 424 384V280Z"
				className="fill-[#0B0B0F]"
				fill="#0B0B0F"
			/>
			<path
				d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
				className="fill-[#111315]"
				fill="#111315"
			/>
			<path
				d="M28 75C28 46.833 50.833 24 79 24H353C381.167 24 404 46.833 404 75V807C404 835.167 381.167 858 353 858H79C50.833 858 28 835.167 28 807V75Z"
				className="fill-[#060708] stroke-[#060708] stroke-[0.5]"
				fill="#060708"
				stroke="#060708"
				strokeWidth={0.5}
			/>

			{src ? (
				<image
					x={21.25}
					y={19.25}
					width={389.5}
					height={843.5}
					preserveAspectRatio="xMidYMid slice"
					style={{ clipPath: `url(#${clipPathId})` }}
					xlinkHref={src}
				/>
			) : null}

			{children ? (
				<foreignObject
					x={21.25}
					y={19.25}
					width={389.5}
					height={843.5}
					clipPath={`url(#${clipPathId})`}
				>
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						style={{ width: "100%", height: "100%" }}
					>
						{children}
					</div>
				</foreignObject>
			) : null}

			<rect x={166} y={32} width={100} height={30} rx={15} fill="#050708" />

			<defs>
				<clipPath id={clipPathId}>
					<rect
						x={21.25}
						y={19.25}
						width={389.5}
						height={843.5}
						rx={55.75}
						ry={55.75}
					/>
				</clipPath>
			</defs>
		</svg>
	)
}
