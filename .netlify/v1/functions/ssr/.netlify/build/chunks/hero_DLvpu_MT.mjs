const hero = new Proxy({"src":"/portfolio/_astro/hero.CDQHw4LG.png","width":315,"height":377,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/carlospetit/Documents/Develop/portfolio/src/assets/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
