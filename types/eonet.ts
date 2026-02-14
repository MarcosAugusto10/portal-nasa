type Source = {
    id: string
    url: string
}

type Geometrie = {
    type: "Point" | "Polygon"
    date: string
    coordinates: number[] | number[][]
}

export type EONETEvent = {
    id: string
    title: string
    sources: Source[]
    geometries: Geometrie[]
} 