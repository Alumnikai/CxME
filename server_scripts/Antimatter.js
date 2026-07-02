//onEvent('recipes', event => {

/*crafting antimatter stages*/
ServerEvents.recipes(event => {
    event.shaped({
      "type": "create:mechanical_crafting",
      "key": {
        "N": {
          "item": "mekanism:pellet_antimatter"
        }
      },
      "pattern": [
        "NNN",
        "NNN",
        "NNN"
      ],
      "result": {
        "count": 1,
        "item": "kubejs:antimatter_ingot"
      },
      //"acceptMirrored": true
    })
})

ServerEvents.recipes(event => {
  event.recipes.create.compacting(['kubejs:antimatter_block'],[
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'kubejs:antimatter_ingot',
    'mekanism:ingot_steel',
    'mekanism:ingot_steel',
    'mekanism:ingot_steel',
    'mekanism:ingot_steel',
    'mekanism:ingot_steel',
    'mekanism:ingot_steel',
    'mekanism:ingot_steel',
    'mekanism:ingot_steel',
  ])
})

// ServerEvents.recipes(event => {
//     event.shapeless('kubejs:antimatter_block', [
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           'kubejs:antimatter_ingot',	
//           ])
//       })
// old recipe ^

/*uncrafting antimatter stages*/
ServerEvents.recipes(event => {
  event.custom({
  
   "type": "minecraft:crafting_shapeless",
   "category": "misc",
    "ingredients": [
     {
       "item": "kubejs:antimatter_block"
      }
   ],
    "result": {
      "count": 9,
      "item": "kubejs:antimatter_ingot"
    }

  })
})

ServerEvents.recipes(event => {
  event.custom({
  
   "type": "minecraft:crafting_shapeless",
   "category": "misc",
    "ingredients": [
     {
       "item": "kubejs:antimatter_ingot"
      }
   ],
    "result": {
      "count": 9,
      "item": "mekanism:pellet_antimatter"
    }

  })
})