//onEvent('recipes', event => {

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('create:shadow_steel', 3),
    [
      ' N ',
      'NAN',
      ' N '
    ],
    {
      N: 'create:experience_nugget',
      A: 'kubejs:antimatter_ingot',
    }
  )
})

ServerEvents.recipes(event => {
  event.recipes.create.deploying(
    'create:shadow_steel_casing', 
    ['create:railway_casing', 'create:shadow_steel'])
})

ServerEvents.recipes(event => {
  event.recipes.create.item_application(
    'create:shadow_steel_casing', 
    ['create:railway_casing', 'create:shadow_steel'])
})

ServerEvents.recipes(event => {
  event.recipes.create.crushing([
    // 'create:experience_nugget',                       //output
    Item.of('mekanism:pellet_antimatter').withChance(0.25),   //outputs with chances
    Item.of('create:experience_nugget').withChance(0.25),
    Item.of('kubejs:crushed_shadow_steel').withChance(0.5)],
    'create:shadow_steel')     //input
    .processingTime(1200)
})