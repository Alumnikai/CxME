//onEvent('recipes', event => {

ServerEvents.recipes(event => {
    event.shaped({
      "type": "create:mechanical_crafting",
      "key": {
        "A": {
          "item": "kubejs:antimatter_block"
        },
        "S": {
          "item": "create:shadow_steel_casing"
        },
        "R": {
          "item": "mekanismgenerators:reactor_glass"
        },
        "T": {
          "item": "mekanism:ultimate_fluid_tank"
        },
        "C": {
          "item": "mekanism:canteen"
        },
      },
      "pattern": [
        "ASSSA",
        "RTTTR",
        "RTCTR",
        "RTTTR",
        "ASSSA"
      ],
      "result": {
        "count": 1,
        "item": "mekanism:creative_fluid_tank"
      },
      //"acceptMirrored": true
    })
})

ServerEvents.recipes(event => {
  event.shaped({
    "type": "create:mechanical_crafting",
    "key": {
      "A": {
        "item": "kubejs:antimatter_block"
      },
      "S": {
        "item": "create:shadow_steel_casing"
      },
      "Q": {
        "item": "mekanism:qio_drive_supermassive"
      },
      "B": {
        "item": "mekanism:ultimate_bin"
      }
    },
    "pattern": [
      "ASSSA",
      "SBBBS",
      "SBQBS",
      "SBBBS",
      "ASSSA"
    ],
    "result": {
      "count": 1,
      "item": "mekanism:creative_bin"
    },
    //"acceptMirrored": true
  })
})

ServerEvents.recipes(event => {
  event.shaped({
    "type": "create:mechanical_crafting",
    "key": {
      "A": {
        "item": "kubejs:antimatter_block"
      },
      "S": {
        "item": "create:shadow_steel_casing"
      },
      "C": {
        "item": "mekanismgenerators:control_rod_assembly"
      },
      "Q": {
        "item": "mekanism:qio_dashboard"
      },
      "G": {
        "item": "mekanism:upgrade_stone_generator"
      },
      "W": {
        "item": "create:flywheel"
      },
      "F": {
        "item": "mekanism:ultimate_crushing_factory"
      },
    },
    "pattern": [
      "AGGGA",
      "SFFFS",
      "QCCCW",
      "SCCCS",
      "ASSSA"
    ],
    "result": {
      "count": 1,
      "item": "create:creative_motor"
    },
    //"acceptMirrored": true
  })
})

ServerEvents.recipes(event => {
  event.shaped({
    "type": "create:mechanical_crafting",
    "key": {
      "A": {
        "item": "kubejs:antimatter_ingot"
      },
      "S": {
        "item": "create:shadow_steel_casing"
      },
      "W": {
        "item": "create:wand_of_symmetry"
      },
      "E": {
        "item": "create:extendo_grip"
      },
      "B": {
        "item": "mekanism:creative_bin"
      },
    },
    "pattern": [
      "     ",
      "BEWSS",
      "AA   ",
      "     ",
      "     "
    ],
    "result": {
      "count": 1,
      "item": "create:handheld_worldshaper"
    },
    //"acceptMirrored": true
  })
})


ServerEvents.recipes(event => {
  event.custom({
    "type":"mekanism:nucleosynthesizing",
      "duration":1200,
      "gasInput":{"amount":250,"gas":"mekanism:antimatter"},
      "itemInput":{"ingredient":{"item":"kubejs:creative_blaze_cake_base"}},
      "output":{"item":"create:creative_blaze_cake"}
  })
})


ServerEvents.recipes(event => {
  event.recipes.create.compacting([
    'kubejs:creative_blaze_cake_base'],
    ['kubejs:crushed_shadow_steel',
    'minecraft:dragon_egg',
    'minecraft:sugar']
  ) .superheated()
})

// ServerEvents.recipes(event => {
//   event.shaped(
//     Item.of('botania:creative_pool', 1),
//     [
//       'S S',
//       'SSS',
//       '   '
//     ],
//     {
//       S: 'create:shadow_steel_casing',
//     }
//   )
// })