import type { ModuleMetadata } from '../helpers/module/module.helper';

export function Module(metadata: ModuleMetadata): ClassDecorator {
	return (target: Function) => {
		for (const property in metadata) {
			if (metadata.hasOwnProperty(property)) {
				Reflect.defineMetadata(property, (metadata as any)[property], target);
			}
		}
	};
}
