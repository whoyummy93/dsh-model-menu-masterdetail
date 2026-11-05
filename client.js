window.__ModuleLoader__.load({
	id: "dsh-model-menu-masterdetail",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let react_dom = require("react-dom");

		//#region clsx (vendored minimal)
		function r(e) {
			var t, f, n = "";
			if ("string" == typeof e || "number" == typeof e) n += e;
			else if ("object" == typeof e) if (Array.isArray(e)) {
				var o = e.length;
				for (f = 0; f < o; f++) (t = e[f]) && (f = r(t)) && (n && (n += " "), n += f);
			} else for (f in e) e[f] && (n && (n += " "), n += f);
			return n;
		}
		function clsx() {
			for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
			return n;
		}
		//#endregion

		//#region CSS — same base styles as the builtin seat, plus master-detail layout overrides
		const css = "._7KE1Ra_root{min-width:0;position:relative}._7KE1Ra_trigger{border-radius:var(--dsw-radius-sm);min-width:0;max-width:min(360px,45cqw);height:28px;color:var(--dsw-alias-label-secondary);cursor:pointer;display:flex;align-items:center;gap:6px;padding:0 8px;border:0;background:transparent;font-size:12px;position:relative}._7KE1Ra_trigger:disabled{cursor:default}._7KE1Ra_trigger:focus-visible{outline:1.5px solid var(--dsw-alias-focus-ring);outline-offset:-1.5px}._7KE1Ra_trigger:not(:disabled):hover{color:var(--dsw-alias-label-secondary-hover)}._7KE1Ra_triggerIcon{color:var(--dsw-alias-menu-icon);flex:none}._7KE1Ra_triggerLabel{color:inherit;font-weight:var(--dsw-font-weight-medium);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._7KE1Ra_triggerEffort{color:var(--dsw-alias-label-caption);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._7KE1Ra_chevron{color:var(--dsw-alias-label-caption);flex:none;transition:transform .12s}._7KE1Ra_chevronOpen{transform:rotate(180deg)}._7KE1Ra_menu{z-index:1100;--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);width:max-content;min-width:min(240px,100vw - 32px);max-width:min(420px,100vw - 32px);max-height:min(420px,100vh - 96px);box-shadow:var(--dsw-elevation-menu);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-menu-bg);border:1px solid var(--dsw-elevation-stroke-color);color:var(--dsw-alias-menu-label);overflow:hidden;flex-direction:column;padding:4px;display:flex;position:fixed}._7KE1Ra_twocol{flex-direction:row;display:flex;height:280px;width:412px;min-width:412px;max-height:280px;flex:none;gap:0;padding:0;overflow:hidden;max-height:none}._7KE1Ra_master,._7KE1Ra_detail{display:flex;flex-direction:column;overflow-y:auto;height:100%;max-height:100%}._7KE1Ra_master{width:150px;border-right:1px solid var(--dsw-alias-border-l1);flex:0 0 150px;gap:2px;padding:0 2px 0 0}._7KE1Ra_detail{flex:1 1 0;width:0;min-width:0;gap:2px;padding:0 0 0 2px}._7KE1Ra_twocol ._7KE1Ra_optionCopy{white-space:normal;word-break:break-word;text-align:left}._7KE1Ra_masterActive{background:var(--dsw-alias-interactive-bg-hover)}._7KE1Ra_status,._7KE1Ra_empty{color:var(--dsw-alias-label-tertiary);padding:8px;font-size:12px;line-height:18px}._7KE1Ra_error,._7KE1Ra_warning{border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-danger-bg);color:var(--dsw-alias-danger-label);padding:8px;font-size:12px;line-height:18px;display:flex;gap:8px;align-items:center}._7KE1Ra_warning{background:var(--dsw-alias-warning-bg);color:var(--dsw-alias-warning-label)}._7KE1Ra_retry{border-radius:var(--dsw-radius-sm);border:1px solid currentColor;color:inherit;background:transparent;cursor:pointer;padding:2px 8px;font-size:12px;flex:none}._7KE1Ra_groups{padding:0;gap:2px;display:flex;flex-direction:column;overflow-y:auto;max-height:min(420px,100vh - 96px)}._7KE1Ra_option{border-radius:var(--dsw-radius-sm);min-height:28px;color:var(--dsw-alias-label-secondary);cursor:pointer;display:flex;align-items:center;gap:8px;padding:4px 8px;border:0;background:transparent;font-size:12px;line-height:18px;width:100%;text-align:left}._7KE1Ra_option:focus-visible{outline:1.5px solid var(--dsw-alias-focus-ring);outline-offset:-1.5px}._7KE1Ra_option:not(:disabled):hover{color:var(--dsw-alias-label-secondary-hover);background:var(--dsw-alias-interactive-bg-hover)}._7KE1Ra_option:not(:disabled):hover._7KE1Ra_selected{color:var(--dsw-alias-label-primary-hover)}._7KE1Ra_selected{color:var(--dsw-alias-label-primary)}._7KE1Ra_optionCopy{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1 1 auto;min-width:0}._7KE1Ra_modelName{color:inherit}._7KE1Ra_check{color:var(--dsw-alias-menu-icon);flex:none;display:inline-flex}";
		const tagId = "dsh-model-menu-masterdetail/ModelSelect.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-model-menu-masterdetail";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		const C = {
			"cell": "_7KE1Ra_cell",
			"cellChevron": "_7KE1Ra_cellChevron",
			"cellLabel": "_7KE1Ra_cellLabel",
			"cellValue": "_7KE1Ra_cellValue",
			"check": "_7KE1Ra_check",
			"chevron": "_7KE1Ra_chevron",
			"chevronOpen": "_7KE1Ra_chevronOpen",
			"empty": "_7KE1Ra_empty",
			"error": "_7KE1Ra_error",
			"group": "_7KE1Ra_group",
			"groupTitle": "_7KE1Ra_groupTitle",
			"groups": "_7KE1Ra_groups",
			"twocol": "_7KE1Ra_twocol",
			"master": "_7KE1Ra_master",
			"detail": "_7KE1Ra_detail",
			"masterActive": "_7KE1Ra_masterActive",
			"menu": "_7KE1Ra_menu",
			"modelName": "_7KE1Ra_modelName",
			"option": "_7KE1Ra_option",
			"optionCopy": "_7KE1Ra_optionCopy",
			"retry": "_7KE1Ra_retry",
			"root": "_7KE1Ra_root",
			"selected": "_7KE1Ra_selected",
			"status": "_7KE1Ra_status",
			"trigger": "_7KE1Ra_trigger",
			"triggerEffort": "_7KE1Ra_triggerEffort",
			"triggerIcon": "_7KE1Ra_triggerIcon",
			"triggerLabel": "_7KE1Ra_triggerLabel",
			"warning": "_7KE1Ra_warning"
		};
		//#endregion

		//#region locale (bundled; the seat's labels, resolved against the document language)
		const zhDict = {
			"provider.account": "DeepSeek 账号",
			"trigger.fallback": "请选择模型",
			"trigger.loading": "正在加载模型…",
			"menu.aria": "模型与推理等级",
			"menu.effort": "推理等级",
			"effort.providerDefault": "Default",
			"status.loading": "正在刷新模型列表…",
			"error.action": "模型操作失败：{message}",
			"error.sessionInUse": "当前会话已被占用，可能是其他正在运行的 DSH 导致的（如其他 dsh web、桌面端），请退出其他正在运行的 DSH 后重试。",
			"action.reload": "重新加载",
			"warning.groupLoad": "{name} 加载失败：{message}",
			"empty.models": "没有可用的模型。",
			"empty.efforts": "当前模型未提供推理等级。"
		};
		const enDict = {
			"provider.account": "DeepSeek Account",
			"trigger.fallback": "Select model",
			"trigger.loading": "Loading models…",
			"menu.aria": "Model and reasoning effort",
			"menu.effort": "Effort",
			"effort.providerDefault": "Default",
			"status.loading": "Refreshing model list…",
			"error.action": "Model operation failed: {message}",
			"error.sessionInUse": "This session is already in use, possibly by another running DSH instance. Quit other running DSH instances and try again.",
			"action.reload": "Reload",
			"warning.groupLoad": "{name} failed to load: {message}",
			"empty.models": "No models available.",
			"empty.efforts": "This model provides no reasoning effort levels."
		};
		const interpolator = (text, values) => text.replace(/\{(\w+)\}/g, (m, key) => key in values ? String(values[key]) : m);
		const makeT = () => {
			const lang = (typeof document !== "undefined" ? document.documentElement.lang : "") || "zh";
			const dict = lang.toLowerCase().startsWith("zh") ? zhDict : enDict;
			return (key, values) => {
				const template = dict[key] ?? enDict[key] ?? key;
				return values === void 0 ? template : interpolator(template, values);
			};
		};
		//#endregion

		const MEASURE_STYLE = {
			visibility: "hidden",
			left: 0,
			top: 0
		};

		//#region ModelSelect — master-detail port of the builtin composer model seat
		function ModelSelect({ locked, available, directory, load, select }) {
			const t = makeT();
			const state = (0, react.useSyncExternalStore)((fn) => directory.subscribe(fn), () => directory.getSnapshot());
			const [open, setOpen] = (0, react.useState)(false);
			const [pane, setPane] = (0, react.useState)("root");
			const [activeProvider, setActiveProvider] = (0, react.useState)(null);
			const lastActionRef = (0, react.useRef)("load");
			const [toast, setToast] = (0, react.useState)(null);
			const toastSeq = (0, react.useRef)(0);
			const rootRef = (0, react.useRef)(null);
			const triggerRef = (0, react.useRef)(null);
			const menuRef = (0, react.useRef)(null);
			const [menuPos, setMenuPos] = (0, react.useState)(null);
			const itemRefs = (0, react.useRef)([]);
			const id = (0, react.useId)();
			const groups = (0, react.useMemo)(() => state.groups.toSorted((left, right) => (left.id === "deepseek-account" ? 0 : left.id === "deepseek-official" ? 1 : 2) - (right.id === "deepseek-account" ? 0 : right.id === "deepseek-official" ? 1 : 2)), [state.groups]);
			const choices = (0, react.useMemo)(() => groups.flatMap((group) => group.models.map((model) => ({
				group,
				model,
				selection: {
					provider: group.id,
					model: model.id,
					...model.reasoning?.defaultEffort === void 0 ? {} : { reasoningEffort: model.reasoning.defaultEffort }
				}
			}))), [groups]);
			const currentChoice = choices[state.current === null ? -1 : choices.findIndex((c) => c.selection.provider === state.current?.provider && c.selection.model === state.current.model)];
			const reasoning = currentChoice?.model.reasoning;
			const effectiveEffort = state.current?.reasoningEffort ?? reasoning?.defaultEffort;
			const effortLabel = reasoning === void 0 ? state.retainedEffort : effectiveEffort === void 0 ? t("effort.providerDefault") : reasoning.efforts.find((level) => level.id === effectiveEffort)?.name ?? effectiveEffort;
			const effortChoices = (0, react.useMemo)(() => reasoning === void 0 ? [] : [...reasoning.defaultEffort === void 0 ? [{
				key: "provider-default",
				effort: void 0,
				label: t("effort.providerDefault")
			}] : [], ...reasoning.efforts.map((effort) => ({
				key: `effort:${effort.id}`,
				effort: effort.id,
				label: effort.name
			}))], [reasoning, t]);
			const { pending } = state;
			const busy = pending !== null;
			const reload = () => {
				lastActionRef.current = "load";
				load();
			};
			(0, react.useEffect)(() => {
				if (!open) return;
				const closeOutside = (event) => {
					if (rootRef.current?.contains(event.target) === true) return;
					if (menuRef.current?.contains(event.target) === true) return;
					setOpen(false);
				};
				document.addEventListener("mousedown", closeOutside);
				return () => {
					document.removeEventListener("mousedown", closeOutside);
				};
			}, [open]);
			const paneFocus = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				const intent = paneFocus.current;
				paneFocus.current = null;
				if (!open || intent === null) return;
				if (intent === "drill") {
					(menuRef.current?.querySelector("[role=\"menuitemradio\"][aria-checked=\"true\"]:not([disabled])") ?? itemRefs.current.find((item) => item !== null && !item.disabled) ?? triggerRef.current)?.focus();
					return;
				}
				const cell = itemRefs.current[intent === "effort" ? 1 : 0];
				(cell !== null && cell !== void 0 && !cell.disabled ? cell : triggerRef.current)?.focus();
			}, [open, pane]);
			(0, react.useLayoutEffect)(() => {
				if (!open) {
					setMenuPos(null);
					return;
				}
				const place = () => {
					const rect = triggerRef.current?.getBoundingClientRect();
					if (rect === void 0) return;
					const MARGIN = 12;
					const lw = menuRef.current?.offsetWidth ?? 0;
					const lh = menuRef.current?.offsetHeight ?? 0;
					let x = rect.right - lw;
					let y = rect.top - 8 - lh;
					if (lw > 0) x = Math.min(Math.max(x, MARGIN), window.innerWidth - lw - MARGIN);
					if (lh > 0) y = Math.min(Math.max(y, MARGIN), window.innerHeight - lh - MARGIN);
					setMenuPos({
						left: x,
						top: y
					});
				};
				place();
				window.addEventListener("scroll", place, true);
				window.addEventListener("resize", place);
				return () => {
					window.removeEventListener("scroll", place, true);
					window.removeEventListener("resize", place);
				};
			}, [
				open,
				pane,
				state
			]);
			if (!available) return null;
			const show = () => {
				triggerRef.current?.focus();
				if (state.current === null) paneFocus.current = "drill";
				setPane("model");
				setOpen(true);
				reload();
			};
			const close = (restoreFocus = false) => {
				setOpen(false);
				setPane("root");
				setActiveProvider(null);
				if (restoreFocus) queueMicrotask(() => {
					triggerRef.current?.focus();
				});
			};
			const drill = (next) => {
				paneFocus.current = "drill";
				setPane(next);
			};
			const back = (from) => {
				paneFocus.current = from;
				setPane(from === "effort" ? "model" : "root");
			};
			const moveFocus = (offset) => {
				const items = itemRefs.current.filter((item) => item !== null);
				if (items.length === 0) return;
				const active = items.findIndex((item) => item === document.activeElement);
				items[active === -1 ? offset > 0 ? 0 : items.length - 1 : (active + offset + items.length) % items.length]?.focus();
			};
			const onRootKeyDown = (event) => {
				if (event.key === "Escape" && open) {
					event.preventDefault();
					if (pane !== "root" && state.current !== null) back(pane);
					else close(true);
					return;
				}
				if (!open) return;
				if (event.key === "Tab") {
					if (event.shiftKey) {
						event.preventDefault();
						if (pane !== "root" && state.current !== null) back(pane);
						else close(true);
						return;
					}
					const focused = document.activeElement;
					const rows = itemRefs.current.filter((item) => item !== null);
					if (focused instanceof HTMLButtonElement && rows.includes(focused)) {
						event.preventDefault();
						focused.click();
						return;
					}
					if (focused !== triggerRef.current) return;
					event.preventDefault();
					(menuRef.current?.querySelector("[role=\"menuitemradio\"][aria-checked=\"true\"]:not([disabled])") ?? rows.find((item) => !item.disabled))?.focus();
					return;
				}
				if (event.key === "ArrowDown" || event.key === "ArrowUp") {
					event.preventDefault();
					moveFocus(event.key === "ArrowDown" ? 1 : -1);
				}
			};
			const onBlur = (event) => {
				if (event.relatedTarget instanceof Node && (rootRef.current?.contains(event.relatedTarget) === true || menuRef.current?.contains(event.relatedTarget) === true)) return;
				close();
			};
			const settleSelection = (result) => {
				if (result === void 0) return;
				if (result.ok) {
					if (rootRef.current !== null) close(true);
					return;
				}
				const { error } = result;
				toastSeq.current += 1;
				setToast({
					seq: toastSeq.current,
					text: error.code === "session/writer-held" ? t("error.sessionInUse") : t("error.action", { message: `${error.code}: ${error.message}` })
				});
			};
			const submit = (selection) => {
				lastActionRef.current = "select";
				triggerRef.current?.focus();
				select(selection).then(settleSelection);
			};
			const choose = (selection) => {
				if (state.current?.provider === selection.provider && state.current.model === selection.model) {
					close(true);
					return;
				}
				submit(selection);
			};
			const chooseEffort = (effort) => {
				if (state.current === null) return;
				if (effectiveEffort === effort) {
					close(true);
					return;
				}
				submit({
					provider: state.current.provider,
					model: state.current.model,
					...effort === void 0 ? {} : { reasoningEffort: effort }
				});
			};
			const waiting = state.current === null && state.status === "loading";
			const modelLabel = waiting ? t("trigger.loading") : currentChoice?.model.name ?? (state.current === null ? t("trigger.fallback") : `${state.current.provider}/${state.current.model}`);
			const triggerLabel = effortLabel === void 0 ? modelLabel : `${modelLabel} · ${effortLabel}`;
			const triggerAria = waiting ? t("trigger.loading") : state.current === null ? t("trigger.fallback") : `${modelLabel}`;
			const currentGroup = state.current === null ? null : groups.find((group) => group.id === state.current.provider) ?? null;
			const effectiveGroupId = activeProvider ?? currentGroup?.id ?? groups[0]?.id ?? null;
			const activeGroup = groups.find((group) => group.id === effectiveGroupId) ?? null;
			itemRefs.current = [];
			let itemIndex = 0;
			const itemRef = () => {
				const at = itemIndex++;
				return (node) => {
					itemRefs.current[at] = node;
				};
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				ref: rootRef,
				className: C.root,
				onKeyDown: onRootKeyDown,
				onBlur,
				onMouseDown: (event) => {
					if (event.target instanceof Element && event.target.closest("button") !== null) event.preventDefault();
				},
				children: [
					(0, react_jsx_runtime.jsxs)("button", {
						ref: triggerRef,
						type: "button",
						className: C.trigger,
						"aria-label": triggerAria,
						"aria-haspopup": "menu",
						"aria-expanded": open,
						"aria-controls": open ? `${id}-menu` : void 0,
						title: triggerLabel,
						"aria-busy": busy,
						disabled: locked,
						onClick: () => {
							if (open) close(true);
							else show();
						},
						children: [
							(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDataOutlineRegular, {
								className: C.triggerIcon,
								size: 16
							}),
							(0, react_jsx_runtime.jsx)("span", {
								className: C.triggerLabel,
								children: modelLabel
							}),
							effortLabel !== void 0 && (0, react_jsx_runtime.jsx)("span", {
								className: C.triggerEffort,
								children: effortLabel
							}),
							busy ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "ongoing" }) : (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, { className: clsx(C.chevron, open && C.chevronOpen) })
						]
					}),
					open && (0, react_dom.createPortal)((0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.MenuSurface, {
						ref: menuRef,
						id: `${id}-menu`,
						className: C.menu,
						style: menuPos ?? MEASURE_STYLE,
						role: "menu",
						"aria-label": t("menu.aria"),
						"aria-busy": state.status === "loading" || busy,
						children: [
							pane === "root" && (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [(0, react_jsx_runtime.jsxs)("button", {
								ref: itemRef(),
								type: "button",
								role: "menuitem",
								className: C.cell,
								onClick: () => {
									drill("model");
								},
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										className: C.cellLabel,
										children: t("trigger.fallback") === "请选择模型" ? "模型" : "Model"
									}),
									(0, react_jsx_runtime.jsx)("span", {
										className: C.cellValue,
										children: modelLabel
									}),
									(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular, { className: C.cellChevron })
								]
							}), reasoning !== void 0 && (0, react_jsx_runtime.jsxs)("button", {
								ref: itemRef(),
								type: "button",
								role: "menuitem",
								className: C.cell,
								onClick: () => {
									drill("effort");
								},
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										className: C.cellLabel,
										children: t("menu.effort")
									}),
									(0, react_jsx_runtime.jsx)("span", {
										className: C.cellValue,
										children: effortLabel
									}),
									(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular, { className: C.cellChevron })
								]
							})] }),
							pane === "model" && (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
	state.status === "loading" && (0, react_jsx_runtime.jsx)("div", {
		className: C.status,
		children: t("status.loading")
	}),
	state.error !== null && lastActionRef.current === "load" && (0, react_jsx_runtime.jsxs)("div", {
		className: C.error,
		children: [(0, react_jsx_runtime.jsx)("span", { children: t("error.action", { message: state.error }) }), (0, react_jsx_runtime.jsx)("button", {
			type: "button",
			className: C.retry,
			onClick: reload,
			children: t("action.reload")
		})]
	}),
	state.failures.map((failure) => (0, react_jsx_runtime.jsxs)("div", {
		className: C.warning,
		children: [(0, react_jsx_runtime.jsx)("span", { children: t("warning.groupLoad", {
			name: failure.id === "deepseek-account" ? t("provider.account") : failure.name,
			message: failure.message
		}) }), (0, react_jsx_runtime.jsx)("button", {
			type: "button",
			className: C.retry,
			onClick: reload,
			children: t("action.reload")
		})]
	}, failure.id)),
	(0, react_jsx_runtime.jsxs)("div", {
		className: clsx(C.twocol, "scrollable"),
		onMouseLeave: () => setActiveProvider(null),
		children: [
			(0, react_jsx_runtime.jsxs)("div", {
				className: C.master,
				children: [
					groups.map((group, index) => {
						const groupSelected = state.current?.provider === group.id;
						const isActive = effectiveGroupId === group.id;
						return (0, react_jsx_runtime.jsx)("button", {
							ref: index === 0 ? itemRef() : void 0,
							type: "button",
							role: "menuitem",
							className: clsx(C.option, isActive && C.selected, groupSelected && C.masterActive),
							disabled: busy,
							onMouseEnter: () => setActiveProvider(group.id),
							onFocus: () => setActiveProvider(group.id),
							onClick: () => {
								setActiveProvider(group.id);
								if (group.models.length === 1) choose({
									provider: group.id,
									model: group.models[0].id
								});
							},
							children: [(0, react_jsx_runtime.jsx)("span", {
								className: C.optionCopy,
								children: (0, react_jsx_runtime.jsx)("span", {
									className: C.modelName,
									children: group.id === "deepseek-account" ? t("provider.account") : group.name
								})
							}), (0, react_jsx_runtime.jsx)("span", {
								className: C.check,
								children: groupSelected ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}) : null
							})]
						}, group.id);
					}),
					state.status === "ready" && groups.length === 0 && (0, react_jsx_runtime.jsx)("div", {
						className: C.empty,
						children: t("empty.models")
					})
				]
			}),
			(0, react_jsx_runtime.jsx)("div", {
				className: C.detail,
				children: activeGroup === null ? (0, react_jsx_runtime.jsx)("div", {
					className: C.empty,
					children: t("empty.models")
				}) : activeGroup.models.map((model) => {
					const selected = state.current?.provider === activeGroup.id && state.current.model === model.id;
					return (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitemradio",
						"aria-checked": selected,
						className: clsx(C.option, selected && C.selected),
						title: model.name,
						disabled: busy,
						onClick: () => {
							choose({
								provider: activeGroup.id,
								model: model.id
							});
						},
						children: [(0, react_jsx_runtime.jsx)("span", {
							className: C.optionCopy,
							children: (0, react_jsx_runtime.jsx)("span", {
								className: C.modelName,
								children: model.name
							})
						}), (0, react_jsx_runtime.jsx)("span", {
							className: C.check,
							children: pending?.provider === activeGroup.id && pending.model === model.id ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "ongoing" }) : selected ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}) : null
						})]
					}, model.id);
				})
			})
		]
	})
] }), pane === "model" && effortChoices.length > 0 && (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "menuitem",
								className: C.cell,
								onClick: () => {
									drill("effort");
								},
								children: [(0, react_jsx_runtime.jsx)("span", {
									className: C.cellLabel,
									children: t("menu.effort")
								}), (0, react_jsx_runtime.jsx)("span", {
									className: C.cellValue,
									children: effortLabel
								}), (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular, { className: C.cellChevron })]
							}), pane === "effort" && (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [state.error !== null && lastActionRef.current === "load" && (0, react_jsx_runtime.jsxs)("div", {
								className: C.error,
								children: [(0, react_jsx_runtime.jsx)("span", { children: t("error.action", { message: state.error }) }), (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: C.retry,
									onClick: reload,
									children: t("action.reload")
								})]
							}), effortChoices.length === 0 ? (0, react_jsx_runtime.jsx)("div", {
								className: C.empty,
								children: t("empty.efforts")
							}) : effortChoices.map((level) => (0, react_jsx_runtime.jsxs)("button", {
								ref: itemRef(),
								type: "button",
								role: "menuitemradio",
								"aria-checked": effectiveEffort === level.effort,
								className: clsx(C.option, effectiveEffort === level.effort && C.selected),
								disabled: busy,
								onClick: () => {
									chooseEffort(level.effort);
								},
								children: [(0, react_jsx_runtime.jsx)("span", {
									className: C.optionCopy,
									children: (0, react_jsx_runtime.jsx)("span", {
										className: C.modelName,
										children: level.label
									})
								}), (0, react_jsx_runtime.jsx)("span", {
									className: C.check,
									children: pending !== null && pending.provider === state.current?.provider && pending.model === state.current.model && pending.reasoningEffort === level.effort ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "ongoing" }) : effectiveEffort === level.effort ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}) : null
								})]
							}, level.key))] })
						]
					}), document.body),
					toast !== null && (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Toast, {
						text: toast.text,
						icon: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
						anchor: rootRef.current?.closest("[data-composer-card]") ?? null,
						onDone: () => {
							setToast(null);
						}
					}, toast.seq)
				]
			});
		}
		//#endregion

		//#region apply — shadow the builtin seat at a lower priority (lowest renders)
		const inject = ["slots", "sessions", "modelDirectories", "remote", "remote.session"];
		function apply(ctx) {
			// 注入作用域只放行声明过的服务。ModelDirectoryResolver.directoryFor 内部要
			// 读 ctx.remote.session，所以 "remote"/"remote.session" 必须一起声明，
			// 否则座位渲染时抛 cannot get property "remote.session" without inject，
			// slot entry crashed，菜单空白。
			ctx.inject(["slots", "sessions", "modelDirectories", "remote", "remote.session"], (scope) => {
				const models = scope.modelDirectories;
				const sessions = scope.sessions;
				const slots = scope.slots;
				console.log("[mds] scoped ok; keys=", Object.keys(scope), "hasRemote=", typeof scope.remote);
				scope.effect(() => slots.inject("conversation.input.model", () => slots.register({
					name: "conversation.input.model",
					priority: -1,
					inject: (sessionId) => {
						let directory;
						try {
							directory = models.directoryFor(sessionId);
							console.log("[mds] directoryFor ok", String(sessionId));
						} catch (err) {
							console.error("[mds] directoryFor failed:", err && err.message);
							throw err;
						}
						const available = sessions.subagentAddress(sessionId) === void 0;
						return {
							available,
							directory: directory.store,
							load: () => {
								if (available) directory.load().catch(() => {});
							},
							select: (selection) => available ? directory.select(selection) : Promise.resolve(void 0)
						};
					}
				}, ModelSelect)), "dsh-model-menu-masterdetail: seat");
			});
		}
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
