export interface House {

    id: number;

    nombre: string;
    habitaciones: number;
    banos: number;
    precio: number;

    m2: number;

    petFriendly: boolean;
    piscina: boolean;
    jardin: boolean;
    terraza: boolean;
    wifi: boolean;
    aireAcondicionado: boolean;
    
    descripcion: string;
    fotoUrls: string [];
   
    
}