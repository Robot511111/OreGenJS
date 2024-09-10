//made by InspectorBlue https://legacy.curseforge.com/minecraft/mc-mods/oregenjs

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores' ;
        props.blocks = [
        'railcraft:lead_ore',
        'railcraft:deepslate_lead_ore',
        'railcraft:nickel_ore',
        'railcraft:deepslate_nickel_ore',
        'railcraft:tin_ore',
        'railcraft:deepslate_tin_ore',
        'railcraft:silver_ore',
        'railcraft:deepslate_silver_ore',
        'railcraft:zinc_ore',
        'railcraft:deepslate_zinc_ore',
        'create:zinc_ore',
        'create:deepslate_zinc_ore',
        'occultism:silver_ore',
        'occultism:silver_ore_deepslate',
        'eidolon:lead_ore',
        'eidolon:deep_lead_ore',
        'eidolon:silver_ore',
        'eidolon:deep_silver_ore',
        'immersiveengineering:ore_aluminum',
        'immersiveengineering:deepslate_ore_aluminum',
        'iceandfire:silver_ore',
        'iceandfire:deepslate_silver_ore',
        'treasure2:ruby_ore',
        'treasure2:deepslate_ruby_ore',
        'treasure2:sapphire_ore',
        'treasure2:deepslate_sapphire_ore',
        'voluminousenergy:galena_ore',
        'voluminousenergy:deepslate_galena_ore'
    ]})
})
