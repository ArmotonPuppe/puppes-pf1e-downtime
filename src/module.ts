function getSetting(key: string): unknown {
  return game!.settings!.get("puppes-pf1e-downtime" as any, key as any);
}

function registerSetting(key: string, data: object): void {
  game!.settings!.register("puppes-pf1e-downtime" as any, key as any, data);
}

Hooks.once("init", () => {
  if(!game.settings) return;
  const downtimeSetting = {
    name: "Show downtime tab",
    hint: "Makes downtime tab on character sheets",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  };
  registerSetting("showDowntime", downtimeSetting);
});

Hooks.once("ready", () => {
  console.log("I am a loaded module");
});

Hooks.on("renderActorSheetPFCharacter" as any,  (app:any, html:HTMLElement, data:any) => {
  if(!game.settings) return;
  let showDowntimeTab = getSetting("showDowntime");
  if(showDowntimeTab) {
    let downtimeBtn = '<a class="item" data-tab="downtime>Downtime"</a>'
    let tabs = html.querySelector('.tabs[data-group="primary"]');
    if (!tabs) return;
    if(!tabs.querySelector('.item[data-tab="downtime"]')){
      tabs.insertAdjacentHTML("beforeend", downtimeBtn);
    }
    let downtimeTab = '<div class="tab downtime flexcol" data-tab="downtime"><section class="downtime-body"><p>It works</p></section></div>';

    const body = html.querySelector(".primary-body");
    if(!body) return;
    body.insertAdjacentHTML("beforeend", downtimeTab);
  }
});