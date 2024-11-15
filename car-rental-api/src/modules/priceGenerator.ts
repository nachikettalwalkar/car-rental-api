import { SUB_TYPE, VEHICLE_TYPE } from "@prisma/client"

export const priceGenerator = (vehicleType: VEHICLE_TYPE, vehicleSubtype: SUB_TYPE) => {
    if(vehicleType === 'SEDAN') {
        let basePrice = 50;
        switch(vehicleSubtype) {
            case "BASIC": return basePrice;
            case "MID_RANGE": return basePrice + 50;
            case "LUXURY": return basePrice + 100;
        }
    } else if(vehicleType === 'SUV') {
        let basePrice = 100;
        switch(vehicleSubtype) {
            case "BASIC": return basePrice;
            case "MID_RANGE": return basePrice + 50;
            case "LUXURY": return basePrice + 100;
        }
    } else if(vehicleType === 'VAN') {
        let basePrice = 150;
        switch(vehicleSubtype) {
            case "BASIC": return basePrice;
            case "MID_RANGE": return basePrice + 50;
            case "LUXURY": return basePrice + 100;
        }
    }
}