import React from "react";
import {IconBaseProps, IconType} from "react-icons";
import {renderToStaticMarkup} from "react-dom/server";

export function reactSvgComponentToMarkupString(component: IconType, type?: IconBaseProps) {
	return (
		`data:image/svg+xml,${encodeURIComponent(
			renderToStaticMarkup(React.createElement(component, type)))}`
	)
}