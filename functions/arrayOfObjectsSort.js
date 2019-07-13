/*WAREHOUSE OPTIMIZATION
 At ACME warehouse the warehouse manager has observed orders taking a long time to pick and
 believes that moving more popular items to easier to access locations may help.

 - Workers pick an order by placing items on a pallet at the dock door.
 - Products are stored (inefficiently) in a single aisle with multiple shelves.
 - As the shelf number increases, it is located further down the aisle and
   further away from the dock door.
 - On average it takes 5*X seconds for a warehouse worker to retrieve an item
   from shelf X and place it on the pallet.
 - A warehouse worker can only carry a single item at a time.
 - A shelf can only hold one type of item.

 Which items should be on which shelves to optimize picking speed based on
 yesterday's orders?
 
Example table contents:

*   Shelf 1:      Item 12
*   Shelf 2:      Item 11
*   Shelf 3:      Item 10
*   Shelf 4:      Item 09
*   Shelf 5:      Item 08
*   Shelf 6:      Item 07
*   Shelf 7:      Item 06
*   Shelf 8:      Item 05
*   Shelf 9:      Item 04
*   Shelf 10:     Item 03
*   Shelf 11:     Item 02
*   Shelf 12:     Item 01
*/



var orders = [
    {
        id: 1,
        orderLines: [
            { itemName: "Item 01", quantity: 1 },
            { itemName: "Item 02", quantity: 3 },
            { itemName: "Item 03", quantity: 25 },
            { itemName: "Item 04", quantity: 12 },
        ],
    },
    {
        id: 2,
        orderLines: [
            { itemName: "Item 01", quantity: 1 },
            { itemName: "Item 08", quantity: 42 },
            { itemName: "Item 09", quantity: 13 },
            { itemName: "Item 12", quantity: 37 },
        ],
    },
    {
        id: 3,
        orderLines: [
            { itemName: "Item 12", quantity: 16 },
        ],
    },
    {
        id: 4,
        orderLines: [
            { itemName: "Item 10", quantity: 11 },
            { itemName: "Item 11", quantity: 10 },
        ],
    },
    {
        id: 5,
        orderLines: [
            { itemName: "Item 06", quantity: 7 },
            { itemName: "Item 07", quantity: 2 },
            { itemName: "Item 12", quantity: 14 },
        ],
    },
    {
        id: 6,
        orderLines: [
            { itemName: "Item 05", quantity: 17 },
        ],
    },
    {
        id: 7,
        orderLines: [
            { itemName: "Item 03", quantity: 5 },
            { itemName: "Item 07", quantity: 2 },
        ],
    },
    {
        id: 8,
        orderLines: [
            { itemName: "Item 02", quantity: 13 },
            { itemName: "Item 07", quantity: 7 },
            { itemName: "Item 09", quantity: 2 },
        ],
    },
    {
        id: 9,
        orderLines: [
            { itemName: "Item 01", quantity: 4 },
            { itemName: "Item 06", quantity: 17 },
            { itemName: "Item 07", quantity: 3 },
        ],
    },
    {
        id: 10,
        orderLines: [
            { itemName: "Item 11", quantity: 12 },
            { itemName: "Item 12", quantity: 1 },
        ],
    },
]


function main() {
    
    let arr2 =[]
    let arr3 =[]
   
    for(let i = 0; i < orders.length; i++){ 
        for(let j = 0; j < orders[i].orderLines.length; j++){
            if(!arr2.includes(orders[i].orderLines[j].itemName)){  
                arr2.push(orders[i].orderLines[j].itemName) // creating an array containing all the item types 
                arr3.push({name:'', total: 0}) // preparing a new array of objects for counting the total quantity of each item
            }
        for(let y = 0; y < arr2.length; y++){ 
            if(orders[i].orderLines[j].itemName === arr2[y]){ 
                arr3[y].name = arr2[y] 
                arr3[y].total += orders[i].orderLines[j].quantity //arr3 is the new array with the same item types and their total quantity 
            }
        }
      }
    }
     
    arr3.sort(function (a, b){
        return b.total - a.total
    })
 
    for(let x = 0; x < arr3.length; x++){
        console.log(`Shelf ${x+1}`, arr3[x].name)  
    }
}

    main()