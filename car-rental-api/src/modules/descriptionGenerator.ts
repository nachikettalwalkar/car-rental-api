import { SUB_TYPE, VEHICLE_TYPE } from "@prisma/client"

export const descriptionGenerator = (vehicleTypeName: VEHICLE_TYPE, subType: SUB_TYPE) => {
    if(vehicleTypeName === 'SEDAN') {
        if(subType === "BASIC") {
            return "Compact Sedan Manual";
        } else if(subType === "MID_RANGE") {
            return "Economy Sedan Manual";
        } else if(subType === "LUXURY") {
            return "Luxury Sedan Manual";
        }
    } else if(vehicleTypeName === 'VAN') {
        if(subType === "BASIC") {
            return "Compact Van Manual";
        } else if(subType === "MID_RANGE") {
            return "Economy Van Manual";
        } else if(subType === "LUXURY") {
            return "Luxury Van Manual";
        }
    } else if(vehicleTypeName === 'SUV') {
        if(subType === "BASIC") {
            return "Compact SUV Manual";
        } else if(subType === "MID_RANGE") {
            return "Economy SUV Manual";
        } else if(subType === "LUXURY") {
            return "Luxury SUV Manual";
        }
    }
    return "Compact Sedan Manual"
}