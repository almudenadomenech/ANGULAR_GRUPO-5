export interface House {


    id: number;

    titulo: string;
    habitaciones: number;
    banos: number;
    precio: number;

    metros2: number;
    destino: string;

    petFriendly: boolean;
    piscina: boolean;
    jardin: boolean;
    terraza: boolean;
    wifi: boolean;
    aireAcondicionado: boolean;
    
    descripcion: string;
    fotoUrls: string [];
   
    
}