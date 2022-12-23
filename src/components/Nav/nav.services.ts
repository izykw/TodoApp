export function getButton(target: HTMLElement): HTMLElement | null {
	const targetName = target.tagName.toLowerCase();

	if(targetName === 'path') {
		const svg = target.parentElement as HTMLElement;
		return svg?.parentElement;
	}

	if(targetName === 'svg') {
		return target.parentElement;
	}

	return target;
}