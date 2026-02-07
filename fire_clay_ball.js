ServerEvents.recipes(event => {
    // Basic heated mixing
   // event.recipes.create.mixing(
       // 'minecraft:diamond', // Output
       // 'minecraft:coal_block' // Input
   // ).heated(); // or .superheated()

    // Complex / Multiple Input-Output with Heat
    event.recipes.create.mixing(
        [
            'tfmg:fireclay_ball',
            
        ],
        [
            'minecraft:clay_ball', // Ingredient 1
			'create:cinder_flour' //Ingredient 2
        ]
    ).superheated().processingTime(200); // 200 ticks = 10 seconds
})
