Hooks.once("init", () => {
    if (!game.settings)
        return;
    game.settings.register("puppes-pf1e-downtime", "showDowntime", {
        name: "Show downtime tab",
        hint: "Makes downtime tab on character sheets",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });
});
Hooks.once("ready", () => {
    console.log("I am a loaded module");
});
export {};
//# sourceMappingURL=module.js.map