const google = require('./google')

const trademe = require('./trademe')
let closeEnough = []
//const ListingID;

// const testTradeMe = async () =>{
//     trademelist = await trademe.getFlatList("Auckland","Auckland")
//     console.log(trademelist)
// }

// testTradeMe()

const sortBySuburb = async (region,destination,district,duration) =>{
    //cycle through trademe list
    //get suburb
    let trademelist = await trademe.getFlatList(region,district);
    //console.log(trademelist)
    var promiseList = []
    trademelist.forEach((element) => {
        promiseList.push(
            google.getSuburbDuration(region,element.Suburb,destination).then((duration)=>{
                obj={}
                obj.suburb = element.Suburb;
                obj.suburbID = element.SuburbId;
                obj.duration = duration;
                //obj.numListings  = 1;
                return obj
            })

            
        )
    })
    suburblist=Promise.all(promiseList).then((v)=>{
        v.forEach((item) => {
            if (item.duration > duration) {
                console.log("deleted");
            } else {
                closeEnough.push(item);
                console.log("Added");
            }
        });
        closeEnough.sort(function(a,b){
            if(a.duration > b.duration){
                return 1;
            }
            if(a.duration < b.duration){
                return -1;
            }
            return 0;
        })
        
        return v})

    console.log(suburblist)

    return suburblist
}
// sortBySuburb("Auckland", "GridAKL", "Auckland","50").then((d) => {
//     console.log(closeEnough)
// });




const GridList=async(region,district, suburbID,destination)=>{
  flatslist=await trademe(region,district, suburbID);
  console.log(flatslist)
  flatslist.forEach(async(flat)=>{
    flatDispObj={}
    flatDispObj.title=flat.Title
    flatDispObj.flatID=flat.ListingId
    flatDispObj.price=flat.PriceDisplay
    suburb = flat.Suburb
    flatDispObj.duration= await google.getFlatDuration(flat.address, region, suburbID, destination)
    console.log(flatDispObj)
  })
}
//GridList("Auckland","Auckland",282,"GridAkl")


const specificFlatDetails = (flat,destination) =>{
    //get region and suburb from trademe
    region = stringFormat(region)
    suburb = stringFormat(suburb)
    destination = stringFormat(destination)
    flat = stringFormat(flat)
    let flatDuration = google.getFlatDuration(flat,region,suburb,destination)
}

const stringFormat = (string) => { //removes whitespace in the input
    string = string.replace(/\W+/g, '-').toLowerCase();
    return string;
}


//console.log(suburbDuration)
