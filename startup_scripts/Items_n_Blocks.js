//TO DO 
//- v/ Retexture antiIngot and make animated
//-maybe find out how to retexture nugget?????
//-creative crate recipe
//-make github repo
//-make a first version on modrinth
//-^recipe photos, github link, compiling the mod, 




//onEvent('item.registry', event => {
StartupEvents.registry('item', event => {
    event.create('antimatter_ingot')
    .displayName('§5Antimatter Ingot')
    .texture('kubejs:item/alloy_atomic1')
    .maxStackSize(64)
})

StartupEvents.registry('block', event => {
    event.create('antimatter_block')
    .displayName('§5Block of Antimatter')
    .hardness(5.0)
    .resistance(10000.0)
    .requiresTool(true)
    .tagBlock('minecraft:minable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .textureAll('kubejs:block/anti_block_test')
})

StartupEvents.registry('item', event => {
    event.create('creative_blaze_cake_base')
    .displayName('§dCreative Blaze Cake Base')
    .texture('kubejs:item/creative_blaze_cake_base')
    .maxStackSize(64)
})

StartupEvents.registry('item', event => {
    event.create('crushed_shadow_steel')
    .displayName('§eCrushed Shadow Steel ')
    .texture('kubejs:item/crushed_shadow_steel')
    .maxStackSize(64)
})