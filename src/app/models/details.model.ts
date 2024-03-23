export interface Details {
    likes?: number,
    created_at?:string,
    user?: {
        name: string;
        profile_image?: {
            medium: string
        }
    }
    alt_description?: string,
    urls?: {
        full: string
    }
}