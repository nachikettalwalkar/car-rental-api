import { $Enums } from "@prisma/client";

export interface vehicleResponse {
    id: string;
    name: string;
    description: string;
    price: number;
    licensePlateNo: string;
    vehicleTypeId: string;
    subType: $Enums.SUB_TYPE;
    image: string;
    rentalStatus: $Enums.RENTAL_STATUS;
    rentalOfficeId: string;
}