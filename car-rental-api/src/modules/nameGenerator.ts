import { SUB_TYPE, VEHICLE_TYPE } from "@prisma/client"

export const nameGenerator = (vehicleTypeName: VEHICLE_TYPE, subType: SUB_TYPE) => {
    if(vehicleTypeName === 'SEDAN') {
        if(subType === "BASIC") {
            return "Toyota Yaris or similar";
        } else if(subType === "MID_RANGE") {
            return "Volkswagon Golf or similar";
        } else if(subType === "LUXURY") {
            return "BMW 3 Series or similar";
        }
    } else if(vehicleTypeName === 'VAN') {
        if(subType === "BASIC") {
            return "Peugeot partner or similar";
        } else if(subType === "MID_RANGE") {
            return "Volkswagon Caddy Cargo similar";
        } else if(subType === "LUXURY") {
            return "Mercedes Citan Panel Van";
        }
    } else if(vehicleTypeName === 'SUV') {
        if(subType === "BASIC") {
            return "Peugeot partner or similar";
        } else if(subType === "MID_RANGE") {
            return "Volkswagon Caddy Cargo similar";
        } else if(subType === "LUXURY") {
            return "Mercedes Citan Panel Van";
        }
    }
    return "Ford Fiesta or similar"
}
