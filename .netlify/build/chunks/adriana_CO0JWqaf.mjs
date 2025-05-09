const adriana = new Proxy({"src":"/portfolio/_astro/adriana.B6bvdBrU.jpg","width":1920,"height":2400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/carlospetit/Documents/Develop/portfolio/src/assets/adriana.jpg";
							}
							
							return target[name];
						}
					});

export { adriana as default };
