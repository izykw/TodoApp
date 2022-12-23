import {IconBaseProps, IconType} from "react-icons";
import {renderToStaticMarkup} from "react-dom/server";
import React from "react";

export function reactSvgComponentToMarkupString(component: IconType, type: IconBaseProps) {
	return (
		`data:image/svg+xml,${encodeURIComponent(
			renderToStaticMarkup(React.createElement(component, type)))}`
	)
}

export function getSvg(target: HTMLElement): HTMLElement | null {
	const targetName = target.tagName.toLowerCase();
	if(targetName === 'path') {
		return target.parentElement;
	}

	return target;
}